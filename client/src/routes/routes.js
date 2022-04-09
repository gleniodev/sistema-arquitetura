import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import Arquiteta from "../pages/Arquiteta";
import Contato from "../pages/Contato";
import Login from "../pages/Login";
import Portfolio from "../pages/Portfolio";
import Projeto from "../pages/Projeto";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/admin" component={Admin} />
      <Route
        path="/arquiteta"
        component={Arquiteta}
        // render={(props) => <Arquiteta />}
        // nome="Angela"
      />
      <Route path="/contato" component={Contato} />
      <Route path="/login" component={Login} />
      <Route path="/portfolio" component={Portfolio} />
      {/* <Route path="/projeto/:id" component={Projeto} />             */}
    </Switch>
  );
};

export default Routes;
