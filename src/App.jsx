import Child from "./components/Child";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Context API Example</h1>
        <Child />
      </div>
    </UserProvider>
  );
}

export default App;