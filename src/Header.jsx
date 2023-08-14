import React from "react"
import mobileImage from "./assets/images/illustration-woman-online-mobile.svg"
const Header = ({ children }) => {
  return (
    <div className={"mx-5 flex max-w-sm flex-col items-center justify-center gap-y-12 rounded-t-2xl bg-white"}>
      <div>
        <img className={"-mt-28 h-[183px] w-[242px]"} src={mobileImage} alt={""} />
      </div>
      <div>
        <h1 className={"font-KumbhSans text-3xl font-bold"}>FAQ</h1>
      </div>
      {children}
    </div>
  )
}

export default Header
