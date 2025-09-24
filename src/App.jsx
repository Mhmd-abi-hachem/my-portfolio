import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const AppLayout = lazy(() => import("./layout/AppLayout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

import ScrollToTop from "./shared/ui/ScrollToTop";
import SpinnerFullPage from "./shared/ui/SpinnerFullPage";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:projectSlug" element={<ProjectDetails />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
