import Accordian from "../Components/Accordian";
import Banner1 from "../Components/Banner1";
import Banner2 from "../Components/Banner2";
import Banner3 from "../Components/Banner3";
import Card from "../Components/Card";
import CardBanner from "../Components/CardBanner";
import Footer from "../Components/Footer";
import BreadCrumb from "../Components/Global/breadCrumb";

export default function Home() {
  return (
    <>
      <Banner1 />
      <Card />
      <CardBanner />
      <Banner2 />
      <Accordian />
      <Banner3 />
      <BreadCrumb />
      <Footer />
    </>
  );
}
