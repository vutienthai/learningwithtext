import { Route, Routes } from "react-router-dom";
import { Banner, Login, Media, Navbar, Review, Footer } from "./components";
import { useEffect, useState } from "react";
import MainApp from "./components/MainApp";
import { auth } from "./services/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("TUna");
  const [userEmail, setUserEmail] = useState<string>("rivertuna@gmail.com");
  const [savedTexts, setSavedTexts] = useState<
    { title: string; text: string }[]
  >([]);
  const [generatedText, setGeneratedText] = useState<string[]>([]);
  const [editMode, setEditMode] = useState<boolean>(true);
  const [lastSignInTime, setLastSignInTime] = useState<string>("");

  useEffect(() => {
    onAuthStateChanged(auth, (authResult: any) => {
      console.log("authResult", authResult);

      if (authResult) {
        setLoggedIn(true);
        setUserEmail(authResult.email);
        setUserName(authResult.displayName);
        setLastSignInTime(authResult.metadata.lastSignInTime);
      } else {
        setLoggedIn(false);
        setUserEmail("");
        setUserName("");
        setLastSignInTime("");
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
          lastSignInTime={lastSignInTime}
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
          lastSignInTime={lastSignInTime}
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
          lastSignInTime={lastSignInTime}
        />
        <MainApp
          userName={userName}
          userEmail={userEmail}
          loggedIn={loggedIn}
          savedTexts={savedTexts}
          setSavedTexts={setSavedTexts}
          editMode={editMode}
          setEditMode={setEditMode}
          generatedText={generatedText}
          setGeneratedText={setGeneratedText}
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
