import React, { useState, useEffect, useRef, useReducer } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";
import { Widget, PopupButton } from '@typeform/embed-react'
import WellbeingCard from './Cards/WellbeingCard.js'
import OverallCard from './Cards/OverallCard.js'
import { useAuth0 } from "@auth0/auth0-react";
import InformationCard from "./Cards/InformationCard.js";
import TrendCard from "./Cards/TrendCard.js";
import IndustryCard from "./Cards/IndustryCard.js";
import AgeCard from "./Cards/AgeCard.js";


const MainComponent = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>Loading..</div>
    );
  }


  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  const [active, setActive] = useState(0)

  const [score, setScore] = useState([1])
  const [workDemand, setWD] = useState([])
  const [workFlexibility, setWF] = useState([])
  const [coworkerRelationship, setCR] = useState([])
  const [managementLeadership, setML] = useState([])
  const [compensation, setC] = useState([])
  const [industryName, setIndustryName] = useState([])
  const [ageName, setAgeName] = useState([])



  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: "#ffffff",
          color1: "#5ade9f",
          color2: "#000000",
          colorMode: "lerpGradient",
          birdSize: 1.50,
          wingSpan: 10.00,
          speedLimit: 2.00,
          separation: 100.00,
          alignment: 6.00,
          cohesion: 10.00,
          quantity: 1.00
        })
      );
    }

    async function loadResponse() {
      const res = await fetch("https://main.diig5e1v919o3.amplifyapp.com/api/typeform/getresult");
      const data = await res.json();
              
      for (let i = 0; i < data.items.length; i++) {
        if (data.items[i].answers[data.items[i].answers.length-1].type == 'email' && data.items[i].answers[data.items[i].answers.length-1].email == user.email) {
          setScore(data.items[i].calculated.score);
          setC(data.items[i].variables[0].number);
          setCR(data.items[i].variables[1].number);
          setML(data.items[i].variables[4].number);
          setWD(data.items[i].variables[6].number);
          setWF(data.items[i].variables[7].number);
          for (let j = data.items[i].answers.length-1; j >= 0; j--) {
            if (data.items[i].answers[j].field.id == '6IVWWA5CznjY') {
              setIndustryName(data.items[i].answers[j].choice.label);
            } else if (data.items[i].answers[j].field.id == 'm5LPzGzofDkY') {
              setAgeName(data.items[i].answers[j].choice.label);
              break;
            }
          }          
          break;
        }
      }

    }
    loadResponse();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
 

  if (isAuthenticated) {
    return (
      <div ref={vantaRef}>
        <div>
          <img className="absolute w-28 px-4 py-2 top-6 left-8" alt="" src="./tranquilio.svg"/>
          <button className="absolute top-6 right-8 font-light font-raleway text-6xs md:text-5xs bg-white py-1 md:py-2 px-4 md:px-8 rounded-md border-2 border-black hover:-translate-y-1 hover:-translate-x-1 hover:border-b-4 hover:border-r-4 transition duration-200 text-black" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>  
          <div className="absolute invisible md:visible md:top-9 md:right-56 font-raleway">{user.email}</div>
          <div className="min-h-screen flex items-center">
            <div className="flex-1 max-w-7xl mx-auto p-7">
            <ul className="grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-9 md:grid-rows-12 md:gap-8 md:grid-flow-row list-none mt-12">
              <li className="col-span-1 row-span-1 md:col-span-3 md:row-span-6 bg-[#FFFFFF] rounded-lg border border-black shadow-sm p-2"><OverallCard workDemand={100-workDemand} workFlexibility={workFlexibility} coworkerRelationship={coworkerRelationship} managementLeadership={managementLeadership} compensation={compensation} score={score}/></li>
              <li className="col-span-1 row-span-1 md:col-span-3 md:row-span-6 bg-[#FFFFFF] rounded-lg border border-black shadow-sm p-2"><WellbeingCard workDemand={100-workDemand} workFlexibility={workFlexibility} coworkerRelationship={coworkerRelationship} managementLeadership={managementLeadership} compensation={compensation} score={score}/></li>
              <li className="col-span-1 row-span-1 md:col-span-3 md:row-span-6 bg-[#FFFFFF] rounded-lg border border-black shadow-sm p-2"><InformationCard wdScore={100-workDemand} wfScore={workFlexibility} crScore={coworkerRelationship} mlScore={managementLeadership} cScore={compensation} /></li>
              <li className="col-span-1 row-span-1 md:col-span-3 md:row-span-6 bg-[#FFFFFF] rounded-lg border border-black shadow-sm p-2"><TrendCard jan={score} feb={null} mar={null} apr={null} /></li>
              <li className="col-span-1 row-span-1 md:col-span-3 md:row-span-6 bg-[#FFFFFF] rounded-lg border border-black shadow-sm p-2"><IndustryCard industryName={industryName} score={score} /></li>
              <li className="col-span-1 row-span-1 md:col-span-3 md:row-span-6 bg-[#FFFFFF] rounded-lg border border-black shadow-sm p-2 "><AgeCard ageName={ageName} score={score} /></li>
            </ul>

            </div>
          </div>  
        </div>
      </div>

    ); 
  }

  else if (isAuthenticated && score == 0) {
    return (
      <div ref={vantaRef}>
        <img
          className="absolute w-10 px-2 py-1 top-5 left-5"
          alt=""
          src="./back-arrow.svg"
          onClick={() => logout({ returnTo: window.location.origin })}
        />
        <div className="text-center font-light flex justify-center items-center text-base flex-col font-black w-screen h-screen font-raleway">
          <Widget id="vL8do7c1" style={{ width: '90vw', height: '85vh' }} className="my-form" />
        </div>
      </div>

    ); 
  }

  else if (!isAuthenticated) {
    return (
        <div>          
            {active == 0 &&
            <div ref={vantaRef}>
            <div className="w-screen h-screen flex justify-center items-center">
              <img
              className="absolute w-28 px-4 py-2 top-6 left-8"
              alt=""
              src="./tranquilio.svg"
              />
              <button className="absolute top-6 right-8 font-light font-raleway text-6xs md:text-5xs bg-white py-1 md:py-2 px-4 md:px-8 rounded-md border-2 border-black hover:-translate-y-1 hover:-translate-x-1 hover:border-b-4 hover:border-r-4 transition duration-200 text-black" onClick={() => loginWithRedirect()}>Log In</button>  
              
              <div className="text-[16px] md:text-[32px] mx-8 text-center font-light text-base flex-col font-black font-inter md:px-12">
                We spend 2/3rd of our waking hours at work. <br/><br/>Find out more about your wellbeing at work with our <br/>psychologically validated assessment.
                <div onClick={() => setActive(1)}>
                  <PopupButton id="vL8do7c1" className="my-button font-light font-raleway text-5xs md:text-xs bg-white py-2 md:py-4 px-8 md:px-14 rounded-md border-2 border-black hover:-translate-y-1 hover:-translate-x-1 hover:border-b-4 hover:border-r-4 transition duration-200 text-black mt-20">
                    Start Assessment
                  </PopupButton>
                </div>
              </div>
              
              </div></div>}
  
            {active == 1 &&
            <div ref={vantaRef}>
              <img
              className="absolute w-10 px-2 py-1 top-5 left-5"
              alt=""
              src="./back-arrow.svg"
              onClick={() => setActive(0)}
              />
              <div className="text-center font-light flex justify-center items-center text-base flex-col font-black w-screen h-screen font-raleway">
                <Widget id="vL8do7c1" style={{ width: '90vw', height: '85vh' }} className="my-form" />
              </div></div>}
  
        </div>
  
    );

  }

};

export default MainComponent;
