import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignUp = () => {

  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    function login() {
      loginWithRedirect({screen_hint: "signup"});
    }
    login();  
  }, []);


    return (
      <div>
      </div>
    );
}

export default SignUp;



