import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export default function useAuth() {
  const auth = useSelector((state: RootState) => state?.auth);

  if (auth?.access_token) {
    return true;
  } else {
    return false;
  }
}
