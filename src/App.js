import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./Component/Layouts/Header";
import Footer from "./Component/Layouts/Footer";
import Home from "./Component/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
