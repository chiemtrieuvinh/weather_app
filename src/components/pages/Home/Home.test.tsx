// Must call React from 'react' if not the Home component in render can not run
import React from 'react';
import { render, screen, waitFor } from 'test-utils/testing-library';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import server from 'mocks/server';

import Home from './main';

test.only('handles loading routes', async () => {
  // reset handlers take handlers as arguments, and it will just reset any handlers that have those endpoints for the server
  render(<Home />);
  // ban đầu nó sẽ chạy chỗ này bị lỗi, tại vì mình yêu cầu nó phải kiếm được 2 alert
  // nhưng mà mình nhớ ra là mình chạy tới 2 hàm await từ server response nên sẽ có thằng chạy trước thằng chạy sau
  // nên khi 1 thằng chạy xong cái assertion của mình sẽ chạy luôn nên là nó sẽ báo fail vì sẽ không bao giờ có đủ 2 thg xuất hiện cùng 1 lúc

  // const alerts = await screen.findAllByRole('alert', { name: 'An unexpected error occurred. Please try again later.' })

  // nên mình sẽ sử dụng hàm waitFor để đợi khi mà mình thực sự có 2 alert xuất hiện hết mình mới chạy hàm assertion này
  // hàm waitFor này nó sẽ nhận vào 1 async function để đợi chạy khi đủ 2 alert
  // và nó sẽ await chính nó để chạy
  const loading = await screen.findByText(/loading .../i);
  expect(loading).toHaveTextContent('Loading ...');
});

test('Display 5 day forecast title', () => {
  render(<Home />);
  const foreCastTitle = screen.getByRole('heading', { name: /5 day forecast/i });
  expect(foreCastTitle).toHaveTextContent('5 DAY FORECAST');
  expect(foreCastTitle).toHaveStyle({ fontWeight: 500, color: 'white' });
  expect(foreCastTitle).toHaveClass('otomano-font');
});

describe('Rendering data from server', () => {
  // First rendering from server while not searching anything
  test('First rendering from server while not searching anything', async () => {
    render(<Home />);
    const searchInput = screen.getByRole('searchInput');
    const locationFound = await screen.findByText(/location: ho chi minh city/i);
    const dayFound = await screen.findByRole('text-value', { name: /mon/i });
    const imageFound = await screen.findByAltText(/heavy rain/i);
    const maxTempFound = await screen.findByRole('text-value', { name: /32/i });
    const minTempFound = await screen.findByRole('text-value', { name: /25/i });

    userEvent.clear(searchInput);
    userEvent.type(searchInput, 'Ho Chi Minh City');
    expect(searchInput).toHaveValue('Ho Chi Minh City');
    const searchIconButton = screen.getByRole('searchButton');
    userEvent.click(searchIconButton);
    expect(locationFound).toHaveTextContent('Location: Ho Chi Minh City');
    expect(dayFound).toHaveTextContent('Mon');
    expect(imageFound).toHaveAttribute('src', 'https://www.metaweather.com/static/img/weather/png/64/hr.png');
    expect(maxTempFound).toHaveTextContent('32°');
    expect(minTempFound).toHaveTextContent('25°');
  });
  // Rendering value when the location not found from server
  test('Rendering value when the location not found from server', async () => {
    render(<Home />);
  });
  // Refetch new data when press the search icon button when the location typing is done
  test('Refetch new data when press the search icon button when the location typing is done', async () => {
    render(<Home />);
  });
});
