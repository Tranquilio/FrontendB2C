import React from 'react';

const AgeCard = (props) => {

  const ageName = props.ageName;
  const score = props.score;

  const data = {
    "18-24": 65.2,
    "25-30": 64.9,
    "31-40": 61.7,
    "41-50": 62.0,
    "51-65": 63.8,
    "65+": 60.4
  };

  return (
    <div className="font-inter overflow-hidden">
      <div className="flex justify-center font-medium font-ptserif text-[22px]">Your Age Group Average</div><br/>
      <br/><br/><div className="text-[72px] flex justify-center">{data[ageName]}%</div><br/><br/>
      {data[ageName] - score > 0.5 && <div className="text-[18px] font-ptserif flex justify-center text-center">Based on your results, you have a POORER score compared to the {ageName} age group.</div>} 
      {score - data[ageName] > 0.5 && <div className="text-[18px] font-ptserif flex justify-center text-center">Based on your results, you have a BETTER score compared to the {ageName} age group.</div>} 
      {(data[ageName] - score <= 0.5 && score - data[ageName] <= 0.5)  && <div className="text-[18px] font-ptserif flex justify-center text-center">Based on your results, you have a SIMILAR score compared to the {ageName} age group.</div>}<br/>
      {/* {ageScore > score && <div className="text-[20px] font-ptserif flex justify-center">{Math.round(10*(ageScore-score))/10}% above your score of {score}%</div>} 
      {ageScore < score && <div className="text-[20px] font-ptserif flex justify-center">{Math.round(10*(score-ageScore))/10}% below your score of {score}%</div>} 
      {ageScore == score && <div className="text-[20px] font-ptserif flex justify-center">Equal your score of {score}%</div>} 
      <br/><div className="text-[16px] font-ptserif flex justify-center">Amongst __ people</div><br/><br/> */}
    </div>
  )
};

export default AgeCard;