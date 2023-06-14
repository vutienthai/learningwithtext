import { Route, Routes } from "react-router-dom";
import { Banner, Login, Media, Navbar, Review } from "./components";
import { useEffect, useState } from "react";
import MainApp from "./components/MainApp";
import { auth } from "./services/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import Footer from "./components/Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("TUna");
  const [userEmail, setUserEmail] = useState<string>("rivertuna@gmail.com");

  useEffect(() => {
    onAuthStateChanged(auth, (authResult: any) => {
      console.log("authResult", authResult);

      if (authResult) {
        setLoggedIn(true);
        setUserEmail(authResult.email);
        setUserName(authResult.displayName);
      } else {
        setLoggedIn(false);
        setUserEmail("");
        setUserName("");
      }
    });
  });

  const HomePage = () => {
    return (
      <>
        <Navbar
          auth={auth}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          userName={userName}
        />
        <Banner loggedIn={loggedIn} />
        <Media />
        <Review loggedIn={loggedIn} />
        <Footer />
      </>
    );
  };
  const LoginPage = () => {
    return (
      <>
        <Navbar
          auth={auth}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          userName={userName}
        />
        <Login auth={auth} loggedIn={loggedIn} />
        <Media />
        <Footer />
      </>
    );
  };
  const MainAppPage = () => {
    return (
      <>
        <Navbar
          auth={auth}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          userName={userName}
        />
        <MainApp
          userName={userName}
          userEmail={userEmail}
          loggedIn={loggedIn}
        />
        <Footer />
      </>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/app" element={loggedIn ? <MainAppPage /> : <LoginPage />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default App;
