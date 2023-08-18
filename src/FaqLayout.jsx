import React from "react"
import HeaderText from "./HeaderText.jsx"
import data from "./data.json"
import ImageLayout from "./ImageLayout.jsx"
import FaqList from "./FAQList.jsx"

const NewContainer = () => {
  return (
    <div className={"flex flex-col lg:min-h-[510px] lg:min-w-[920px] lg:flex-row"}>
      <ImageLayout />
      <div
        className={
          "mx-6 min-w-[325px] max-w-[325px] rounded-b-3xl bg-white pb-12 pt-4 lg:mx-0 lg:max-h-[510px] lg:min-h-[510px] " +
          "lg:min-w-[530px] lg:max-w-[530px] lg:rounded-l-none lg:rounded-r-3xl lg:pl-[5.5rem] lg:pr-20 lg:pt-0"
        }
      >
        <HeaderText />
        <FaqList data={data} />
      </div>
    </div>
  )
}

export default NewContainer
