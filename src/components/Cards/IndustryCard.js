import React from 'react';

const IndustryCard = (props) => {

  const industryScore = props.industryScore;
  const score = props.score;

  return (
    <div className="bg-[#A2C2A4] rounded-lg p-4 font-inter font-semibold">
      <div className="flex justify-center">How to compare with your industry</div>
        <br/>
      Your score: {score}% <br/>
      Industry score: {industryScore}% <br/> 
      <div className="flex justify-center">How to compare with your age</div>
        <br/>
      Your score: {score}% <br/>
      Age score: {industryScore}% <br/>       

    </div>
  )
};

export default IndustryCard;