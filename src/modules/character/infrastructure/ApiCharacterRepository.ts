import { Character } from '../domain/Character';
import { IAPIResponse } from '../../shared/infrastructure/IApiResponse';
import { CharacterRepository } from '../domain/CharacterRepository';
import { ApiResponse } from './ApiResponse';
import { BaseApiRepository } from '../../shared/infrastructure/BaseApiRepository';

const url = process.env.REACT_APP_URL;
const apikey = process.env.REACT_APP_API_KEY;
const hash = process.env.REACT_APP_HASH;
const ts = process.env.REACT_APP_TS;

export class ApiCharacterRepository extends BaseApiRepository implements CharacterRepository {
    async get(limit: number): Promise<Character[]> {
        const options = {
            method: 'GET',
        };

        const response = await this.execute<IAPIResponse<ApiResponse>>(
            `${url}/characters?apikey=${apikey}&hash=${hash}&ts=${ts}&limit=${limit}`,
            options
        );

        return response?.data.results.map((data) => {
            return Character.create({
                id: data.id,
                name: data.name,
                description: data.description,
                thumbnail: `${data.thumbnail.path}.${data.thumbnail.extension}`
            });
        });
    }
}
