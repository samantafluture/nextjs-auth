import React from 'react';
import { GetServerSideProps } from 'next';

const Pagina1Page = ({name} : {name: string}) => {
    return <div>Nome {name}</div>;
};

export default Pagina1Page;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {
            name: 'Samanta Fluture'
        }
    };
};
