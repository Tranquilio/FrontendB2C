import { BrowserRouter, Routes, Route, Navigate, useNavigationType, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUpPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  let routes;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  routes = (
    <>
      <Route exact path="/" element={<LandingPage/>} />
      <Route exact path="/signup" element={<SignUp/>} />
    </>
  )

  return (
    <Routes>
      {routes}
    </Routes>
  );
}
export default App;
