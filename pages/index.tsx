import Header from "../components/Home/Header/index";
import History from "../components/Home/History/index";
import About from "../components/Home/About/index";
import Values from "../components/Home/Values/index";
import Services from "../components/Home/Services/index";
import Footer from "../components/Footer/index";

export default function Component() {
  return (
    <div
      style={{
        zIndex: 1,
      }}
    >
      <Header />
      <History />
      <About />
      <Values />
      <Services />
      <Footer />
    </div>
  );
}
