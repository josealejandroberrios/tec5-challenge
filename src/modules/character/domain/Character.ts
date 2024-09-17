import { CharacterID } from './CharacterID';
import { CharacterName } from './CharacterName';
import { CharacterDescription } from './CharacterDescription';
import { CharacterThumbnail } from './CharacterThumbnail';

export class Character {
    private constructor(
        private readonly id: CharacterID,
        private readonly name: CharacterName,
        private readonly description: CharacterDescription,
        private readonly thumbnail: CharacterThumbnail
    ) {}

    public static create({
        id,
        name,
        description,
        thumbnail,
    }: {
        id: number;
        name: string;
        description: string;
        thumbnail: string;
    }): Character {
        return new Character(
            new CharacterID(id),
            new CharacterName(name),
            new CharacterDescription(description),
            new CharacterThumbnail(thumbnail)
        );
    }

    titleValue(): string {
        return this.name.value;
    }

    idValue(): number {
        return this.id.value;
    }

    descriptionValue(): string {
        return this.description.value;
    }

    thumbnailValue(): string {
        return this.thumbnail.value;
    }
}
