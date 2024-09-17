import { Character } from './Character';

export interface CharacterRepository {
    get(limit: number): Promise<Character[] | undefined>;
}
