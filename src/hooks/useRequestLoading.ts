import { useCallback, useState } from 'react';

export const useRequestLoading = (initialLoading = true) => {
    const [loading, setLoading] = useState(initialLoading);

    const waitingRequest = useCallback(async (request: () => Promise<void>) => {
        setLoading(true);

        await request();

        setLoading(false);
    }, []);

    return { loading, waitingRequest };
};
