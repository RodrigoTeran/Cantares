import Header from "../components/Home/Header/index";
import History from "../components/Home/History/index";

export default function () {
  return (
    <div
      style={{
        zIndex: 1,
      }}
    >
      <Header />
      <History />
    </div>
  );
}
