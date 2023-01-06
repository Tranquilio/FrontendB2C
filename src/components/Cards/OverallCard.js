import { useEffect } from 'react';

const OverallCard = (props) => {
  const score = props.score
  const names = ["Work Demand","Work Flexibility","Coworker Relationship","Organizational Leadership", "Compensation"]
  const arr = [props.workDemand,props.workFlexibility,props.coworkerRelationship,props.organizationalLeadership,props.compensation] 
  const top3 = arr.map((x, i) => i).sort((a, b) => arr[b] - arr[a]).reverse();

  return (
    <div className="font-inter overflow-hidden">
      <div className="flex justify-center font-medium font-ptserif text-[22px]">Score Summary</div><br/>
      <div className="flex text-left font-ptserif text-[20px] ml-4">Your overall score: </div><br/><br/><br/><div className="text-[72px] font-inter flex justify-center">{Math.round(score*10)/10}%</div><br/><br/><br/>
      <div className="flex text-left font-ptserif text-[20px] ml-4 mb-2">Your top 3 stressors:</div>
      <div className="flex text-left font-ptserif text-[18px] ml-8">1. {names[top3[0]]}<br/>2. {names[top3[1]]}<br/>3. {names[top3[2]]}</div>
      <br/><br/>
    </div>

  )
};

export default OverallCard;
