import { useCallback, useEffect, useState } from "react";

var titles;

const BodyComponent = () => {

  const [title, setTitle] = useState('');

  const downloadApp = useCallback(() => {
    window.open(
      "https://apps.apple.com/us/app/clerkie-payoff-debt-bills-fees/id1132917036"
    );
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="relative w-[1138.64px] h-[2524px] shrink-0 text-left text-xs text-black font-raleway">
      <img
        className="absolute top-[324.96px] left-[387.83px] w-[293.18px] h-[377.38px] [&.animate]:animate-[1s_linear_0.5s_1_normal_forwards_fade-in] opacity-[0]"
        alt=""
        src="../arrow-1.svg"
        data-animate-on-scroll
      />
      <img
        className="absolute top-[1064.04px] left-[578.43px] w-[268px] h-[345.52px] [&.animate]:animate-[1s_ease_0.5s_1_normal_forwards_fade-in] opacity-[0]"
        alt=""
        src="../arrow-2.svg"
        data-animate-on-scroll
      />
      <img
        className="absolute top-[1779.9px] left-[191.15px] w-[184.34px] h-[277.93px] [&.animate]:animate-[1s_ease_0.8s_1_normal_forwards_fade-in] opacity-[0]"
        alt=""
        src="../vector-4.svg"
        data-animate-on-scroll
      />
      <div className="absolute top-[78px] left-[32px] w-[561px] h-[231px] text-base text-turquoise-200">
        <b className="absolute top-[0px] left-[0.09px] inline-block w-[492px]">
          Negotiate and cut down debt
        </b>
        <div className="absolute top-[91px] left-[0px] text-xs text-black inline-block w-[551px]">
          <span className="font-medium">Use Clerkie’s</span>
          <i className="font-semibold"> debt tracker</i>
          <span className="font-medium"> and</span>
          <i className="font-semibold"> financial assistant </i>
          <span className="font-medium">to get help in negotiating, consolidating, and automating debt payment.</span>
        </div>
      </div>      
      <div className="absolute top-[762px] left-[605.26px] w-[533.38px] h-[235px]">
        <b className="absolute top-[0px] left-[0px] text-base inline-block text-turquoise-200 w-[532.96px]">
          Manage all your money with ease.
        </b>
        <div className="absolute top-[95px] left-[0.38px] inline-block w-[533px]">
          <span className="font-medium">No more hopping around apps. Manage bills, cancel unwanted subscriptions, and find the best loans - </span>
          <i className="font-semibold">all in one place.</i>
        </div>
      </div>
      <div className="absolute top-[1446px] left-[0px] w-[646.58px] h-[228px]">
        <b className="absolute top-[0px] left-[0px] text-base inline-block text-turquoise-200 w-[646.58px]">
          Get personalized answers, anytime, anywhere.
        </b>        
        <div className="absolute top-[123px] left-[0px] inline-block w-[605.26px]">
          <span className="font-medium">Eliminate hours of research and get instant answer to your burning financial questions using our </span>
          <i className="font-semibold">AI-powered chatbot.</i>
        </div>
      </div>
      <img
        className="absolute top-[697px] left-[56.64px] w-[530px] h-[419px] object-cover"
        alt=""
        src="../clerkietransactions-1@2x.png"
      />
      <img
        className="absolute top-[1396px] left-[649.64px] w-[477.97px] h-[414px] object-cover"
        alt=""
        src="../clerkiechatbot-1@2x.png"
      />
      <img
        className="absolute top-[0px] left-[646.64px] w-[428.36px] h-[394px] object-cover"
        alt=""
        src="../clerkiedebt-1@2x.png"
      />
            <div className="absolute top-[2008px] left-[392.64px] w-[390px] h-[516px]">
        <button
          className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[447.83px] left-[30px] w-[330px] h-[68.17px]"
          autoFocus
          onClick={downloadApp}
        >
          <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-turquoise-100 w-[330px] h-[68.17px]" />
          <div className="absolute top-[24.16px] left-[28px] text-sm leading-[24px] font-semibold font-raleway text-white text-left inline-block w-[279px] h-[20.71px]">
            Download the app
          </div>
        </button>
        <img
          className="absolute top-[0px] left-[0px] w-[390px] h-[432.3px] object-cover"
          alt=""
          src="../clerkieqrcode-1@2x.png"
        />
      </div>
    </div>
  );
};

export default BodyComponent;
