import { render, screen } from '@testing-library/react';
import Title from './Title';

test('renders MyComponent', async () => {
    render(<Title text="hello test" />);
    const myComponentElement = screen.getByText(/hello test/i);
    expect(myComponentElement).toBeInTheDocument();
});
