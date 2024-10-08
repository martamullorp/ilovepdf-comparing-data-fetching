import { renderHook } from '@testing-library/react';
import { useSearchParams } from 'next/navigation';
import { act } from 'react-dom/test-utils';

import useQueryParam from './useQueryParam';

jest.mock('next/navigation');

describe('useQueryParam Unit Test', () => {
    it('should initialize with default parameter name', () => {
        const { result } = renderHook(() => useQueryParam());

        expect(result.current).toEqual(
            expect.objectContaining({
                paramName: 'id',
            }),
        );
    });

    it('should initialize with provided parameter name', () => {
        const customParamName = 'customId';
        const { result } = renderHook(() => useQueryParam(customParamName));

        expect(result.current).toEqual(
            expect.objectContaining({
                paramName: customParamName,
            }),
        );
    });

    it('should createQueryString with default parameter name', () => {
        const { result } = renderHook(() => useQueryParam());

        expect(result.current.createQueryString('789')).toBe('id=789');
    });

    it('should createQueryString with provided parameter name', () => {
        const customParamName = 'customId';
        const { result } = renderHook(() => useQueryParam(customParamName));

        expect(result.current.createQueryString('789')).toBe(`${customParamName}=789`);
    });

    it('should update param when searchParams change with default parameter name', () => {
        let result: any;
        let rerender: Function;

        (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams('id=123'));

        act(() => {
            ({ result, rerender } = renderHook(() => useQueryParam()));
        });

        expect(result.current).toEqual(
            expect.objectContaining({
                param: '123',
            }),
        );

        act(() => {
            (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams('id=456'));
            rerender();
        });

        expect(result.current).toEqual(
            expect.objectContaining({
                param: '456',
            }),
        );
    });
});
