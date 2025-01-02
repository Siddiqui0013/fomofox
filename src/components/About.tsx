import AboutInfo from '../assets/about-info.png'
import AboutImg from '../assets/about.png'

export default function About() {
	return (
		<div className="w-full flex bg-[#F7F0CE] py-6">
			<div className="w-[30%] order-3 hidden md:flex justify-end">
				<img src={AboutImg} width="1000px" alt="" />
			</div>

			<div className="order-2 mx-auto w-[90%] md:w-[40%] flex justify-center">
				<div className="w-fit relative">
				<img src={AboutInfo} className='w-[450px] mx-auto md:h-[530px] h-[630px]' alt='' />
				<div className="absolute w-[80%] text-center top-[20%] left-[10%]">
					<h1 className='text-5xl my-4 heading text-[#E36127]'>About</h1>
					<p>FOMFOX is not just another meme token – it’s a 
movement fueled by FOMO (Fear of Missing Out) 
and fox-like cunning! Inspired by the sharp, agile, 
and daring spirit of the fox, this token is designed
to keep you on your toes and always in the game.
<br />
Built for a community that loves fun, fast moves, 
and endless possibilities, FOMFOX is all about 
creating a vibrant ecosystem where laughter meets 
innovation. Whether you’re chasing moonshot 
dreams, sharing memes, or building long-term gains, 
FOMFOX is your ultimate companion.

</p>
				</div>

				</div>
			</div>

			<div className="w-[30%] order-1 hidden md:flex justify-end">
				<img src={AboutImg} width="1000px" className='scale-x-[-1]' alt="" />
			</div>

		</div>
	);
}
