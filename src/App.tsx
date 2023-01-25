import { lazy, Suspense, useEffect } from "react";
import { Contact, End, Me, NavSkeleton, Wrapper, Xp } from "./components";

const Header = lazy(() => import("./components/Header"));
function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      localStorage.removeItem("projects");
    }, 1000 * 3600);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Suspense fallback={<NavSkeleton />}>
        <Header />
      </Suspense>

      <main className="py-4 lg:py-5">
        <Wrapper>
          <Me />
          <Xp />
          <Contact />
        </Wrapper>
      </main>
      <End />
    </>
  );
}

export default App;
