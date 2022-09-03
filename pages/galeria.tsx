import Header from "../components/Gallery/Header/index";
import Images from "../components/Gallery/Images/index";
import Footer from "../components/Footer/index";

export default function Component() {
  return (
    <div
      style={{
        zIndex: 1
      }}
    >
      <Header />
      <Images />
      <Footer />
    </div>
  );
}
