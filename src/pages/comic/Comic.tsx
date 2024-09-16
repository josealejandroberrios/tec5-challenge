import { useEffect, useState, useCallback } from 'react';

import { CommicGetter } from '../../modules/comic/application/get';
import { ApiComicRepository } from '../../modules/comic/infrastructure/ApiComicRepository';
import { Comic } from '../../modules/comic/domain/Comic';
import { useRequestLoading } from '../../hooks/useRequestLoading';

const repository = new ApiComicRepository();
const service = new CommicGetter(repository);

export function ComicList() {
    const [comics, setComics] = useState<Comic[]>();
    const [limit, setLimit] = useState(15);
    const { loading, waitingRequest } = useRequestLoading(true);

    const loadComics = useCallback(() => {
        waitingRequest(() =>
            service
                .get(limit)
                .then((res) => {
                    if (res) setComics(res);
                    else console.log('error');

                    console.log('res', res);
                })
                .catch((errors: any) => {
                    console.log('errors', errors);
                })
        );
    }, [limit, waitingRequest]);

    useEffect(() => {
        loadComics();
    }, [loadComics]);

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

            {loading && <span>...Cargando</span>}

            {!loading && (
                <>
                    <ul>
                        {comics &&
                            comics.map((comic, k) => {
                                return <li key={k}>{comic.titleValue()}</li>;
                            })}
                    </ul>
                </>
            )}
        </>
    );
}
