import { useState } from "react";
import PropTypes from "prop-types"

let jobId = 0
export default function PracticalExperience({experienceState, updateExperienceState}) {
    console.log(experienceState)
    const [isEnabled, setEnable]  = useState(true)
    
    // TODO: FIX JOB COUNTER NOT INCREMENTING
    const addJobHandler = () => {
        const expCopy = {...experienceState}
        if(expCopy.jobs.length > 0) {
            const lastJob = expCopy.jobs[expCopy.jobs.length - 1]
            // If the last job wasnt filled cannot add another
            if(lastJob.description === null || lastJob.description === "" || lastJob.description.length < 5) {
                    console.log("[Error] Cannot add another jobs fill in the last one")
                    return
                }
        }
        console.log("Making another job component")
        const id = jobId++
        expCopy.jobs.push({key: id, description: ""})
        updateExperienceState(expCopy)
    }
    
    const onChangeHandler = (e) => {
        const field = e.target
        const fieldName = field.name
        console.log("Field name being changed " + fieldName)
        const expCopy = {...experienceState}
        expCopy[fieldName] = field.value
        updateExperienceState(expCopy)
    }

    const onJobChange = (e) => {
        console.log("handling on job change")
        const experienceCopy = {...experienceState}
        experienceCopy.jobs.forEach((job) => {
            if(job.key === parseInt(e.target.name)) {
                console.log("Found target updating....")
                job.description = e.target.value
            }
        })
        
        updateExperienceState(experienceCopy)
}

    const disableHandler = () => {
        
        // )
        // console.log(experienceState.jobs)
        if(isEnabled) {
            setEnable(false)
            //Remove the last job component and object
            if(experienceState.jobs.length > 0) {
                const lastJob = experienceState.jobs[experienceState.jobs.length - 1]
                if(lastJob.description.trim() === "") {
                    console.log("Last job component object emppty removing...")
                    const copy = {...experienceState}
                    copy.jobs.pop()
                    updateExperienceState(copy)
                }
            }
            return
        }
        setEnable(true)
    }
    
    return(
        <section>
            <h1>Practical Experience</h1>
            <input onChange={onChangeHandler} disabled ={isEnabled ? false : true} name="company" placeholder="Enter company name"/>
            <input onChange={onChangeHandler} disabled ={isEnabled ? false : true} name="position" placeholder="Enter position"/>
            <input onChange={onChangeHandler} disabled ={isEnabled ? false : true} name="startDate" placeholder="Enter date start"/>
            <input onChange={onChangeHandler} disabled ={isEnabled ? false : true} name="endDate" placeholder="Enter date end"/>
            <ul> <h1>Jobs</h1>
                {experienceState.jobs.map(job => (
                    <li key={job.key} >
                        <input name={job.key} onChange={onJobChange}  disabled ={isEnabled ? false : true} placeholder="Enter job description" value={job.description}/>
                    </li>
                ))}
            </ul>
            <button type="button" onClick={addJobHandler}>Add job</button>
            <button onClick={disableHandler} disabled ={isEnabled ? false : true} type="button">Save</button>
            <button onClick={disableHandler} disabled ={isEnabled ? true : false} type="button">Edit</button>
        </section>
    )
}

PracticalExperience.propTypes = {
    experienceState: PropTypes.exact({
        company: PropTypes.string, 
        position: PropTypes.string, 
        startDate: PropTypes.string, 
        endDate: PropTypes.string, 
        jobs: PropTypes.array}),
        updateExperienceState: PropTypes.func.isRequired,
    
}
