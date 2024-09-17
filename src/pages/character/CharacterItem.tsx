import { useCallback, useState } from 'react';

import { Character } from '../../modules/character/domain/Character';

export function CharacterItem({ character }: { character: Character }) {
    const [showInfo, setShowInfo] = useState(false);

    const toggleShowInfo = useCallback(() => {
        setShowInfo((prevShowInfo) => !prevShowInfo);
    }, []);

    return (
        <div>
            <button type="button" onClick={toggleShowInfo}>
                {character.titleValue()}
            </button>

            {showInfo && (
                <div
                    style={{
                        marginTop: 8,
                        marginBottom: 8,
                        display: 'flex',
                        gap: 6,
                    }}
                >
                    <img
                        alt={character.titleValue()}
                        src={character.thumbnailValue()}
                        width={100}
                        height={100}
                    />

                    <span>{character.descriptionValue()}</span>
                </div>
            )}
        </div>
    );
}
