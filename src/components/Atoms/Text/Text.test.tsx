import { render } from '@/test/utils';
import { screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Text from './Text';

const randomText = 'Hello Text!';

describe('Text Component', () => {
    it('renders the component and check accessibility', async () => {
        const { container } = render(<Text text={randomText} />);
        const result = await axe(container);

        expect(result).toHaveNoViolations();
    });

    it('renders with default CSS classes', async () => {
        render(<Text text={randomText} />);

        const text = screen.getByText(randomText);
        expect(text).toHaveClass('text-colors-base-color');
        expect(text).toHaveClass('text');
        expect(text).toHaveClass('text__size-medium');
        expect(text).toHaveClass('text__margin-medium');
    });

    it('renders with the provided text', async () => {
        render(<Text text={randomText} />);

        const text = screen.getByText(randomText);
        expect(text).toBeInTheDocument();
        expect(text).toHaveTextContent(randomText);
    });

    it('applies custom class', async () => {
        render(<Text text="Hello Text!" customClass="custom-class" />);

        const text = screen.getByText(randomText);
        expect(text).toHaveClass('custom-class');
    });

    it('applies custom color', async () => {
        render(<Text text="Hello Text!" color="orange-color" />);

        const text = screen.getByText(randomText);
        expect(text).toHaveClass('text-colors-orange-color');
    });

    it('applies custom text transform and align', async () => {
        render(<Text text="Hello Text!" textTransform="capitalize" textAlign="center" />);

        const text = screen.getByText(randomText);
        expect(text).toHaveClass('text__transform-capitalize');
        expect(text).toHaveClass('text__align-center');
    });

    it('applies custom font size, margin and weight', async () => {
        render(<Text text="Hello Text!" fontSize="big" fontWeight="lighter" margin="small" />);

        const text = screen.getByText(randomText);
        expect(text).toHaveClass('text__size-big');
        expect(text).toHaveClass('text__weight-lighter');
        expect(text).toHaveClass('text__margin-small');
    });
});
