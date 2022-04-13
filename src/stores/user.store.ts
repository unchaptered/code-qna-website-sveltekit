import { LOCAL_PROFILE } from './store';
export class LocalUser {

    static localUserProfile: any = null;

    static setUser(localUserProfile: any) {
        LocalUser.localUserProfile = localUserProfile;
    }
    static getUser(): any {
        return LocalUser.localUserProfile;
    }
    static claerUser(): void {
        LocalUser.setUser(null);
    }

}

