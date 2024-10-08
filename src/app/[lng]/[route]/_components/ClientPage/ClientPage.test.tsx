import { nextLink, render, t } from '@/test/utils';
import { screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import ClientPage from './ClientPage';

jest.mock('@/i18n/language/client', () => t());
jest.mock('next/link', () => nextLink());

describe('ClientPage', () => {
    let onClickDecrementMock: jest.Mock;
    let onClickIncrementMock: jest.Mock;

    beforeEach(() => {
        onClickIncrementMock = jest.fn();
        onClickDecrementMock = jest.fn();
    });

    const renderClient = (lng: string) => render(<ClientPage lng={lng} />);

    it('renders the component and check accessibility', async () => {
        const { container } = renderClient('en');
        const result = await axe(container);

        expect(result).toHaveNoViolations();
    });

    it('has a client title and a client counter texts when component is rendered', () => {
        renderClient('en');

        const title = screen.getByText('translation.client.title');
        expect(title).toHaveTextContent('translation.client.title');

        const counter = screen.getByText('translation.client.counter');
        expect(counter).toHaveTextContent('translation.client.counter');
    });

    it('increments the counter when "Increment" button is pressed', async () => {
        const { user } = renderClient('en');

        const incrementButton = screen.getByText('+');

        incrementButton.onclick = onClickIncrementMock;

        await user.click(incrementButton);
        expect(onClickIncrementMock).toHaveBeenCalledTimes(1);
        expect(onClickDecrementMock).toHaveBeenCalledTimes(0);
    });

    it('decrements the counter when "Decrement" button is pressed', async () => {
        const { user } = renderClient('en');

        const decrementButton = screen.getByText('-');
        onClickDecrementMock = jest.fn();

        decrementButton.onclick = onClickDecrementMock;

        await user.click(decrementButton);
        expect(onClickDecrementMock).toHaveBeenCalledTimes(1);
        expect(onClickIncrementMock).toHaveBeenCalledTimes(0);
    });
});
