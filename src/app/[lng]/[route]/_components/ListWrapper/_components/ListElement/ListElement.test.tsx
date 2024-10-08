import { render, t } from '@/test/utils';
import { screen, waitFor } from '@testing-library/react';
import { axe } from 'jest-axe';
import fetchMock from 'jest-fetch-mock';
import ListElement from './ListElement';

jest.mock('@/i18n/language/client', () => t());

const fetchDataURL = (id: string) => `https://jsonplaceholder.typicode.com/posts/${id}`;

describe('ListElement', () => {
    const renderListElement = (lng: string, itemID: string) =>
        render(<ListElement lng={lng} pathname="en" itemID={itemID} />);

    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it('check accessibility', async () => {
        const id = '1';
        fetchMock.mockResponse(
            JSON.stringify({
                userId: 1,
                id: id,
                title: 'title',
                body: 'body',
            }),
        );
        const { container } = renderListElement('es', id);

        await waitFor(() => {
            screen.getByText(id);
        });

        const result = await axe(container);
        expect(result).toHaveNoViolations();
    });

    it('fetches and sets item data successfully', async () => {
        const id = '1';
        const fetchData = fetchMock.mockResponse(
            JSON.stringify({
                userId: 1,
                id: id,
                title: 'title',
                body: 'body',
            }),
        );
        renderListElement('es', id);

        expect(fetchData).toHaveBeenCalledTimes(1);
        expect(fetchData).toHaveBeenCalledWith(fetchDataURL(id));

        expect(screen.getByText('translation.loading')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText(id)).toBeInTheDocument();
            expect(screen.getByText('title')).toBeInTheDocument();
            expect(screen.getByText('body')).toBeInTheDocument();
            expect(screen.getByText('translation.to-dashboard')).toBeInTheDocument();
        });
    });

    it('handles fetch error and sets error state', async () => {
        const id = '2';
        const fetchDataWithError = fetchMock.mockRejectOnce(new Error('Fetch error'));
        renderListElement('es', id);

        expect(fetchDataWithError).toHaveBeenCalledTimes(1);
        expect(fetchDataWithError).toHaveBeenCalledWith(fetchDataURL(id));

        await waitFor(() => expect(screen.getByText('Error')).toBeInTheDocument());

        const listID = screen.queryByText(id);
        const listTitle = screen.queryByText('title');
        const listLink = screen.queryByTestId('list-element-home-link');

        expect(listID).not.toBeInTheDocument();
        expect(listTitle).not.toBeInTheDocument();
        expect(listLink).not.toBeInTheDocument();
    });
});
