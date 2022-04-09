import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
import Header from './components/Header';
import Home from './pages/Home'


function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
