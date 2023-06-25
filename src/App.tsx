import { Route, Routes } from "react-router-dom";
import {
  Banner,
  Login,
  Media,
  Navbar,
  Review,
  Footer,
  Loader,
} from "./components";
import { useEffect, useState } from "react";
import MainApp from "./components/MainApp";
import { auth, db } from "./services/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, getDocs } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [savedTexts, setSavedTexts] = useState<
    { title: string; text: string; id: string; timestamp: Date }[]
  >([]);
  const [savedWords, setSavedWords] = useState<
    { word: string; level: string; note: string }[]
  >([]);
  const [generatedText, setGeneratedText] = useState<string[][]>([]);
  const [editMode, setEditMode] = useState<boolean>(true);
  const [generatedTextTitle, setGeneratedTextTitle] = useState<string>("");
  const [showSamples, setShowSamples] = useState(false);

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

  // Loading firebase log in data
  useEffect(() => {
    const getSavedTextsData = async () => {
      console.log("Getting data...");
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);
      const tempSavedTexts: {
        title: string;
        text: string;
        id: string;
        timestamp: Date;
      }[] = [];
      const tempSavedWords: { word: string; level: string; note: string }[] =
        [];
      let emailFound = false;
      querySnapshot.forEach((doc) => {
        if (doc.id === userEmail) {
          emailFound = true;
          console.log("doc.id", doc.id);
          const record = doc.data();
          console.log("record", record);
          tempSavedTexts.push(...record.savedTexts);
          tempSavedWords.push(...record.savedWords);
        }
      });

      if (!emailFound) {
        console.log("Account not found");
        if (userEmail) {
          setDoc(doc(db, "users", userEmail), {
            savedTexts: [],
            savedWords: [],
          });
        }
      }
      console.log("tempSavedTexts", tempSavedTexts);
      console.log("tempSavedWords", tempSavedWords);
      setSavedTexts(tempSavedTexts.slice(0, 5));
      setSavedWords(tempSavedWords);
      setLoading(false);
    };
    getSavedTextsData();
  }, [loggedIn, userEmail]);

  const HomePage = () => {
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
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
        )}
      </>
    );
  };
  const LoginPage = () => {
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar
              auth={auth}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              userName={userName}
              lastSignInTime={lastSignInTime}
            />
            <Login auth={auth} />
            <Media />
            <Footer />
          </>
        )}
      </>
    );
  };
  const MainAppPage = () => {
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
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
              savedTexts={savedTexts}
              setSavedTexts={setSavedTexts}
              savedWords={savedWords}
              setSavedWords={setSavedWords}
              editMode={editMode}
              setEditMode={setEditMode}
              showSamples={showSamples}
              setShowSamples={setShowSamples}
              generatedText={generatedText}
              setGeneratedText={setGeneratedText}
              generatedTextTitle={generatedTextTitle}
              setGeneratedTextTitle={setGeneratedTextTitle}
            />
            <Footer />
          </>
        )}
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
