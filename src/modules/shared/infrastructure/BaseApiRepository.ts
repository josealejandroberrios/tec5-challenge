const ERRORS: Record<string | number, string> = {
    401: 'You must provide a user key.',
    409: 'The passed referrer is not allowed for the passed API key.',
    default: 'Requested action failed',
};

export class BaseApiRepository {
    async execute<T>(url: string, options: any) {
        const apiResponse = await fetch(url, options);

        if (apiResponse.status === 200 || apiResponse.status === 201) {
            return (await apiResponse.json()) as T;
        } else {
            const errorMessage = ERRORS[apiResponse.status] ?? ERRORS.default;

            throw new Error(errorMessage);
        }
    }
}
