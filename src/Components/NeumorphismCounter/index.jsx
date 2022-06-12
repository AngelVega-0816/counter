import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

export default function NeumorphismCounter ({change}) {

    let [count, setCount] = useState(0);
    let [objectDOM, setObjectDOM] = useState({});

    let handleCountClickAdd = () => {
        if(count + 1 == 1000) {
            setCount(0)
        } else {
            setCount(count + 1);
        }
    }
    let handleCountClickSubtract = () => {
        if(count - 1 == -1) {
            setCount(999);
        } else {
            setCount(count - 1);
        }
    }
    let handleCountRestart = () => {
        setCount(0)
    }
    let handleMode = (e) => {
        objectDOM.screen.classList.toggle("dark-screen")
        objectDOM.contain.classList.toggle("dark-contain")
        objectDOM.typed.forEach(e => e.classList.toggle("dark"))
        objectDOM.home.classList.toggle("light-mode")
        objectDOM.home.classList.toggle("home-dark")
    }

    useEffect(() => {
        setObjectDOM({
            screen: document.querySelector(".screen-neumorphism"),
            contain: document.querySelector(".contain"),
            typed: document.querySelectorAll(".typed"),
            home: document.querySelector("#home"),
        })
    }, [])

    return (
        <div className="screen-neumorphism second hidden">

            {/* <Link to="/"> */}
            <a href="https://portafolio-av.vercel.app/">
                <div id="home" className="home dark-mode">
                    {/* <i className="fa-solid fa-house"></i> */}
                    <span class="material-symbols-outlined">
                        undo
                    </span>
                </div>
            </a>
            {/* </Link> */}

            <div className="light-contact"></div>
            <div className="changePage" onClick={change}></div>

            <div className="change">
                <div className='dark-mode' onClick={handleMode}>
                    <span class="material-symbols-outlined">
                        dark_mode
                    </span>
                </div>
                <div className='light-mode' onClick={handleMode}>
                    <span class="material-symbols-outlined">
                        brightness_5
                    </span>
                </div>
            </div>
            <div className='contain '>
                <h2>{count}</h2>

            </div>
            <div className='buttons'>
                <button className='typed' onClick={handleCountClickSubtract}>-</button>
                <button className='typed' onClick={handleCountRestart}>0</button>
                <button className='typed' onClick={handleCountClickAdd}>+</button>    
            </div>
        </div>
    )

}