import Navbar from "./Navbar";
import heroFox from "../assets/heroFox.png";
import heroDivider from "../assets/heroDivider.png";

export default function Hero() {
    return (
        <div className="z-10 relative mx-auto bg-[#F7E1CF]">
          <div className="z-50 nav">
          <Navbar />
          </div>
          <div className="hero flex justify-end items-center gap-12 mt-12 ">
          
            <div className="text text-center flex flex-col mx-auto md:m-0 items-center gap-12 w-[95%] md:w-[50%]">
            <h1 className="text-5xl md:text-7xl mt-6 heading text-[#E36127]">FOMOFOX</h1>
            <p className="text-lg md:text-2xl ">Introducing FOMFOX – the fearless and foxy meme token that thrives 
on the thrill of FOMO! Quick, clever, and always ahead of the pack, 
FOMFOX is here to capture hearts and wallets with its sharp wit and 
unstoppable energy. Join the den, embrace the excitement, and let’s 
race to the moon with the fiercest fox in the crypto jungle!</p>
<button className="bg-[#E36127] px-4 py-2 text-2xl heading border-black border-b-2 border-r-2 rounded">BUY TOKEN</button>
          </div>
          </div>

          <div className="md:w-[45%] w-[70%] absolute md:-bottom-12 bottom-0 md:flex justify-end items-center">
            <img src={heroFox} width="90%" alt="" />
          </div>
          
          <div className="w-full">
            <img src={heroDivider} width="100%" className="h-60"  alt="" />
            </div> 

        </div>
    )
  }