import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import initializeAuthentication from "./Firebase/firebase.initialize";
import View from "./View";

initializeAuthentication();

const provider = new GoogleAuthProvider();

function App() {
  const [userLogin, setUserLogin] = useState(false);

  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      console.log(user);
      localStorage.setItem("user", user);

      result.user ? setUserLogin(true) : setUserLogin(false);
    });
  };
  useEffect(() => {
    const user = localStorage.getItem("user");
    user ? setUserLogin(true) : setUserLogin(false);
  }, []);
  return (
    <>
      {userLogin ? (
        <View />
      ) : (
        <div
          style={{
            height: "250px",
            width: "250px",
            backgroundColor: "gray",
            borderRadius: "10px",
          }}
        >
          <button className="btn btn-primary" onClick={handleGoogleSignIn}>
            google sign in
          </button>
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
