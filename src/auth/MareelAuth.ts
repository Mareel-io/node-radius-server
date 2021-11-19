import { IAuthentication } from '../types/Authentication';
import axios, { AxiosInstance } from 'axios';

interface IMareelAuthOptions {
    url: string,
    token: string,
}

export class MareelAuth implements IAuthentication {
    private api: AxiosInstance;
    
    constructor(options: IMareelAuthOptions) {
        this.api = axios.create({
            headers: {
                Authorization: `${options.token}`,
            },
            baseURL: options.url,
        });
    }
    
    async authenticate(username: string, password: string) {
        try {
            const res = await this.api.post('/v1/mareel_keys/verify', {
                email: username,
                password: password,
            });

            // TODO: Check the return value.

            return true;
        } catch(e) {
            // Eat up the error
        }

        return false;
    }
}
