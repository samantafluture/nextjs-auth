import type { NextPage } from 'next';
import { useAuthHttp } from '../hooks/useAuthHttp';

const Home: NextPage = () => {
    const { data, error } = useAuthHttp('user');
    return data ? <div>Hello world!</div> : null;
};

export default Home;
