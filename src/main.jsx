import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Particles from "particlesjs";

createRoot(document.getElementById("root")).render(<App />);
window.onload = function () {
  Particles.init({
    selector: ".background",
    color: "#808080",
  });
};
