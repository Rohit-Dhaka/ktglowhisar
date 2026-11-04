import AboutCTA from "../components/about/AboutCTA";
import AboutHero from "../components/about/AboutHero";
import ManufacturingCapabilities from "../components/about/ManufacturingCapabilities";
import MissionVisionValues from "../components/about/MissionVisionValues";
import QualityAssurance from "../components/about/QualityAssurance";
import WhoWeAre from "../components/about/WhoWeAre";
import WhyChooseUs from "../components/about/WhyChooseUs";

const About = () => {
  return (
    <main>
      <AboutHero />
      <WhoWeAre />
      <MissionVisionValues />
      <ManufacturingCapabilities />
      <QualityAssurance />
      {/* <WhyChooseUs /> */}
      {/* <AboutCTA /> */}
    </main>
  );
};

export default About;
