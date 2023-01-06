import React, { useState, useEffect } from 'react'
import ReccoModal from './ReccoModal';
import { Tooltip } from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'

const InformationCard = (props) => {
const wdScore = props.wdScore

const wfScore = props.wfScore

const crScore = props.crScore

const olScore = props.olScore

const cScore = props.cScore

function scoringRange(value) {
    if (value < 40) {
        return "Poor"
    } else if (value < 70) {
        return "Satisfactory"
    } else {
        return "Good"
    }
}
  
  return (
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

         <div className="font-ptserif text-[18px]">4. Organizational Leadership: {scoringRange(olScore)}  <Tooltip label='Organizational leadership’, refers to the overall management of the organization. Poor management from a lack of quality, clarity, sensitivity and transparency in management communication, low level of well-being support, poor diversity management and lack of staff involvement in co-creating important transformation policies etc. can seriously affect employee well-being and morale.' bg='white' color='black' fontWeight="normal" borderRadius="md" padding="3" placement='bottom-end'><InfoOutlineIcon color="gray.600" boxSize={3}/></Tooltip>
         <br/></div>
         <ReccoModal construct={"ol"} value={scoringRange(olScore)}/><br/>
         
         <div className="font-ptserif text-[18px]">5. Compensation: {scoringRange(cScore)}  <Tooltip label='‘Compensation’, refers to the acknowledgment of a company’s staff career. This acknowledgement can come from within the company, such as progression prospects, pay or benefits, and also externally from society, such as social perception of one’s work.' bg='white' color='black' fontWeight="normal" borderRadius="md" padding="3" placement='bottom-end'><InfoOutlineIcon color="gray.600" boxSize={3}/></Tooltip>
         <br/></div>
         <ReccoModal construct={"c"} value={scoringRange(cScore)}/><br/>
        </div>
    </div>
  )
};

export default InformationCard;
