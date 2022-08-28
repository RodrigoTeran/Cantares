import Header from "../components/Services/Header/index";
import Background from "../components/Services/Background/index";
import Footer from "../components/Footer/index";

export default function Component() {
  return (
    <div
      style={{
        zIndex: 1,
      }}
    >
      <Header />
      <Background />
      <Footer />
    </div>
  );
}
