import React from "react"
import mobileImage from "./assets/images/illustration-woman-online-mobile.svg"
import shadow from "./assets/images/bg-pattern-mobile.svg"
const Header = ({ children }) => {
  return (
    <div className={"mx-6 flex max-w-sm flex-col items-center justify-center gap-y-12 rounded-t-2xl bg-white"}>
      <div>
        <img className={"-mt-[6.8rem] h-[183px] w-[242px]"} src={mobileImage} alt={""} />
        <img className={"-mt-[4.8rem]"} src={shadow} alt={""} />
      </div>
      <div>
        <h1 className={"-mt-6 font-KumbhSans text-[31px] font-bold"}>FAQ</h1>
      </div>
      {children}
    </div>
  )
}

export default Header
