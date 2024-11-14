import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import styles from "./Login.module.css";

const Login = () => {
  const { loginUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users", {
        params: { email, password }
      });
      if (response.data.length) {
        loginUser(response.data[0]);
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 style={{color:'red'}}>Login</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleLogin} className={styles.button}>
        Login
      </button>
    </div>
  );
};

export default Login;
