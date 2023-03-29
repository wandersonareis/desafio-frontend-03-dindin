import { useEffect, useState } from "react";
import { getObjectItem, setObjectItem } from "../util/storage";
import { getUserInfo, userLogin, userLogout } from "../api";
import { useNavigate } from "react-router-dom";

export function userContext() {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const { token, nome, email } = getObjectItem();

    if (token) {
      tokenValidation().then(r => r);
      setToken(token);
      setUserData({ name: nome, email });
      navigate("/main");
    }

    async function tokenValidation() {
      try {
        token && (await getUserInfo(token));
        setLoggedIn(true);
      } catch (error) {
        if (error.response?.status === 419) {
          handleLogout();
        }

        setLoggedIn(false);
      }
    }
  }, [token]);

  async function handleLogin(email, password) {
    const { token, usuario: user } = await userLogin(email, password);

    const userData = {
      id: user.id,
      nome: user.nome,
      email: user.email,
      token
    };

    setToken(token);
    setObjectItem(userData);

    setLoggedIn(true);
    navigate("/main");
  }

  function handleLogout() {
    userLogout();
    setLoggedIn(false);
    navigate("/");
  }

  return {
    token,
    user: userData,
    isLoggedIn,
    handleLogin,
    handleLogout
  };
}