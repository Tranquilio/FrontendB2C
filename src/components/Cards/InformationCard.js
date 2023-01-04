import React, { useState, useEffect } from 'react'
import ReccoModal from './ReccoModal';
import { Tooltip } from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'

const InformationCard = (props) => {
const wdScore = 100-props.wdScore
const [wdRecco, setWDRecco] = useState("")

const wfScore = props.wfScore
const [wfRecco, setWFRecco] = useState("")

const crScore = props.crScore
const [crRecco, setCRRecco] = useState("")

const mlScore = props.mlScore
const [mlRecco, setMLRecco] = useState("")

const cScore = props.cScore
const [cRecco, setCRecco] = useState("")

function scoringRange(value) {
    if (value < 40) {
        return "Poor"
    } else if (value < 70) {
        return "Satisfactory"
    } else {
        return "Good"
    }
}
useEffect(() => {
    if (wdScore <= 40) {
        setWDRecco("Review the feasibility of completing the workload given. Prioritising tasks go a long way in managing a high workload. For a start, the Esienhow Matrix is a model that has proven its use to many. At the end of the day, an open and honest communication in managing workload with the organisation is important for a sustianble work environment. ")
    } else if (wdScore <= 70) {
        setWDRecco("Based on this Work Demand Recco Med.")  
    } else {
        setWDRecco("Based on this Work Demand Recco High.") 
    }

    if (wfScore <= 40) {
        setWFRecco("Based on this Work Flexibility Recco Low.")
    } else if (wfScore <= 70) {
        setWFRecco("Based on this Work Flexibility Recco Mid.")
    } else {
        setWFRecco("Flexibility at work is important for productivity as revealed during the COVID work conditions for many. As a first step, defining Asynchronous and Synchronous tasks allows for flexibility In terms of when do employees should be meeting or be left indepdently. Having an honest and open discussion with the team on how best everyone would like to work will also be beneficial in introducing a customisied flexible plan for your team.")
    }

    if (crScore <= 40) {
        setCRRecco("Based on this Coworker Relationship Recco Low.")
    } else if (crScore <= 70) {
        setCRRecco("Based on this Coworker Relationship Recco Med.")  
    } else {
        setCRRecco("Based on this Coworker Relationship Recco High.") 
    }

    if (mlScore <= 40) {
        setMLRecco("Based on this Management Leadership Recco Low.")
    } else if (wdScore <= 70) {
        setMLRecco("Based on this Management Leadership Recco Med.")  
    } else {
        setMLRecco("Based on this Management Leadership Recco High.") 
    }

    if (cScore <= 40) {
        setCRecco("Based on this Compensation Recco Low.")
    } else if (cScore <= 70) {
        setCRecco("Based on this Work Compensation Recco Med.")  
    } else {
        setCRecco("Based on this Work Demand Recco High.") 
    }
  }, []);

  
  return (
//   <div className="font-inter overflow-hidden">
//       <div className="flex justify-center font-medium font-ptserif text-[22px]">Top Stressors At Work</div><br/>
//     <div className="font-light">
//         <div className="font-ptserif text-[18px]">1. Work Demand: <br/></div> ‘Work demand’, refers to the physical, psychological, social and organizational aspects of one's job demand that require one's physical and/or psychological effort.<br/>
//         <div className="font-medium">Based on your response, your Work Demand is: {scoringRange(wdScore)}.</div> <ReccoModal construct={"wd"} value={scoringRange(wdScore)}/> <br/>

//         <div className="font-ptserif text-[18px]">2. Work Flexibility: <br/></div> ‘Work flexibility’, refers to one's ability to influence their work environment and how it aligns with their personal growth.<br/>
//         <div className="font-medium">Based on your response, your Work Flexibility is: {scoringRange(wfScore)}. </div> <ReccoModal construct={"wf"} value={scoringRange(wfScore)}/><br/>

//         <div className="font-ptserif text-[18px]">3. Coworker Relationship: <br/></div> ‘Coworker relationship’, refers to one's relationships with colleagues that can affect well-being due to interpersonal conflict, lack of social support etc. <br/>
//         <div className="font-medium">Based on your response, your Work Flexibility is: {scoringRange(crScore)}. </div> <ReccoModal construct={"cr"} value={scoringRange(crScore)}/><br/>

//         <div className="font-ptserif text-[18px]">4. Management Leadership: <br/></div> ‘Supervisor leadership’, refers to one's relationships with colleagues that can affect well-being due to interpersonal conflict, lack of social support etc. <br/>
//         <div className="font-medium">Based on your response, your Work Flexibility is: {scoringRange(mlScore)}. </div> <ReccoModal construct={"ml"} value={scoringRange(mlScore)}/><br/>

//         <div className="font-ptserif text-[18px]">5. Compensation: <br/></div> ‘Compensation’, refers to the acknowledgment of a company’s staff career. This acknowledgement can come from within the company, such as progression prospects, pay or benefits, and also externally from society, such as social perception of one's work. <br/>
//         <div className="font-medium">Based on your response, your Work Flexibility is: {scoringRange(cScore)}. </div> <ReccoModal construct={"c"} value={scoringRange(cScore)}/><br/>
//     </div>
//   </div>
    <div className="font-inter overflow-hidden">
        <div className="flex justify-center font-medium font-ptserif text-[22px]">Top Stressors At Work</div>
        <br/>
        <div className="font-light">

        <div className="font-ptserif text-[18px]">1. Work Demand: {scoringRange(wdScore)}  <Tooltip label='‘Work demand’, refers to the physical, psychological, social and organizational aspects of one’s job demand that require one’s physical and/or psychological effort.' bg='white' color='black' fontWeight="normal" borderRadius="md" padding="3" placement='bottom-end'><InfoOutlineIcon color="gray.600" boxSize={3}/></Tooltip>
        <br/></div>
        <ReccoModal construct={"wd"} value={scoringRange(wdScore)}/> <br/>
    
        <div className="font-ptserif text-[18px]">2. Work Flexibility: {scoringRange(wfScore)}  <Tooltip label='‘Work flexibility’, refers to one’s ability to influence their work environment and how it aligns with their personal growth.' bg='white' color='black' fontWeight="normal" borderRadius="md" padding="3" placement='bottom-end'><InfoOutlineIcon color="gray.600" boxSize={3}/></Tooltip>
        <br/></div>
        <ReccoModal construct={"wf"} value={scoringRange(wfScore)}/><br/>

        <div className="font-ptserif text-[18px]">3. Coworker Relationship: {scoringRange(crScore)}  <Tooltip label='Coworker relationship’, refers to one’s relationships with colleagues that can affect well-being due to interpersonal conflict, lack of social support etc.' bg='white' color='black' fontWeight="normal" borderRadius="md" padding="3" placement='bottom-end'><InfoOutlineIcon color="gray.600" boxSize={3}/></Tooltip>
         <br/></div>
         <ReccoModal construct={"cr"} value={scoringRange(crScore)}/><br/>

         <div className="font-ptserif text-[18px]">4. Management Leadership: {scoringRange(mlScore)}  <Tooltip label='Management leadership’, refers to the overall management of the organization. Poor management from a lack of quality, clarity, sensitivity and transparency in management communication, low level of well-being support, poor diversity management and lack of staff involvement in co-creating important transformation policies etc. can seriously affect employee well-being and morale.' bg='white' color='black' fontWeight="normal" borderRadius="md" padding="3" placement='bottom-end'><InfoOutlineIcon color="gray.600" boxSize={3}/></Tooltip>
         <br/></div>
         <ReccoModal construct={"ml"} value={scoringRange(mlScore)}/><br/>
         
         <div className="font-ptserif text-[18px]">5. Compensation: {scoringRange(cScore)}  <Tooltip label='‘Compensation’, refers to the acknowledgment of a company’s staff career. This acknowledgement can come from within the company, such as progression prospects, pay or benefits, and also externally from society, such as social perception of one’s work.' bg='white' color='black' fontWeight="normal" borderRadius="md" padding="3" placement='bottom-end'><InfoOutlineIcon color="gray.600" boxSize={3}/></Tooltip>
         <br/></div>
         <ReccoModal construct={"c"} value={scoringRange(cScore)}/><br/>
        </div>
    </div>
  )
};

export default InformationCard;