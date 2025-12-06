import { AuthUser } from "../../types/user";

declare global {
    namespace Express {
        export interface Request {
            user?: AuthUser;
        }
    }
}
