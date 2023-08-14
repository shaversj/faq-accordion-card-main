import React from 'react';
import mobileImage from "./assets/images/illustration-woman-online-mobile.svg";
import CollapsableCard from "./CollapsableCard.jsx";

const Card = () => {
    return (
        <div className={"rounded-2xl bg-amber-300 "}>
            <div className={""}>
                <img src={mobileImage} alt={""} />
            </div>
            <div className={"bg-white"}>
                <CollapsableCard />
            </div>
        </div>
    );
};

export default Card;