import { isTokenExpired } from "../utils/auth";
import { parseCookies } from "../utils/cookies";

// hof -> high order function (função de primeira ordem)
export function withAuth(func: any) {
    return async (ctx: any) => {
        const cookies = parseCookies(ctx.req);

        if (!cookies.token || isTokenExpired(cookies.token)) {
            return {
                redirect: {
                    permanent: false,
                    destination: '/login'
                }
            };
        }

        return func(ctx, cookies);
    };
}
