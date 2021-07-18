import { render } from '@testing-library/react';
import { WeatherDetailProvider } from 'hooks/context/weatherDetails';

const renderWithContext = (ui, options) => render(ui, { wrapper: WeatherDetailProvider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithContext as render };
