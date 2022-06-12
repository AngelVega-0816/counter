import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import './styles.css'

export default function FilamentCounter ({change}) {

    let numbers = [0,1,2,3,4,5,6,7,8,9];
    let [counter, setCounter] = useState("0")
    let [numberOn, setNumberOn] = useState({three: 0,two: 0,one: 0})
    let [onOff, setOnOff] = useState(1) 

    let handleCountClickAdd = () => {
        if(onOff) {
            setCounter((Number(counter) + 1).toString())
        }
    }
    let handleCountClickSubtract = () => {
        if(onOff) {
            if(counter > 0) {
                setCounter((Number(counter) - 1).toString())
            } else {
                setCounter("999")
            }
        }
    }
    let handleCountReset = () => {
        document.querySelector(`#two-${numberOn.two}`).classList.remove("active");
        document.querySelector(`#three-${numberOn.three}`).classList.remove("active");
        if(numberOn.one != 0) {
            document.querySelector(`#one-${numberOn.one}`).classList.remove("active");
        }
        setNumberOn({three: "0", two: "0", one: "0"})
        setCounter("0")
    }
    let handleOnOrOff = () => {
        document.querySelector(".on").classList.toggle("off")
        console.log("entra")
        if(onOff) {
            document.querySelector(`#two-${numberOn.two}`).classList.remove("active");
            document.querySelector(`#three-${numberOn.three}`).classList.remove("active");
            document.querySelector(`#one-${numberOn.one}`).classList.remove("active");
            console.log("se apaga")
            setOnOff(0)
        } else {
            console.log("se prende")
            handleCountReset();
            document.querySelector(`#one-${0}`).classList.add("active")
            setOnOff(1)
        }
        
    }


    let validationNumber = (number) => {
        if(number.length == 1) {
            document.querySelector(`#one-${numberOn.one}`).classList.remove("active");
            document.querySelector(`#one-${number}`).classList.add("active")            
            setNumberOn(prevState => ({...prevState, one: number}));
            return null;
        } else if (number.length == 2) {
            if (counter.length )
            if (number[0] != numberOn.two) {
                document.querySelector(`#two-${number[0]}`).classList.add("active");
                document.querySelector(`#two-${numberOn.two}`).classList.remove("active");
                setNumberOn(prevState => ({...prevState, two: number[0]}));
                validationNumber(number[1]);
            } else {
                validationNumber(number[1])
            }
        } else if (number.length == 3) {
            if (counter.length == 1) {
                document.querySelector(`#three-${numberOn.three}`).classList.remove("active");
            }
            if (number[0] != numberOn.three) {
                document.querySelector(`#three-${number[0]}`).classList.add("active");
                document.querySelector(`#two-${numberOn.two}`).classList.remove("active");
                setNumberOn(prevState => ({...prevState, three: number[0]}));
                validationNumber(number.slice(-2));
            } else {
                validationNumber(number.slice(-2))
            }
        } else {
            document.querySelector(`#one-${numberOn.one}`).classList.remove("active");
            document.querySelector(`#three-${numberOn.three}`).classList.remove("active");
            document.querySelector(`#two-${numberOn.two}`).classList.remove("active");
            setCounter("0")
            setNumberOn({three: 0,two: 0,one: 0})
        }
    }




    useEffect(() => {
        validationNumber(counter)
    }, [counter])

    return (
        <div className="background-counter first">
            
            {/* <Link to="/"> */}
            <a href="https://portafolio-av.vercel.app/">
                <div className="home">
                    {/* <i className="fa-solid fa-house"></i> */}
                    <span class="material-symbols-outlined">
                        undo
                    </span>
                </div>
            </a>
            {/* </Link> */}

            <div className="changePage" onClick={change}></div>

            <div className="screen-counter">
                
                <div className="container-numbers">
                    
                    <div className="three number">
                        <ul>
                            {
                                numbers.map(e => (<li id={`three-${e}`} key={`three-${e}`}>{e === 0 ? null : e}</li>))
                            }
                        </ul>
                    </div>
                    <div className="two number">
                        <ul>
                            {
                                numbers.map(e => (<li id={`two-${e}`} key={`two-${e}`}>{e}</li>))
                            }
                        </ul>
                    </div>
                    <div className="one number">
                        <ul>
                            {
                                numbers.map(e => (<li id={`one-${e}`} key={`one-${e}`}>{e}</li>))
                            }
                        </ul>
                    </div>
                </div>
                <div className="screen"></div>
                <div className="buttons-count-filaments">
                    <div className="button-on" onClick={handleOnOrOff}>
                        <div className="on"></div>

                    </div>
                    <div className="sum-res">                    
                        <div className="middle-l" onClick={handleCountReset}>0</div>
                        <div className="middle" onClick={handleCountClickSubtract}>-</div>
                        <div onClick={handleCountClickAdd}>+</div>
                    </div>             

                </div>
            </div>
        </div>
    )

}