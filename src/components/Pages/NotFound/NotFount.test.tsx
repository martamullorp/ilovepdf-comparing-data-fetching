import { render, resolvedComponent, t } from '@/test/utils';
import { screen } from '@testing-library/react';
import NotFound from './NotFound';

jest.mock('@/i18n/language/server', () => t());

describe('StaticPage', () => {
    it('renders the component and check content', async () => {
        const NotFoundPageResolved = await resolvedComponent(NotFound, {
            lng: 'es',
        });
        render(<NotFoundPageResolved />);

        const text = screen.getByText('translation.not-found');
        expect(text).toHaveTextContent('translation.not-found');
    });

    it('Check the content of the component', async () => {
        const NotFoundPageResolved = await resolvedComponent(NotFound, {
            lng: 'es',
        });
        render(<NotFoundPageResolved />);


        const linkToHome = screen.getByText('translation.to-home-page');
        expect(linkToHome).toHaveTextContent('translation.to-home-page');
    });
});
