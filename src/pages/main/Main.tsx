import MainFooter from "../../common_components/MainFooter";
import MainHeader from "../../common_components/MainHeader";
import "../../styles/pages/main/Main.css";

export default function Main() {
  return (
    <div className="main_background">
      <MainHeader />
      <MainFooter />
    </div>
  );
}
