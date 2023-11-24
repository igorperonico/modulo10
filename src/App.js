import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      <Header />
      {isAuthenticated ? <ListarTarefa /> : <Login onLogin={handleLogin} />}
      <Login />
    </div>
  );
}

export default App;
