import FooterPic from '../assets/footer.png'

export default function Footer() {
  return (
    <div className="w-full bg-[#F7E1CF] py-12 px-3 md:px-6">
      <div className="flex flex-col items-center text-center justify-center mt-12 bg-white p-6 border-[#E36127] border-t-2 border-r-2 border-l-8 border-b-8  md:-skew-x-12 skew-x-2 w-[95%] md:w-[80%] mx-auto">
        <div className="flex justify-center items-center w-full">
        <h1 className="md:text-5xl text-3xl mt-4 heading">Join the FOMOFOX</h1>
        <img src={FooterPic} width={70} className='md:hidden ' alt="" />
        </div>
        <div className="flex justify-around items-center w-full">
          <img src={FooterPic} width={200} alt="" className='hidden md:block' />
          <p className='text-xl md:text-2xl mt-8'>Don’t miss out on the FOMFOX frenzy! Join the pack today and be part 
of a community that’s fast, fearless, and ready to dominate the crypto 
jungle. Buy FOMFOX now and let’s make history – one foxy move 
at a time!</p>
        </div>
      </div>
    </div>

  )
}
