'use client'

import { useState } from "react"
import AboutBitcoin from "./about-bitcoin/about-coin"
import Fundamentals from "./fundamentals/Fundamentals"
import Performance from "./performance/performance"
import Sentiments from "./sentiments/Sentiments"
import SubCategory from "./sub-category"
import Teams from "./teams/teams"
import Tokenomics from "./tokenomics"

const CategorySwitcher = ({ coinData }: { coinData: any }) => {
  const [activeCategory, setActiveCategory] = useState<string>("overview")
  const handleActiveCategory = (category: string) => {
    setActiveCategory(category)
  }
  return (
    <div className="mt-8">
        <div className="flex gap-6 relative overflow-x-scroll scroll-bar ">
            <div className="h-[1px] bg-gray-300 w-full absolute bottom-0"></div>
            <SubCategory category="Overview" onClick={() => handleActiveCategory("overview")} activeCategory={activeCategory}/>
            <SubCategory category="Fundamentals" onClick={() => handleActiveCategory("fundamentals")} activeCategory={activeCategory}/>
            <SubCategory category="New Insights" onClick={() => handleActiveCategory("new insights")} activeCategory={activeCategory}/>
            <SubCategory category="Sentiments" onClick={() => handleActiveCategory("sentiments")} activeCategory={activeCategory}/>
            <SubCategory category="Team" onClick={() => handleActiveCategory("team")} activeCategory={activeCategory}/>
            <SubCategory category="Technicals" onClick={() => handleActiveCategory("technicals")} activeCategory={activeCategory}/>
            <SubCategory category="Tokenomics" onClick={() => handleActiveCategory("tokenomics")} activeCategory={activeCategory}/>
        </div>
        {activeCategory === "overview" &&  (
            <Performance activeCategory={activeCategory} coinData={coinData && coinData}/>
        )}
        {(activeCategory === "overview" || activeCategory === "fundamentals") && (
            <Fundamentals activeCategory={activeCategory} coinData={coinData && coinData} />
        )}
        {(activeCategory === "overview" || activeCategory === "sentiments") && (
            <Sentiments />
        )}
        {(activeCategory === "overview" || activeCategory === "new insights") && (
            <AboutBitcoin coinData={coinData && coinData} />
        )}
        {(activeCategory === "overview" || activeCategory === "tokenomics") && (
            <Tokenomics />
        )}
        {(activeCategory === "overview" || activeCategory === "team") && (
            <Teams />
        )}
    </div>
  )
}

export default CategorySwitcher