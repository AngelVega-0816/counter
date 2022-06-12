import { useEffect, useState } from "react"
import FilamentCounter from "./FilamentCounter"
import NeumorphismCounter from "./NeumorphismCounter"

import "./styles.css"



export default function Counter () {
    
    // let [projectPage, setProjectPage] = useState("first")
    let option;

    let handleChangeCounter = () => {
        if(option) {
            option.first.classList.toggle("hidden")
            option.second.classList.toggle("hidden")
        }
    }

    useEffect(() => {
        option ={
            first: document.querySelector(".first"),
            second: document.querySelector(".second"),
        }
    })


    return (
        <div className="counter">
            <FilamentCounter change={handleChangeCounter}/>
            <NeumorphismCounter change={handleChangeCounter}/>
        </div>
    )

}