import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import { isTokenExpired } from '../utils/auth';
import { parseCookies } from '../utils/cookies';
import { http } from '../utils/http';

interface PrivatePageProps {
    name: string;
}

const PrivatePage: NextPage<PrivatePageProps> = (props) => {
    return <div>Private Page - {props.name} </div>;
};

export default PrivatePage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const cookies = parseCookies(ctx.req);

    if (!cookies.token || isTokenExpired(cookies.token)) {
        return {
            redirect: {
                permanent: false,
                destination: '/login'
            }
        };
    }

    const { data } = await http.get('test', {
        headers: {
            Authorization: `Bearer ${cookies.token}`
        }
    });

    /*
    try {
        const { data } = await http.get('test', {
            headers: {
                Authorization: `Bearer ${cookies.token}`
            }
        });
    } catch (error) {
        if (
            axios.isAxiosError(error) &&
            (error.response?.status === 401 || error.response?.status === 403)
        ) {
            return {
                redirect: {
                    permanent: false,
                    destination: '/login'
                }
            };
        }

        throw error;
    }
    */

    return {
        props: data
    };
};
