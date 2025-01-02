
export default function Tokenomics() {

  const tokenomics = [
      {
          title : "Liquidty Pool",
          description : "5%",
      },
      {
          title : "Team",
          description : "10%",
      },
      {
          title : "Advisors",
          description : "10%",
      },
      {
          title : "Marketing",
          description : "10%",
      },
  ]

return (
  <div className="bg-[#C6C6C6] tokenomics h-screen w-[100%] relative flex flex-col items-center justify-start md:gap-4 p-4">
        <h1 className="md:text-5xl text-3xl bg-white md:w-fit w-[95%] text-center rounded-2xl border-black border-b-2 border-r-2 p-4 text-[#E36127] my-4 heading">Tokenomics</h1>
        <div className="flex flex-wrap md:mt-20 items-center md:gap-4 w-[95%]">
          {tokenomics.map((token, index) => (
            <div key={index} className="token shadow-2xl bg-[#C6C6C6] text-center md:w-[20%] w-[80%] min-h-36 mx-auto flex rounded-lg border-black border-2 p-4 m-4 flex-col items-center gap-4">
              <h2 className="md:text-4xl text-3xl text-white p-2 w-full rounded-lg bg-[#E36127]">{token.title}</h2>
              <p className="text-2xl text-center">{token.description}</p>
            </div>
          ))}
        </div>
  </div>
)
}