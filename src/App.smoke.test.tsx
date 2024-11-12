import { render } from '@testing-library/react';
import App from './App';

describe('Smoke Test for App', () => {
  test('should render the application without crashing', () => {
    render(<App />);
  });
});
