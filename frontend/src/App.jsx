import { useTheme } from "./contexts/useTheme";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <>
      <div className={`app ${theme}`}>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;