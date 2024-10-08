import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface UseQueryParamResult {
    pathname: string;
    param: string | null;
    // eslint-disable-next-line no-unused-vars
    createQueryString: (value: string) => string;
    paramName: string;
}

// * DEMO: Change or remove default value id
const useQueryParam = (paramName: string = 'id'): UseQueryParamResult => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [param, setParam] = useState<string | null>(null);

    const createQueryString = (value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set(paramName, value);
        return params.toString();
    };

    useEffect(() => {
        if (searchParams) {
            setParam(searchParams.get(paramName));
        }
    }, [searchParams, paramName]);

    return { pathname, param, createQueryString, paramName };
};

export default useQueryParam;
