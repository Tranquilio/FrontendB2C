import React, { useState, useEffect } from 'react'

const InformationCard = (props) => {
const wdScore = props.wdScore
const [wdInsight, setWDInsight] = useState("")
const [wdRecco, setWDRecco] = useState("")

const wfScore = props.wfScore
const [wfInsight, setWFInsight] = useState("")
const [wfRecco, setWFRecco] = useState("")

const crScore = props.crScore
const [crInsight, setCRInsight] = useState("")
const [crRecco, setCRRecco] = useState("")

const mlScore = props.mlScore
const [mlInsight, setMLInsight] = useState("")
const [mlRecco, setMLRecco] = useState("")

const cScore = props.cScore
const [cInsight, setCInsight] = useState("")
const [cRecco, setCRecco] = useState("")

useEffect(() => {
    if (wdScore <= 40) {
        setWDInsight("This could be because Work Demand Insight Low.")
        setWDRecco("Based on this Work Demand Recco Low.")
    } else if (wdScore <= 75) {
        setWDInsight("This could be because Work Demand Insight Med.")
        setWDRecco("Based on this Work Demand Recco Med.")  
    } else {
        setWDInsight("This could be because Work Demand Insight High.")
        setWDRecco("Based on this Work Demand Recco High.") 
    }

    if (wfScore <= 40) {
        setWFInsight("This could be because Work Flexibility Insight Low.")
        setWFRecco("Based on this Work Flexibility Recco Low.")
    } else if (wfScore <= 75) {
        setWFInsight("This could be because Work Flexibility Insight Mid.")
        setWFRecco("Based on this Work Flexibility Recco Mid.")
    } else {
        setWFInsight("This could be because Work Flexibility Insight High.")
        setWFRecco("Based on this Work Flexibility Recco High.")
    }

    if (crScore <= 40) {
        setCRInsight("This could be because Coworker Relationship Insight Low.")
        setCRRecco("Based on this Coworker Relationship Recco Low.")
    } else if (crScore <= 75) {
        setCRInsight("This could be because Coworker Relationship Insight Med.")
        setCRRecco("Based on this Coworker Relationship Recco Med.")  
    } else {
        setCRInsight("This could be because Coworker Relationship Insight High.")
        setCRRecco("Based on this Coworker Relationship Recco High.") 
    }

    if (mlScore <= 40) {
        setMLInsight("This could be because Management Leadership Insight Low.")
        setMLRecco("Based on this Management Leadership Recco Low.")
    } else if (wdScore <= 75) {
        setMLInsight("This could be because Management Leadership Insight Med.")
        setMLRecco("Based on this Management Leadership Recco Med.")  
    } else {
        setMLInsight("This could be because Management Leadership Insight High.")
        setMLRecco("Based on this Management Leadership Recco High.") 
    }

    if (cScore <= 40) {
        setCInsight("This could be because Compensation Insight Low.")
        setCRecco("Based on this Compensation Recco Low.")
    } else if (cScore <= 75) {
        setCInsight("This could be because Compensation Insight Med.")
        setCRecco("Based on this Work Compensation Recco Med.")  
    } else {
        setCInsight("This could be because Work Demand Insight High.")
        setCRecco("Based on this Work Demand Recco High.") 
    }
  }, []);
  
  return (
  <div className="bg-[#FFDDD3] rounded-lg p-4 font-inter font-semibold text-[13px]">
    The factors that affect your workplace wellbeing <br/><br/>
    <div className="font-medium">
        1. Work Demand: <br/> ‘Work demand’, refers to the physical, psychological, social and organizational aspects of one's job demand that require one's physical and/or psychological effort.<br/>
        Your score is {wdScore}%. <br/> {wdInsight} <br/> {wdRecco} <br/><br/>

        2. Work Flexibility: <br/> ‘Work flexibility’, refers to one's ability to influence their work environment and how it aligns with their personal growth.<br/>
        Your score is {wfScore}%. <br/> {wfInsight} <br/> {wfRecco} <br/><br/>

        3. Coworker Relationship: <br/> ‘Coworker relationship’, refers to one's relationships with colleagues that can affect well-being due to interpersonal conflict, lack of social support etc. <br/>
        Your score is {crScore}%. <br/> {crInsight} <br/> {crRecco} <br/><br/>

        4. Management Leadership: <br/> ‘Supervisor leadership’, refers to one's relationships with colleagues that can affect well-being due to interpersonal conflict, lack of social support etc. <br/>
        Your score is {mlScore}%. <br/> {mlInsight} <br/> {mlRecco} <br/><br/>

        5. Compensation:  <br/> ‘Compensation’, refers to the acknowledgment of a company’s staff career. This acknowledgement can come from within the company, such as progression prospects, pay or benefits, and also externally from society, such as social perception of one's work. <br/>
        Your score is {cScore}%. <br/> {cInsight} <br/> {cRecco} <br/><br/>
    </div>
  </div>
  )
};

export default InformationCard;