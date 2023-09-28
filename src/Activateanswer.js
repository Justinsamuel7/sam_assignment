// Activateanswer.js


import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './App.css';
import './Animations.css';
import {LuAlarmClock} from 'react-icons/lu';
import {MdOutlineKeyboardVoice} from "react-icons/md"
import {Circle} from 'rc-progress'


const Activateanswer=()=>{

    useEffect(() => {
        startCountdown(60);
      }, []);
    
      const [countdown, setCountdown] = useState();
      let [color, setColor]=useState("blue")
      let [percentage, setPercentage]=useState(1)

    
      const interval = useRef();
    
      const startCountdown = (value) => {
        clearInterval(interval.current);
        setCountdown(value);
    
        interval.current = setInterval(() => {
          value--;

          if (value === 10) {
            setColor("orange");
          }
          if (value === 0) {
            clearInterval(interval.current);
          }

          // setPercentage(percentage + 1.6)
          setCountdown(value);
        }, 1000);
      };
    
    return(
      <div id="answerActivated">
        <div className="answerDeactivated-Top">
          <div style={{width:128 , height: 128, position:"relative"}}>
            <Circle percent={percentage} strokeColor={color} strokeWidth={7} trailColor="white" trailWidth={7} style={{position:"absolute"}} strokeLinecap="square"/>

          </div>

              <div id="outerwhite">
                  <div class="wave-container">
                  <div class="wave"></div>
                  <div class="wave"></div> 
                  <div className="micContainerActive"> <MdOutlineKeyboardVoice id="DeactivatedBottomMic"/> </div>
              </div>
              </div>

        </div>
        <div className="answerDeactivated-Bottom">
          <p>Answering Time:</p>
          <p id="time"><LuAlarmClock className='clockiconBottom'/><span id="secondsBlue"> <b>{countdown} seconds</b> </span><span id="afterseconds">left</span></p>
        </div>
      </div>
    );
  }
  export default Activateanswer;