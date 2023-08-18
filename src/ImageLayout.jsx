import React from "react"
import desktopImage from "./assets/images/illustration-woman-online-desktop.svg"
import mobileImage from "./assets/images/illustration-woman-online-mobile.svg"
import mobileShadow from "./assets/images/bg-pattern-mobile.svg"
import box from "./assets/images/illustration-box-desktop.svg"

const ImageLayout = () => {
  return (
    <div
      className={
        "mx-6 flex items-center justify-center rounded-t-3xl bg-white lg:mx-0 lg:max-h-[31.875rem] lg:min-h-[31.875rem] " +
        "lg:min-w-[24.375rem] lg:max-w-[24.375rem] lg:justify-normal lg:rounded-l-3xl lg:rounded-r-none lg:bg-bgDesktopShadow lg:bg-[right_bottom_-9.375rem]"
      }
    >
      <div className={"sm:min-h-[7.813rem] lg:overflow-hidden"}>
        <img className={"sm:hidden lg:-ml-[5.25rem] lg:mt-[1rem] lg:flex lg:min-h-[22.438rem] lg:min-w-[29.5rem]"} src={desktopImage} alt={""} />
        <img className={"-mt-[6.8rem] h-[11.438rem] w-[15.125rem] lg:hidden"} src={mobileImage} alt={""} />
        <img className={"-mt-[4.8rem] lg:hidden"} src={mobileShadow} alt={""} />
      </div>
      <img src={box} className={"hidden lg:-ml-[30.1rem] lg:mt-[6.5rem] lg:flex lg:overflow-visible"} alt={""} />
    </div>
  )
}

export default ImageLayout
