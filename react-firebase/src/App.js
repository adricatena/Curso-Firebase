import "./App.css";
import { useGlobalContext } from "./context";
import Home from "./components/Home/Home";
import { db, auth, storage } from "./firebase";

function App() {
  console.log(db, auth, storage);
  return <main>
    <Home />
  </main>;
}

export default App;
