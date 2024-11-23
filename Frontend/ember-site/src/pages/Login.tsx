import { Dispatch, SetStateAction, useState } from "react";
import "../styles/login.css";
import { AuthInvoker } from "../hierarchy/Authentication/AuthInvoker";
import { User } from "../hierarchy/User";

interface LoginProps {
  setUser: Dispatch<SetStateAction<User | null>>;
}

export default function Login({ setUser }: LoginProps) {
    const [username, setUsername] = useState("");
    const [pswd, setPassword] = useState("");
    const [name, setName] = useState("");
    const [signUpState, setSignUpState] = useState(false);

    const handleSignIn = async () => {
      const authService = AuthInvoker.create();
      const unauthorizedCredentials = {
        username: username,
        password: pswd
      };
      await authService.authenticate(JSON.stringify(unauthorizedCredentials))
        .then(user => {
          if (user instanceof User) {
            setUser(user);
          }
        })
        .catch(error => {
          console.error(error);
          // tell the user the authentication was not valid
        })

    }

    const handleNewUserSignIn = () => {

    }

    return (
        <main>
          <nav className="LoginNav">
            <h1 className="title">Login to Ember</h1>
          </nav>
    
          <div id="container">
            <form action="" id="loginForm">
              <input
                type="text"
                id="nameInput"
                placeholder="Display Name"
                value={name}
                style={{ display: signUpState ? "flex" : "none" }}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="text"
                id="usernameInput"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                id="passwordInput"
                placeholder="Password"
                value={pswd}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                id="loginButton"
                onClick={() => {
                  handleSignIn();
                }}
                style={{ display: signUpState ? "none" : "flex" }}
              >
                Login
              </button>
              <button
                type="button"
                id="signupButton"
                style={{ display: signUpState ? "flex" : "none" }}
                onClick={handleNewUserSignIn}
              >
                Sign Up
              </button>
            </form>
            
          </div>
    
          <footer
            className="foot"
            onClick={() => {
              setSignUpState(!signUpState);
            }}
            style={{ display: signUpState ? "none" : "flex" }}
          >
            Don't Have an Account? Click Me To Sign Up
          </footer>
          <footer
            className="foot"
            onClick={() => {
              setSignUpState(!signUpState);
            }}
            style={{ display: signUpState ? "flex" : "none" }}
          >
            Have an Account? Click Me To Login
          </footer>
        </main>
      );
}