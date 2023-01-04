import { useEffect } from 'react';

const OverallCard = (props) => {
  const score = props.score
  const names = ["Work Demand","Work Flexibility","Coworker Relationship","Management Leadership", "Compensation"]
  const arr = [props.workDemand,props.workFlexibility,props.coworkerRelationship,props.managementLeadership,props.compensation] 
  const top3 = arr.map((x, i) => i).sort((a, b) => arr[b] - arr[a]).reverse();

  return (
    <div className="font-inter overflow-hidden">
      <div className="flex justify-center font-medium font-ptserif text-[22px]">Score Summary</div><br/>
      <div className="flex text-left font-ptserif text-[20px] ml-3">Your overall score: </div><br/><br/><div className="text-[64px] font-inter flex justify-center">{score}%</div><br/><br/>
      <div className="flex text-left font-ptserif text-[20px] ml-3">Your top 3 stressors:</div>
      <div className="flex text-left font-ptserif text-[18px] ml-3"><br/>1. {names[top3[0]]}<br/>2. {names[top3[1]]}<br/>3. {names[top3[2]]}</div>
      <br/><br/>
    </div>

  )
};

export default OverallCard;