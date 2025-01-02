import { useState } from "react"

export default function FAQ() {
 
  const [selected, setSelected] = useState<number | null>(null)
  
  const FAQ = [
    {
      question: "What is FOMOFOX?",
      answer: "FOMOFOX is a decentralized finance (DeFi) token that is built on the Binance Smart Chain (BSC). It is a community-driven project that aims to provide a fair and transparent platform for its users."
    },
    {
      question: "How can I buy FOMOFOX?",
      answer: "FOMOFOX can be bought through the Binance Smart Chain (BSC) or through the FOMOFOX website. The FOMOFOX website is currently not live, but it will be available soon."
    },
    {
      question: "How can I stake FOMOFOX?",
      answer: "FOMOFOX can be staked on the FOMOFOX website. The FOMOFOX website is currently not live, but it will be available soon."
    },
    {
      question: "How can I earn rewards with FOMOFOX?",
      answer: "FOMOFOX can be staked on the FOMOFOX website. The FOMOFOX website is currently not live, but it will be available soon."
    }
  ]

  return (
    <div className="w-full bg-[#CCAA85] flex items-center flex-col justify-center">
      <h1 className="md:text-5xl text-3xl bg-white text-center rounded-2xl border-black border-b-4 mt-12 border-r-4 py-4 px-12 text-[#E36127] my-4 heading">FAQ</h1>

      <div className="flex items-end justify-center mx-auto px-8 gap-4  w-full">
        <div className="box1 md:w-[80%] w-[100%] ">
            {
                FAQ.map((faq, index) => {
                    return (
                        <div className="w-full flex flex-col border-black border-4 p-8 rounded-2xl bg-[#FFFFFF] items-start justify-center my-4" 
                        key={index} onClick={() => selected === index ? setSelected(null) : setSelected(index)}>
                            <div className="flex cursor-pointer justify-between w-full">
                              <div className="1 flex gap-6 md:gap-12">
                              <h1 className="md:text-[36px] font-bold text-[22px]">Q.{index+1 } </h1>
                            <h1 className="md:text-[36px] text-[18px] mr-1">{faq.question}</h1>
                              </div>
                            <div className="2">
                              <h1 className="md:text-[36px] text-[26px]">{selected === index ? "-" : "+"}</h1>
                            </div>
                            </div>
                            {
                                selected === index && <p className="text-[16px] mt-8 md:text-[24px]">{faq.answer}</p>
                            }
                        </div>
                    )
                })
            }
        </div>
    </div>
    <div className="border-b-8 border-black w-full h-4 "></div>
    </div>
  )
}
