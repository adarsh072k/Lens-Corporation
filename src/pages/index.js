import Head from "next/head";
import Header from "../../components/Header";
import About from "../../components/About";
import Services from "../../components/Services";
import Footer from "../../components/Footer";
import GetinTouch from "../../components/GetinTouch";
import NewFooter from "../../components/NewFooter";
import FAQ from "../../components/FAQ";
import Numbers from "../../components/Numbers";
import LogoSlider from "../../components/LogoSlider";
import TruAi from "../../components/TruAi";
import WhyChooseLens from "../../components/WhyChooseLens";
import Vision from "../../components/Vision";
import Blogs from "../../components/Blogs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LensCorp</title>
        <meta name="description" content="We are at the forefront of AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About />
      <Services />
      <TruAi />
      <WhyChooseLens />
      <Vision />
      <Blogs />
      <LogoSlider />
      <Numbers />
      <FAQ />
      <GetinTouch />
      <NewFooter />
      <Footer />
    </div>
  );
}
