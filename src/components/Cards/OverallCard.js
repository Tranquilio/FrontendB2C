import { useEffect } from 'react';

const OverallCard = (props) => {
  const score = props.score
  const names = ["Work Demand","Work Flexibility","Coworker Relationship","Organizational Leadership", "Compensation"]
  const arr = [props.workDemand,props.workFlexibility,props.coworkerRelationship,props.organizationalLeadership,props.compensation] 
  const top3 = arr.map((x, i) => i).sort((a, b) => arr[b] - arr[a]).reverse();

  const icons = [
  <svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.6923 9.71429H24.9231V8.80357C24.9213 6.50698 24.0109 4.3018 22.3858 2.65752C20.7607 1.01323 18.5493 0.0597229 16.2223 0H15.7777C13.4507 0.0597229 11.2393 1.01323 9.61419 2.65752C7.9891 4.3018 7.07874 6.50698 7.07692 8.80357V9.71429H0.307692C0.226087 9.71429 0.147825 9.74627 0.0901211 9.8032C0.0324176 9.86013 0 9.93735 0 10.0179V32.7857C0 33.1078 0.12967 33.4166 0.360484 33.6443C0.591298 33.8721 0.904349 34 1.23077 34H30.7692C31.0957 34 31.4087 33.8721 31.6395 33.6443C31.8703 33.4166 32 33.1078 32 32.7857V10.0179C32 9.93735 31.9676 9.86013 31.9099 9.8032C31.8522 9.74627 31.7739 9.71429 31.6923 9.71429ZM10.1538 8.87946C10.1538 5.70411 12.7238 3.06911 15.9423 3.03571C16.7147 3.029 17.4807 3.17319 18.1963 3.45998C18.9119 3.74676 19.5629 4.17045 20.1117 4.70664C20.6605 5.24282 21.0963 5.88089 21.394 6.58404C21.6917 7.2872 21.8454 8.04154 21.8462 8.80357V9.71429H10.1538V8.87946ZM24.6154 15.7857C24.6154 18.0401 23.7077 20.2021 22.092 21.7961C20.4763 23.3902 18.2849 24.2857 16 24.2857C13.7151 24.2857 11.5237 23.3902 9.908 21.7961C8.29231 20.2021 7.38462 18.0401 7.38462 15.7857V13.3571H9.84615V15.7857C9.84615 17.396 10.4945 18.9402 11.6486 20.0789C12.8026 21.2175 14.3679 21.8571 16 21.8571C17.6321 21.8571 19.1974 21.2175 20.3514 20.0789C21.5055 18.9402 22.1538 17.396 22.1538 15.7857V13.3571H24.6154V15.7857Z" fill="#ABE396"/>
  </svg>,
  <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.12731 24H0V8H8.12731V24ZM18.5767 24H10.4494V4.57143H18.5767V24ZM29 24H20.8727V0H29V24Z" fill="#96CCE3"/>
  </svg>
  ]

  

  return (
    <div className="font-inter overflow-hidden">
      <div className="flex px-3 justify-start font-bold font-ptserif text-[22px]">Overview</div><br/>
      {/* <div className="flex text-left font-ptserif text-[20px] ml-4">Your overall score: </div><br/><br/><br/> */}
      <div className="py-20 text-[72px] font-inter flex justify-center">{Math.round(score*10)/10}%</div><br/><br/><br/>
      
      <div className="flex text-left font-ptserif text-[20px] ml-4 mb-2">Your top 3 stressors:</div>
      <div className="flex flex-row justify-center items-center place-content-between ">
        {icons[0]} 
        <div className="m-10"></div> 
        {icons[1]}
      </div>
      
      <div className="flex px-3 pt-16 justify-start font-bold font-ptserif text-[22px]">What it means for me?</div><br/>
      <div className="flex px-3 text-left font-ptserif text-[20px]">Information here</div>

      <div className="flex px-3 pt-16 justify-start font-bold font-ptserif text-[22px]">What can I do?</div><br/>
      <div className="flex px-3 text-left font-ptserif text-[20px]">Information here</div>
      <br/><br/>
    </div>

  )
};

export default OverallCard;
