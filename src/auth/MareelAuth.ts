import { IAuthentication } from '../types/Authentication';
import axios from 'axios';

interface IMareelAuthOptions {
    url: string,
    token: string,
}

export class MareelAuth implements IAuthentication {
        constructor(options: IMareelAuthOptions) {
        }

        async authenticate(username: string, password: string) {
            // TODO: Implement auth
            return true;
        }
}
