import { GetServerSideProps } from 'next';

const PrivatePage = () => {
    return <div>Private Page</div>;
};

export default PrivatePage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    console.log(ctx.req.headers);

    return {
        props: {
            
        }
    }
};
