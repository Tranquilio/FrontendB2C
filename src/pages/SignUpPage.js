import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";
import { useAuth0 } from "@auth0/auth0-react";

const SignUp = () => {

  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       BIRDS({
  //         el: vantaRef.current,
  //         THREE: THREE,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.00,
  //         minWidth: 200.00,
  //         scale: 1.00,
  //         scaleMobile: 1.00,
  //         backgroundColor: "#ffffff",
  //         color1: "#5ade9f",
  //         color2: "#000000",
  //         colorMode: "lerpGradient",
  //         birdSize: 1.50,
  //         wingSpan: 25.00,
  //         speedLimit: 4.00,
  //         separation: 100.00,
  //         alignment: 6.00,
  //         cohesion: 10.00,
  //         quantity: 2.00
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);


  if (!isAuthenticated) {
    return (
      // <div ref={vantaRef}>
      <div className="flex justify-center items-center">
        <button className="font-light font-raleway text-5xs bg-white py-2 px-8 rounded-md border-2 border-black hover:-translate-y-1 hover:-translate-x-1 hover:border-b-4 hover:border-r-4 transition duration-200 text-black mt-40" onClick={() => loginWithRedirect({screen_hint: "signup"})}>Sign Up</button>
      </div>
      // </div>
    );
  }
  else if (isAuthenticated) {
    return (
      // <div ref={vantaRef}>
      <div>
        Nothing...
      </div>
      // </div>
    );
  }
};

export default SignUp;
