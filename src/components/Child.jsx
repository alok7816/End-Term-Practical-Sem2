import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Child() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Hello, {user} 👋</h2>
    </div>
  );
}

export default Child;