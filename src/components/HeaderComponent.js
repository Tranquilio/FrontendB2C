import { useCallback } from "react";

const HeaderComponent = () => {
  const login = useCallback(() => {
    window.open("https://app.clerkie.io/");
  }, []);

  const downloadapp = useCallback(() => {
    window.open(
      "https://apps.apple.com/us/app/clerkie-payoff-debt-bills-fees/id1132917036"
    );
  }, []);

  return (
    <div className="self-stretch h-[74px] shrink-0 flex flex-row p-[0px_20px] box-border items-center justify-between">
      <img
        className="relative w-[173px] h-[62px] shrink-0 object-cover"
        alt=""
        src="../image-2@2x.png"
      />
      <div className="w-[571px] shrink-0 flex flex-row p-[0px_0px_0px_153px] box-border items-start justify-start gap-[16px]">
        <button
          className="cursor-pointer [border:none] p-[0] bg-[transparent] relative w-[159.36px] h-[51.02px] shrink-0"
          autoFocus
          onClick={login}
        >
          <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-white [border:2px_solid_#41ebc1] box-border w-[159.36px] h-[51.02px]" />
          <div className="absolute top-[14px] left-[53.7px] text-4xs leading-[24px] font-semibold font-raleway text-turquoise-100 text-left inline-block w-[69px] h-[15px]">
            Login
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-[0] bg-[transparent] relative w-[233px] h-[51.02px] shrink-0"
          autoFocus
          onClick={downloadapp}
        >
          <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-turquoise-100 [border:2px_solid_#41ebc1] box-border w-[233px] h-[51.02px]" />
          <div className="absolute top-[14px] left-[30.6px] text-4xs leading-[24px] font-semibold font-raleway text-white text-left inline-block w-[192px] h-[15px]">
            Download the app
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
