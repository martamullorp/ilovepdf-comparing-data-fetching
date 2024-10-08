import useQueryParam from '@/hooks/useQueryParam';
import { render, t } from '@/test/utils';
import { renderHook, screen, waitFor } from '@testing-library/react';
import { axe } from 'jest-axe';
import fetchMock from 'jest-fetch-mock';
import List from './List';

jest.mock('@/i18n/language/client', () => t());

const fetchDataURL = 'https://jsonplaceholder.typicode.com/posts';

describe('List', () => {
    const { result } = renderHook(() => useQueryParam('post'));
    const { pathname, createQueryString } = result.current;

    const renderList = (lng: string) =>
        render(<List lng={lng} pathname={pathname} createQueryString={createQueryString} />);

    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it('check accessibility', async () => {
        fetchMock.mockResponse(JSON.stringify([{ id: 1, title: 'Post 1' }]));
        const { container } = renderList('es');

        await waitFor(() => {
            screen.getByText('Json Fake-List');
        });

        const result = await axe(container);
        expect(result).toHaveNoViolations();
    });

    it('fetches and sets data successfully', async () => {
        const fetchData = fetchMock.mockResponse(JSON.stringify([{ id: 1, title: 'Post 1' }]));
        renderList('es');

        expect(fetchData).toHaveBeenCalledTimes(1);
        expect(fetchData).toHaveBeenCalledWith(fetchDataURL);

        const loading = screen.getByText('translation.loading');
        expect(loading).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText('Json Fake-List')).toBeInTheDocument();
            expect(screen.getByText('Post 1')).toBeInTheDocument();
            expect(screen.getByText('translation.go-to 1')).toBeInTheDocument();
        });
    });

    it('handles fetch error and sets error state', async () => {
        const fetchDataWithError = fetchMock.mockRejectOnce(new Error('Fetch error'));
        renderList('es');

        expect(fetchDataWithError).toHaveBeenCalledTimes(1);
        expect(fetchDataWithError).toHaveBeenCalledWith(fetchDataURL);

        await waitFor(() => expect(screen.getByText('Error fetching data.')).toBeInTheDocument());

        const pageTitle = screen.queryByText('Json Fake-List');
        expect(pageTitle).not.toBeInTheDocument();
    });
});
