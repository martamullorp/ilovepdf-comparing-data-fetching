import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

// To check the accessibility
expect.extend(toHaveNoViolations);
