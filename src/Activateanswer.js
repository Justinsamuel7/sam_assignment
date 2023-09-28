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

    const interval = setInterval(() => {
      setPercent((prevPercent) => {
        if (prevPercent < 100) {
          return prevPercent + 1.6; 
        } else {
          clearInterval(interval); 
          return prevPercent;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval); 
    };

  }, []);  
  
  
      const [percent, setPercent] = useState(0);
      const [countdown, setCountdown] = useState();
      const [warningText, setWarningText] = useState(false)
      let [color, setColor]=useState("blue")

      const interval = useRef();
    
      const startCountdown = (value) => {
        clearInterval(interval.current);
        setCountdown(value);
    
        interval.current = setInterval(() => {
          value--;

          if (value === 10) {
            setWarningText(true)
            setColor("orange");
          }
          if (value === 0) {
            clearInterval(interval.current);
          }
          setCountdown(value);
        }, 1000);

        }

      
    
    return(
      <div id="answerActivated">
        <div className="answerDeactivated-Top">
          <div style={{width:128 , height: 128, position:"relative"}}>
            <Circle percent={percent} strokeColor="#90cdff" strokeWidth={7} trailColor={color} trailWidth={7} style={{position:"absolute"}} strokeLinecap="square"/>

          </div>

              <div id="outerwhite">
                  <div class="wave-container">
                  <div class="wave"></div>
                  <div class="wave"></div> 
                  <div className="micContainerActive"> <MdOutlineKeyboardVoice id="DeactivatedBottomMic"/> </div>
              </div>
              </div>

        </div>
        {warningText ? <p style={{color:"orange"}}>Please start concluding your answer!</p> : ''}
        <div className="answerDeactivated-Bottom">
          <p>Answering Time:</p>
          <p id="time"><LuAlarmClock className='clockiconBottom'/><span id="secondsBlue"> <b>{countdown} seconds</b> </span><span id="afterseconds">left</span></p>
        </div>
      </div>
    );
  }
  export default Activateanswer;