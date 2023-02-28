import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (username === "admin" && password === "1234") {
      localStorage.setItem('admin', JSON.stringify({username: username,password: password}));
      router.push('/admin');
    } else {
      setError(true);
    }
  };

  return (
    <div className="{styles.container} pt-40 flex items-center justify-center  ">
      <div className="{styles.wrapper} flex flex-col">
        <h1>Admin Dashboard</h1>
        <input
          placeholder="username"
          className=" h-12 mb-6 p-2"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className="{styles.input}"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleClick}
          className="{styles.button} h-10 mb-6 bg-teal-400 border-none text-white font-bold cursor-pointer"
        >
          Sign In
        </button>
        {error && (
          <span className="{styles.error} font-medium text-red-500">
            Wrong Credentials!
          </span>
        )}
      </div>
    </div>
  );
};

export default Login;
