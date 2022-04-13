import { LOCAL_ACCESS_TOKEN } from './store';

export class LocalToken {

    static localToken: any = null;

    static setToken(localToken: any) {
        LocalToken.localToken = localToken;
    }
    static getToken(): any {
        return LocalToken.localToken;
    }
    static claerToken(): void {
        LocalToken.setToken(null);
    }

}

