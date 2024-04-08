import { Comic } from '../domain/Comic';
import { IAPIResponse } from '../../shared/infrastructure/IApiResponse';
import { ComicRepository } from '../domain/ComicRepository';
import { ApiResponse } from './ApiResponse';
import { BaseApiRepository } from '../../shared/infrastructure/BaseApiRepository';

const url = process.env.REACT_APP_URL;
const apikey = process.env.REACT_APP_API_KEY;
const hash = process.env.REACT_APP_HASH;
const ts = process.env.REACT_APP_TS;

export class ApiComicRepository extends BaseApiRepository implements ComicRepository {
    async get(limit: number): Promise<Comic[]> {

        const options = {
            method: 'GET',
        };

        const response = await this.execute<IAPIResponse<ApiResponse>>(
            `${url}/comics?apikey=${apikey}&hash=${hash}&ts=${ts}&limit=${limit}`,
            options
        );

        return response?.data.results.map((data) => {
            return Comic.create({ id: data.id, title: data.title });
        });

    }
}
