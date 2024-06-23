import Hero from "../components/Hero";
import Slider from "../components/Slider";
import "../styles/home.scss";
import Recomended from "../components/Recomended";

export default function Home() {
  return (
    <div>
      <Hero />
      <Slider />
      <Recomended />
    </div>
  );
}
