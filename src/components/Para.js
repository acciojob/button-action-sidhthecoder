import React, {useState} from "react";

const Para=()=>{
    const [isVisible,setIsVisible]=useState(false);

    const handleClick=()=>{
        setIsVisible(true);
    }

    return (
        <div id="main">
           {isVisible ? <p id="para" className="show">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>:<p id="para" className="hide"></p>}
           <button id="click" onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Para;