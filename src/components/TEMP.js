import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';



const RegisterPage = () => {
  const { register } = useContext(AuthContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    await register(email.value, password.value);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

const HomePage = () => {
  const { isAuthenticated, user, logOut } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome{isAuthenticated && `, ${user.email}`}!</h1>
      {isAuthenticated ? (
        <button onClick={logOut}>Logout</button>
      ) : (
        <>
          <p>Please log in or register to continue</p>
          <button onClick={() => (window.location = '/login')}>Login</button>
          <button onClick={() => (window.location = '/register')}>
            Register
          </button>
        </>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <AuthContext>
        <Router>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </AuthContext>
    </div>
  );
};

export default App;

