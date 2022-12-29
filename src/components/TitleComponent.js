import { useCallback, useEffect } from "react";

    
const TitleComponent = () => {
  const tryItOut = useCallback(() => {
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
      <>
       <div
          className="relative font-bold flex items-center w-[960px] [&.animate]:animate-[0.5s_ease_0.5s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <span className="[line-break:anywhere] w-full">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span className="text-black">Erase up to </span>
              <span className="text-turquoise-100">70% </span>
              <span>of your</span>
            </p>
            <p className="m-[0]">
              <span>debt in minutes.</span>
            </p>
          </span>
        </div>
        <div
          className="relative text-xs font-medium flex items-center justify-center w-[1055px] h-[117px] shrink-0 [&.animate]:animate-[0.5s_ease_0.5s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          Debt payment, money management, and budgeting has never been easier.
        </div>
        <div className="w-[395px] h-[80px] shrink-0 flex flex-col items-start justify-start">
          <button
            className="cursor-pointer [border:none] p-[0] bg-[transparent] self-stretch flex-1 relative [&.animate]:animate-[0.5s_linear_1s_1_normal_forwards_fade-in] opacity-[0]"
            autoFocus
            onClick={tryItOut}
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-turquoise-100 hover:bg-turquoise-200 w-[395px] h-[80px]" />
            <img
              className="absolute h-[43.75%] w-[8.86%] top-[29.77%] right-[10%] bottom-[26.48%] left-[81.14%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../vector.svg"
            />
            <div className="absolute top-[28.58px] left-[45.57px] text-sm leading-[24px] font-semibold font-raleway text-white text-left inline-block w-[251px] h-[29.09px]">
              Try it out for free
            </div>
          </button>
        </div>
        </>
  );
};

export default TitleComponent;