import { useEffect, useState } from "react";


function useRecaptch(sitekey){


  
  /** GOOGLE reCaptcha */
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  console.log("captch token : ",recaptchaToken);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(sitekey, { action: "homepage" }).then(token => {
          setRecaptchaToken(token);
        });
      });
    };
  }, []);

  /** GOOGLE reCaptcha */

  return {recaptchaToken}



}


export default useRecaptch;