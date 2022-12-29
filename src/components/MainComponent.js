import React, { useState, useEffect, useRef, useReducer } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";
import { Widget, PopupButton } from '@typeform/embed-react'
import WellbeingCard from './Cards/WellbeingCard.js'
import { useAuth0 } from "@auth0/auth0-react";
import InformationCard from "./Cards/InformationCard.js";
import TrendCard from "./Cards/TrendCard.js";
import IndustryCard from "./Cards/IndustryCard.js";

const MainComponent = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }


  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  const [active, setActive] = useState(0)

  const [score, setScore] = useState([])
  const [em, setEm] = useState("")

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
          wingSpan: 25.00,
          speedLimit: 4.00,
          separation: 100.00,
          alignment: 6.00,
          cohesion: 10.00,
          quantity: 2.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  function loadResponse() {
    fetch("http://localhost:5000/api/typeform/getres")
      .then((res) => res.json())
      .then((data) => setScore(data.items[0].calculated.score))
      .then((data) => setEm(data.items[0].answers[36].email))
      .catch(error => console.log('ERROR'))
  }

  useEffect(() => {
    loadResponse()
  }, []);


  if (isAuthenticated) {
    return (
      <div ref={vantaRef}>
        <div className="w-screen h-100vh flex justify-center items-center">
          <img className="absolute w-28 px-4 py-2 top-6 left-8" alt="" src="./tranquilio.svg"/>
          <button className="absolute top-6 right-8 font-light font-raleway text-5xs bg-white py-2 px-8 rounded-md border-2 border-black hover:-translate-y-1 hover:-translate-x-1 hover:border-b-4 hover:border-r-4 transition duration-200 text-black" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>  
          
          <div className="flex flex-col">
            <div className="flex w-5/6 h-screen mx-auto rounded-md border-black-2 font-raleway p-3 space-x-4 mt-16">
              <div className="w-1/3">
                <WellbeingCard workDemand={20} workFlexibility={30} coworkerRelationship={40} managementLeadership={10} compensation={60} /><br/>
                <TrendCard dec={66} jan={null} feb={null} mar={null} apr={null} />
              </div>

              <div className="w-2/3">
              <InformationCard wdScore={80} wfScore={23} crScore={54} mlScore={99} cScore={1} /><br/>
              <IndustryCard industryScore={66} score={65} /><br/>
              </div>

            </div>

            {/* <div className="flex flex-row mx-auto rounded-md border-black-2 font-raleway p-3 space-x-4">

            </div> */}

          </div>

            {/* <div className="flex flex-wrap w-3/4 mt-56 h-full bg-white rounded-md p-1 font-light font-raleway">
              Hi {user.email}! <br/> Your wellbeing score is {score}%.
              Your email is {em}...
            </div> */}
        </div>
      </div>
    ); 
  }

  else if (!isAuthenticated) {
    return (
      <div ref={vantaRef}>
        <div>          
            {active == 0 &&
            <div className="w-screen h-screen flex justify-center items-center">
              <img
              className="absolute w-28 px-4 py-2 top-6 left-8"
              alt=""
              src="./tranquilio.svg"
              />
              <button className="absolute top-6 right-8 font-light font-raleway text-5xs sm:text-4xs bg-white py-2 px-8 rounded-md border-2 border-black hover:-translate-y-1 hover:-translate-x-1 hover:border-b-4 hover:border-r-4 transition duration-200 text-black" onClick={() => loginWithRedirect()}>Log In</button>
              
              <div className="text-center font-light text-base flex-col font-black font-raleway px-12">
                We spend 2/3rd of our waking hours at work. <br/><br/>Find out more about your wellbeing at work with our <br/>psychologically validated assessment.
                <div onClick={() => setActive(1)}>
                  <PopupButton id="vL8do7c1" className="my-button font-light font-raleway text-xs bg-white py-4 px-14 rounded-md border-2 border-black hover:-translate-y-1 hover:-translate-x-1 hover:border-b-4 hover:border-r-4 transition duration-200 text-black mt-20">
                    Start Assessment
                  </PopupButton>
                </div>
              </div>
              
              </div>}
  
            {active == 1 &&
              <div className="text-center font-light flex justify-center items-center text-base flex-col font-black w-screen h-screen font-raleway">
                <Widget id="vL8do7c1" style={{ width: '90vw', height: '85vh' }} className="my-form" />
              </div>}
  
        </div>
  
      </div>
    );

  }

};

export default MainComponent;
