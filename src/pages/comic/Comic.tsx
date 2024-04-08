import { CommicGetter } from '../../modules/comic/application/get';
import { ApiComicRepository } from '../../modules/comic/infrastructure/ApiComicRepository';
import { useEffect, useState } from 'react';
import { Comic } from '../../modules/comic/domain/Comic';

const repository = new ApiComicRepository();
const service = new CommicGetter(repository);

export function ComicList() {
    const [comics, setComics] = useState<Comic[]>();
    const [limit, setLimit] = useState(15);

    const loadComics = () => {
        console.log("loading comics")
        service
            .get(limit)
            .then((res) => {
                if (res) setComics(res);
                else console.log('error');

                console.log('res', res);
            })
            .catch((errors: any) => {
                console.log('errors', errors);
            });
    }

    useEffect(() => {
        loadComics();
    }, []);

    const onChange = (value: string) => {
        setLimit(+value);
    };

    return (
        <>
            <label>Cantidad de resultados</label>
            <select onChange={(e) => onChange(e.target.value)}>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
            </select>

            <br />

            <ul>
                {comics &&
                    comics.map((comic, k) => {
                        return <li key={k}>{comic.titleValue()}</li>;
                    })}
            </ul>
        </>
    );
}
