import React from "react"
import desktopShadow from "./assets/images/bg-pattern-desktop.svg"
import desktopImage from "./assets/images/illustration-woman-online-desktop.svg"
import box from "./assets/images/illustration-box-desktop.svg"

const Another = () => {
  return (
    <div className={"flex items-center bg-white bg-bgDesktopShadow bg-[right_bottom_-150px] lg:max-h-[510px] lg:min-h-[510px] lg:min-w-[390px] lg:max-w-[390px]"}>
      {/*<img src={desktopShadow} className={" h-full w-full border border-red-600 object-cover object-left-top"} alt={""} />*/}
      <img className={" -ml-[5.25rem] mt-[1rem] min-h-[359px] min-w-[472px]"} src={desktopImage} alt={""} />
      <img src={box} className={"-ml-[30.1rem] mt-[6.5rem]"} alt={""} />
    </div>
  )
}

export default Another
