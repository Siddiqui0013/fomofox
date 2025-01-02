import Hero from "./Hero"
import About from "./About"
import Tokenomics from "./Tokenomics"
import FAQ from "./FAQ"
import Footer from "./Footer"
import HowTo from "./HowTo"
import divider from "../assets/divider.png"

export default function LandingPage() {
  return (
    <div>
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <img src={divider} className="w-full" alt="" />
      <div id="howto"><HowTo /></div>
      <div id="tokenomics"><Tokenomics /></div>
      <div id="faq"><FAQ /></div>
      <Footer />
    </div>
  )
}