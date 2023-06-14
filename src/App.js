import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"
import Navbar from "./Navbar/Navbar";
function App() {
  return (
    <main className="layout">
      <Navbar/>
      <Outlet className="pages"/>
    </main>
  );
}
export default App;
