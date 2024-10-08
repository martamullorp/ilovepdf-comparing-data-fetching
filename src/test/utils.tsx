import { render as renderComponent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
export * from '@testing-library/react';

// Reusable render method that configures user events for testing
export const render = (
    component: React.ReactElement,
    options?: Parameters<typeof renderComponent>[1],
) => {
    const user = userEvent.setup();

    return {
        ...renderComponent(component, options),
        user,
    };
};

export async function resolvedComponent(Component: any, props?: any) {
    const ComponentResolved = await Component(props);
    return () => ComponentResolved;
}

export const t = () => ({
    useTranslation: jest.fn((lng, namespace) => ({
        t: jest.fn((key) => `${namespace}.${key}`),
    })),
});
