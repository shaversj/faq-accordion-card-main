import React from "react"
import mobileImage from "./assets/images/illustration-woman-online-mobile.svg"
import Card from "./Card.jsx"
import CollapsableCard from "./CollapsableCard.jsx"
import data from "./data.json"
import Header from "./Header.jsx"

const FaqLayout = () => {
  return (
    <div className={"mx-auto flex min-h-screen max-w-screen-sm flex-col justify-center bg-black"}>
      <Header />
      <div className={"mx-6 divide-y divide-light-grayish-blue rounded-b-2xl bg-white pb-12 pt-4"}>
        {data && data.map((item) => <CollapsableCard key={item.id} title={item.title} content={item.content} />)}
        <div className={"mx-6"}></div>
      </div>
    </div>
  )
}

export default FaqLayout
