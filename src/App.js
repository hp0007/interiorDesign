import "./App.css";
import "./Responsive.css";
import { Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import $ from "jquery";
import "popper.js";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Studio from "./pages/Studio";
import Contact from "./pages/Contact";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/blog" component={Blog} />
        <Route path="/studio" component={Studio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
