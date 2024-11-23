import { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import { User } from './hierarchy/User';

function App() {
  // set up login state logic
  const [user, setUser] = useState<User | null>(null); // Initially no user is logged in

  return (
    <main>
      {user ? (
        <Home user={user}></Home> // Pass user to Home if needed
      ) : (
        <Login setUser={setUser}></Login>
      )}
    </main>
  );
}

export default App;
