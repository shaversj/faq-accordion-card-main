import React, { useState } from "react"
import arrow from "./assets/images/icon-arrow-down.svg"

const CollapsableCard = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenClick() {
    setIsOpen(!isOpen)
  }

  return (
    <div className={"mx-6 bg-white py-[.9rem] font-KumbhSans text-[13.25px] font-thin text-very-dark-grayish-blue"}>
      <button className={"flex w-full items-center justify-center "} onClick={handleOpenClick}>
        <h2 className={`${isOpen ? "font-bold" : ""}`}>{title}</h2>
        <img className={`${isOpen ? "ml-auto rotate-180" : "ml-auto"}`} src={arrow} alt={""} />
      </button>
      {isOpen && <div className={"pr-7 pt-2 text-[12px] text-dark-grayish-blue"}>{content}</div>}
    </div>
  )
}

export default CollapsableCard
