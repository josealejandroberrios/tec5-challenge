import { useEffect, useState, useCallback } from 'react';

import { CharacterGetter } from '../../modules/character/application/get';
import { ApiCharacterRepository } from '../../modules/character/infrastructure/ApiCharacterRepository';
import { Character } from '../../modules/character/domain/Character';
import { useRequestLoading } from '../../hooks/useRequestLoading';
import { CharacterItem } from './CharacterItem';

const repository = new ApiCharacterRepository();
const service = new CharacterGetter(repository);

export function CharactersList() {
    const [characters, setCharacters] = useState<Character[]>();
    const [limit, setLimit] = useState(15);
    const { loading, waitingRequest } = useRequestLoading(true);

    const loadComics = useCallback(() => {
        waitingRequest(() =>
            service
                .get(limit)
                .then((res) => {
                    if (res) setCharacters(res);
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
                        {characters &&
                            characters.map((character, k) => {
                                return (
                                    <li key={k}>
                                        <CharacterItem character={character} />
                                    </li>
                                );
                            })}
                    </ul>
                </>
            )}
        </>
    );
}
