import Accordian from "../Components/Accordian";
import Banner1 from "../Components/Banner1";
import Banner2 from "../Components/Banner2";
import Banner3 from "../Components/Banner3";
import Card from "../Components/Card";
import CardBanner from "../Components/CardBanner";
import Footer from "../Components/Footer";
import BreadCrumb from "../Components/Global/breadCrumb";
import bgCover from "../Assests/bg.png";

export default function Home() {
  return (
    <div
      className="Home"
      style={{
        backgroundImage: `url(${bgCover})`,
        backgroundPosition: "center",
      }}
    >
      <Banner1 />
      <Card />
      <CardBanner />
      <Banner2 />
      <Accordian />
      <Banner3 />
      <BreadCrumb />
      <Footer />
    </div>
  );
}
