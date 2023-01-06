import React from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

const IndustryCard = (props) => {

  const industryName = props.industryName;
  const score = props.score;

  const data = {
    "Information Technology": 65.1,
    "Engineering & Architecture": 63.4,
    "Arts, Culture, and Entertainment": 60.5,
    "Consulting": 60.8,
    "Communications": 62.0,
    "Government": 61.3,
    "Law and Public Policy": 57.0,
    "Health and Medecine": 64.9,
    "Community and Social Services": 62.6,
    "Education": 61.1,
    "Manufacturing": 63.3,
    "Retail": 64.1,
    "Finance & Banking": 60.6,
    "Food & Beverages": 71.5,
    "Military & Security": 60.2,
    "Supply Chain and Logistics": 56.8,
    "Transportation": 65.6,
    "Other": 0,
  };

  return (
    <div className="font-inter overflow-hidden">
      <div className="flex justify-center font-medium font-ptserif text-[22px]">Your Industry Average</div><br/>
      <br/><br/><div className="text-[72px] flex justify-center">{data[industryName]}%</div><br/><br/>
      {data[industryName] - score > 0.5 && <div className="text-[16px] md:text-[18px] font-ptserif flex justify-center text-center mx-4">Based on your results, you have a LOWER wellbeing score compared to the {industryName} industry.</div>} 
      {score - data[industryName] > 0.5 && <div className="text-[16px] md:text-[18px] font-ptserif flex justify-center text-center mx-4">Based on your results, you have a HIGHER wellbeing score compared to the {industryName} industry.</div>} 
      {(data[industryName] - score <= 0.5 && score - data[industryName] <= 0.5)  && <div className="text-[16px] md:text-[18px] font-ptserif flex justify-center text-center mx-4">Based on your results, you have a SIMILAR wellbeing score compared to the {industryName} industry.</div>}<br/> 

    </div>
  )
};

export default IndustryCard;
