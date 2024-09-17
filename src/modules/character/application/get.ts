import { Character } from '../domain/Character';
import { CharacterRepository } from '../domain/CharacterRepository';

export class CharacterGetter {
    private readonly repository: CharacterRepository;

    constructor(repository: CharacterRepository) {
        this.repository = repository;
    }

    async get(limit: number): Promise<Character[] | undefined> {
        return this.repository.get(limit);
    }
}
