import React from "react"
import HeaderText from "./HeaderText.jsx"
import data from "./data.json"
import ImageLayout from "./ImageLayout.jsx"
import FaqList from "./FaqList.jsx"

const FaqLayout = () => {
  return (
    <div className={"flex flex-col lg:min-h-[31.875rem] lg:min-w-[57.5rem] lg:flex-row"}>
      <ImageLayout />
      <div
        className={
          "mx-6 min-w-[20.313rem] max-w-[20.313rem] rounded-b-3xl bg-white pb-12 pt-4 lg:mx-0 lg:max-h-[31.875rem] lg:min-h-[31.875rem] " +
          "lg:min-w-[33.125rem] lg:max-w-[33.125rem] lg:rounded-l-none lg:rounded-r-3xl lg:pl-[5.5rem] lg:pr-20 lg:pt-0"
        }
      >
        <HeaderText />
        <FaqList data={data} />
      </div>
    </div>
  )
}

export default FaqLayout
