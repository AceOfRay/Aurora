import { User } from "../User";

export class AuthInvoker {
    private static instance: AuthInvoker;

    private constructor() { };
    
    /**
     * Implementation Details:
     *      The AuthInvoker will be created once per device and accessed from across the device
     * @returns The one and only AuthInvoker
     */
    public static create() {
        if (!AuthInvoker.instance) {
            this.instance = new AuthInvoker;
        }
        return this.instance;
    }
    
    /**
     * Implementation Details:
     *      The authenticate method sends a GET request to the Auth endpoint and if the user is valid the Auth endpoint
     * return the UID of the user. 
     * 
     * @param unauthorizedCredentials A json object with string properties username and password
     * @returns A User object with the uid parameter that identifies the user and their respective data 
     */
    public async authenticate(unauthorizedCredentials: string): Promise<User | void> {
    
        const credential = await fetch("mydomain/authentication/endpoint", {
            method : 'GET',
            headers: {
                "Content-Type" : 'application/json',
            },
            body : JSON.parse(unauthorizedCredentials)
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(responseData => {
            return new User(responseData.username, responseData.uid)
        }).catch(error => {
            console.error(error);
        })
        return credential;
    }
}