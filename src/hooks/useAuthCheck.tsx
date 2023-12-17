import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../lib/redux/feature/auth/authSlice";

export default function useAuthCheck() {
  const [authChecked, setAuthChecked] = useState(false);
  const [authToken, setAuthToken] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    const localAuth = localStorage?.getItem("auth");

    if (localAuth) {
      const auth = JSON.parse(localAuth);
      setAuthToken(auth?.access_token);
    } else {
      dispatch(userLoggedOut());
      localStorage.removeItem("auth");
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAuthChecked(true);
    }, 1000);
  }, [dispatch, setAuthChecked, authToken]);

  return authChecked;
}
