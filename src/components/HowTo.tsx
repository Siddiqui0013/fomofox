
export default function HowTo() {

  const howTo = [
    {
      title: "Buy",
      description: "Connect your wallet and buy tokens",
    },
    {
      title: "Stake",
      description: "Stake your tokens to earn rewards",
    },
    {
      title: "Earn",
      description: "Earn rewards in the form of tokens",
    },
  ]

  return (
    <div className="w-full bg-[#F7E1CF] p-6 flex items-center justify-center">
      <div className="howto flex flex-col items-center border-black border-4 rounded-3xl justify-center gap-4 bg-[#FFF3E9] w-[95%]  md:w-[80%]">
      <div className="title bg-[#F7E1CF] border-black border-b-4 border-r-2 border-l-2 px-8 py-4">
        <h1 className="md:text-5xl text-2xl text-[#E36127] heading">How to Buy</h1>
      </div>

      <div className="steps flex flex-col gap-4 w-[80%]">
        {howTo.map((step, index) => (
          <div key={index} className="step shadow-2xl flex rounded-lg border-black border-2 p-4 m-4 flex-col items-center gap-4">
            <h2 className="text-4xl text-[#E36127]">{step.title}</h2>
            <p className="text-xl text-center">{step.description}</p>
          </div>
        ))}
      </div>
      </div>      
    </div>
  )
}
