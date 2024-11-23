
export class User {

    private username : string;
    private uid : string;

    constructor(username: string, uid: string) {
        this.username = username;
        this.uid = uid;
    }

    public getUsername(): string {
        return this.username;
    }

    public getUid(): string {
        return this.uid;
    }
}

export interface UserProps {
    user: User;
}