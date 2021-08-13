import React, { Fragment, useState } from "react";
import { fb, auth } from "../firebase";
import { AuthView } from "./AuthView";
import { NavbarComp } from "./NavbarComp";

export const Home = () => {
  const [user, setUser] = useState(null);

  const doLogin = async () => {
    try {
      const provider = new fb.auth.GoogleAuthProvider();
      const userFB = await auth.signInWithPopup(provider);
      setUser(userFB.user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const doLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {}
  };

  return (
    <section>
      {/* {user ? (
        <>
          {console.log(user)}
          <h1>Hola {user.displayName}!</h1>
          <button onClick={doLogout}>Logout</button>
        </>
      ) : (
        <button onClick={doLogin}>Login whith Google</button>
      )} */}
      <NavbarComp />
      <AuthView />
    </section>
  );
};
