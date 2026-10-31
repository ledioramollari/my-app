import "tachyons/css/tachyons.min.css";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "../Containers/App.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <div className="tc">
    <App />
  </div>,
);
