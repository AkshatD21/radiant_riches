import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-3/5 bg-white">
          <div className="container"></div>
          <Navbar />
          <Hero />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
