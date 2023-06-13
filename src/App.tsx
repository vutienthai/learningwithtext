import { Route, Routes } from "react-router-dom";
import { Banner, Login, Media, Navbar, Review } from "./components";
import { useEffect, useState } from "react";
import MainApp from "./components/MainApp";
import { auth } from "./services/firebaseConfig";
import { Auth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("TUna");
  const [userEmail, setUserEmail] = useState<string>("rivertuna@gmail.com");

  useEffect(() => {
    onAuthStateChanged(auth, (authResult: any) => {
      console.log("authResult", authResult);
      authResult && setLoggedIn(authResult.emailVerified);
      authResult && setUserEmail(authResult.email);
      authResult && setUserName(authResult.displayName);
    });
  });

  const HomePage = () => {
    return (
      <>
        <Navbar />
        <Banner loggedIn={loggedIn} />
        <Media />
        <Review loggedIn={loggedIn} />
        {/* <div className="fluid-container min-vh-100"></div> */}
      </>
    );
  };
  const LoginPage = () => {
    return (
      <>
        <Navbar />
        <Login auth={auth} loggedIn={loggedIn} />
        <Media />

        {/* <div className="fluid-container min-vh-100"></div> */}
      </>
    );
  };
  const MainAppPage = () => {
    return (
      <>
        <Navbar />
        <MainApp
          userName={userName}
          userEmail={userEmail}
          loggedIn={loggedIn}
        />

        {/* <div className="fluid-container min-vh-100"></div> */}
      </>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/app" element={loggedIn ? <MainAppPage /> : <LoginPage />} />
      {/* <Route path="/berries" element={<OurBerriesPage />} />
      <Route path="/products" element={<OurProductsPage />} />
      <Route path="/sites" element={<OurSitesPage />} />
      <Route path="/work-with-us" element={<WorkWithUsPage />} />
      <Route path="/new-webapp" element={<Webapp />} />
      <Route path="/webapp2" element={<Webapp />} />
      <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default App;
