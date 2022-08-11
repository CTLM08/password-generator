import React, { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
import { Icon } from "@iconify/react";
import 'animate.css';

import "./index.css";

const App = () => {
  const [copied, setcopied] = useState(false);
  const [password, setpassword] = useState("password");
  const [length, setlength] = useState(8);
  const [upper, setupper] = useState(true);
  const [lower, setlower] = useState(true);
  const [symbol, setsymbol] = useState(true);
  const [num, setnum] = useState(true);
  
  const ps = () => {
    let ps = "";
    let base = "";
    setpassword("");
    if (upper) ps += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) ps += "abcdefghijklmnopqrstuvwxyz";
    if (num) ps += "0123456789";
    if (symbol) ps += "!@#$%^&*()_+-={}[]:\";'<>?,./";
    if (length > 0 && length < 100 ) {
      for (let i = 0; i < length; i++) {
        base += ps[Math.floor(Math.random() * ps.length)] ||'';
      }
    } else {
      base = "error,use brain lah";
    }
    setpassword(base);
  };
  useEffect(()=>{
    ps()
  },[length,upper,lower,symbol,num])

  useEffect(() => {
    console.log("q");
  }, [num]);
  return (
    <div className="bg-slate-800 flex items-center justify-center  w-full h-screen">
      
      <div className="text-white bg-slate-800 relative">
      
        <div className="text-3xl md:text-4xl flex justify-center fonst-['Prompt'] animate__animated animate__lightSpeedInRight">
          PASSWORD GENERATOR
        </div>
        <div className="text-xs flex justify-center mt-2 animate__animated animate__lightSpeedInLeft">
          MRGA homework 2022-8-6
        </div>
        <div className="flex justify-center mt-5  border-2  rounded-xl  flex-row p-2 animate__animated animate__lightSpeedInRight">
          <div className="gap-6 flex flex-row">
            <div>{password}</div>
            <button
              onClick={() => {
                
                setcopied(true);
                setTimeout(() => {
                  setcopied(false);
                }, 1000);
                copy(password);
               
              }}
            >
              <Icon
                icon={copied ? "ic:baseline-done-outline" : "akar-icons:copy"}
                className="w-5 h-5 mt-0.5 "
              />
            </button>
          </div>

          <button>
            <Icon
              icon="ion:reload"
              className="h-5 w-5 mt-0.5 ml-3"
              onClick={() => ps()}
            />
          </button>
        </div>
        <div className="mt-3 flex flex-col md:flex-row gap-2 md:gap-5  justify-center items-center animate__animated animate__lightSpeedInLeft">
          <div>
            <input
              type="checkbox"
              className=" text-slate-500 h-4 w-4 mr-1"
              checked={lower}
              onClick={() => setlower(!lower)}
            />
            <span className="ml-1">Input lowercase character</span>
          </div>
          <div>
            <input
              type="checkbox"
              className="h-4 w-4 ml-1.5 "
              checked={upper}
              onClick={() => setupper(!upper)}
            />
            <span className="ml-1">Input uppercase character</span>
          </div>
        </div>
        <div className="mt-3 flex flex-col md:flex-row  gap-2 md:gap-12 w-full justify-center items-center animate__animated animate__lightSpeedInRight ">
          <div>
            <input
              type="checkbox"
              className="h-4 w-4 text-slate-500 mr-1 "
              checked={num}
              onClick={() => setnum(!num)}
            />
            <span className="ml-2">include number</span>
          </div>
          <div>
            <input
              type="checkbox"
              className="h-4 w-4 md:ml-12 "
              checked={symbol}
              onClick={() => setsymbol(!symbol)}
            />
            <span className="ml-2">include symbols</span>
          </div>
        </div>

        <div className="flex  items-center mt-5 gap-2 justify-center animate__animated animate__lightSpeedInLeft">
          <div className="">password length(1-99):</div>
          <div className="text-3xl mb-2">
            <button onClick={() => setlength(length - 1)}>-</button>{" "}
          </div>

          <input
            value={length}
            type="number"
            onChange={(e) => setlength(parseInt(e.target.value))}
            className="rounded-sm h-6 w-20 text-black text-center"
          ></input>
          <div className="text-2xl mb-2">
            <button onClick={() => setlength(length + 1)}>+</button>{" "}
          </div>
        </div>
        

      </div>
    </div>
    
  );
};

export default App;