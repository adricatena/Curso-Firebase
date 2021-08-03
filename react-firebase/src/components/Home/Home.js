import React from "react";
import { useGlobalContext } from "../../context";
import "./Home.css";

const Home = () => {
  const { doLogin } = useGlobalContext();
  return (
    <section>
      <div>
        <button onClick={doLogin}>Login with Google</button>
      </div>
    </section>
  );
};

export default Home;
