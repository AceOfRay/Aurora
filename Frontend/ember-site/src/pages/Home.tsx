import { UserProps } from "../hierarchy/User";

export default function Home({ user } : UserProps) {

    return (
        <div>Welcome, {user.getUsername()}</div>
    )
}