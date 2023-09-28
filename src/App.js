//File Name : App.js


import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './App.css';
import './Animations.css';
import {LuAlarmClock} from 'react-icons/lu';
import {MdOutlineKeyboardVoice} from "react-icons/md"
import Activateanswer from './Activateanswer';

// const activateanswer=()=>{

//   return(
//     <div id="answerActivated">
//       <div className="answerDeactivated-Top">
//         <div id="outerCircle">
//             <div class="wave-container">
//             <div class="wave"></div>
//             <div class="wave"></div>
//             <div className="micContainerActive"> <MdOutlineKeyboardVoice id="DeactivatedBottomMic"/> </div>
//             </div>

//         </div>
//       </div>
//       <div className="answerDeactivated-Bottom">
//         <p>Answering Time:</p>
//         <p id="time"><LuAlarmClock className='clockiconBottom'/><span id="secondsBlue"> <b>60 seconds</b> </span><span id="afterseconds">left</span></p>
//       </div>
//     </div>
//   );
// }
const deactivateanswer=()=>{
  
  return(
    <div id="answerDeactivated">
      <div className="answerDeactivated-Top">
        <div id="outerCircle">
            <div id="micContainerRipple2">
              <div id="micContainerRipple1">
                <div className="micContainer"> <MdOutlineKeyboardVoice id="DeactivatedBottomMic"/> </div>
              </div>
            </div>
        </div>
      </div>
      <div className="answerDeactivated-Bottom">
        <p>Answering Time:</p>
        <p id="time"><LuAlarmClock className='clockiconBottom'/><span id="secondsBlue"> <b>60 seconds</b> </span><span id="afterseconds">left</span></p>
      </div>
    </div>
  );
}

export default function App() {
  const [mic, setMic] = useState(false)
  const [questionboxId, setQuestionboxId] = useState('defaultQid');

  useEffect(() => {
    startCountdown(20);
  }, []);

  const [countdown, setCountdown] = useState();

  const interval = useRef();

  const startCountdown = (value) => {
    clearInterval(interval.current);
    setCountdown(value);

    interval.current = setInterval(() => {
      value--;
      if (value === 0) {
        setMic(true)
        clearInterval(interval.current);
        setQuestionboxId('setdefaultQid');
      }
      setCountdown(value);
    }, 1000);
  };

 

  return (
    <div>
      <div id="top"></div>
      <div id="container">
        <div id={questionboxId}>
          <p>Question 2</p>
          <p>
            <b>
              What is your inspiration behind choosing Quantum physics as your
              career?
            </b>
          </p>
          {countdown === 0 ? (
            <p id='speaknow'>Speak Now</p>
          ) : (
            <p id="countdown">
              <LuAlarmClock className='clockicon'/>
              <span id="beforecount">Start speaking in </span>
              <span id='aftercount'>
              <b>
                {countdown} Seconds</b>
              </span>
            </p>
          )}
        </div>

        <div id="answerbox">
         {mic ? <Activateanswer/>: deactivateanswer()}
        </div>
      </div>
    </div>
  );
}