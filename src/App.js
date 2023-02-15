import logo from "./logo.svg";
import "./App.css";
import AuthRoutes from "./Routes";
function App() {
  const user = () => {};
  return (
    <div className="container">
      <h1>Cosmonet Auth</h1>
      <AuthRoutes />
    </div>
  );
}

export default App;
