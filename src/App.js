import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import initializeAuthentication from "./Firebase/firebase.initialize";
import View from "./View";

initializeAuthentication();

const provider = new GoogleAuthProvider();


function App() {
  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
  }
  return (
    <>
      <button onClick={handleGoogleSignIn}>google sign in</button>
      <View />
      <ToastContainer />
    </>
  );
}

export default App;
