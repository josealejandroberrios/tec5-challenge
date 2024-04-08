import { ComicID } from './ComicID';
import { ComicTitle } from './ComicTitle';

export class Comic {
    private constructor(private readonly id: ComicID, private readonly title: ComicTitle) {}

    public static create({ id, title }: { id: number; title: string }): Comic {
        return new Comic(new ComicID(id), new ComicTitle(title));
    }

    titleValue(): string {
        return this.title.value;
    }
}
