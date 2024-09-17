import { Navigate, Route, Routes } from 'react-router-dom';
import { ComicList } from '../pages/comic/Comic';
import { CharactersList } from '../pages/character/Character';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/comic" />} />
            <Route path="/comic" Component={ComicList} />
            <Route path="/character" Component={CharactersList} />
        </Routes>
    );
};

export default AllRoutes;
