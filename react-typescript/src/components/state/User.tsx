import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = (props: AuthUser) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: props.name,
      email: props.email,
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <div>Your user name is {user?.name}</div>
          <div>Your user email is {user?.email}</div>
        </>
      ) : (
        <>
          <button onClick={handleLogin}>Login</button>
          <div>Hello Guest</div>
        </>
      )}
    </div>
  );
};
