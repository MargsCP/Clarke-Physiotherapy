import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/common/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { InlineWidget } from "react-calendly";
import AboutSpace from "./components/pages/aboutSpace";

function App() {
  return (
    <div>
      <AboutSpace></AboutSpace>
    </div>
  );
}

export default App;