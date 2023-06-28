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

const generateID = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [savedTexts, setSavedTexts] = useState<
    { id: string; title: string; text: string; timestamp: Date }[]
  >([]);
  const [savedWords, setSavedWords] = useState<
    { id: string; word: string; level: string; note: string; timestamp: Date }[]
  >([]);

  const [savedNotes, setSavedNotes] = useState<{ [key: string]: string }>({});
  const [savedLevels, setSavedLevels] = useState<{ [key: string]: string }>({});

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
  }, []);

  // Loading firebase log in data
  useEffect(() => {
    const getSavedTexts = async () => {
      console.log("Getting texts...");
      const path = `users/${userEmail}/textCollection`;
      const q = query(collection(db, path));
      const querySnapshot = await getDocs(q);
      const tempSavedTexts: {
        id: string;
        title: string;
        text: string;
        timestamp: Date;
      }[] = [];
      if (querySnapshot.empty) {
        console.log("querySnapshot.empty", querySnapshot.empty);
      } else {
        querySnapshot.forEach((doc) => {
          const record = doc.data();
          console.log("record", record);
          tempSavedTexts.push({
            id: record.id,
            title: record.title,
            text: record.text,
            timestamp: record.timestamp,
          });
        });
      }
      console.log("tempSavedTexts", tempSavedTexts);
      setSavedTexts(tempSavedTexts.slice(0, 5));
    };

    const getSavedWords = async () => {
      console.log("Getting words...");
      const path = `users/${userEmail}/wordCollection`;
      const q = query(collection(db, path));
      const querySnapshot = await getDocs(q);
      const tempSavedWords: {
        id: string;
        word: string;
        note: string;
        level: string;
        timestamp: Date;
      }[] = [];

      if (querySnapshot.empty) {
        console.log("querySnapshot.empty", querySnapshot.empty);
      } else {
        querySnapshot.forEach((doc) => {
          const record = doc.data();
          console.log("record", record);
          tempSavedWords.push({
            id: record.id,
            word: record.word,
            note: record.note,
            level: record.level,
            timestamp: record.timestamp,
          });
        });
      }

      // if (!emailFound) {
      //   console.log("Account not found");
      //   if (userEmail) {
      //     setDoc(doc(db, "users", userEmail), {
      //       savedTexts: [],
      //       savedWords: [],
      //     });
      //   }
      // }

      console.log("tempSavedWords", tempSavedWords);
      setSavedWords(tempSavedWords);
    };
    if (loggedIn) {
      getSavedTexts();
      getSavedWords();
    }
    setLoading(false);
  }, [loggedIn, userEmail]);

  useEffect(() => {
    const tempSavedNotes: any = {};
    const tempSavedLevels: any = {};
    savedWords.forEach((savedWord) => {
      const word = savedWord.word;
      const note = savedWord.note;
      const level = savedWord.level;
      tempSavedNotes[word] = note;
      tempSavedLevels[word] = level;
    });

    setSavedNotes(tempSavedNotes);
    setSavedLevels(tempSavedLevels);
  }, [savedWords]);

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
              savedNotes={savedNotes}
              savedLevels={savedLevels}
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
