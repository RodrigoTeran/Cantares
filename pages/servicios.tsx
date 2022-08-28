import Footer from "../components/Footer/index";
import Services from "../components/We/Services/index";
import Header from "../components/We/Header/index";

export default function Component() {
  return (
    <div
      style={{
        zIndex: 1
      }}
    >
      <Header />
      <Services />
      <Footer />
    </div>
  );
}
