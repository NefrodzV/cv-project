import EducationalExperience from "./EducationalExperience"
import GeneralInfo from "./GeneralInfo"
import PracticalExperience from "./PracticalExperience"
import { useState } from "react"

// Curriculum Vitae 
export default function Cv() {
    // Id counter for jobs in practical experience
    

    // Represents the same thing data from the form
    const [person, setPerson] = useState({name: null, lastName:null, email:null, phone:null})
    const [education, setEducation] = useState({school:null, study:null, date:null})
    const [experience, setExperience] = useState({
        company: null, 
        position: null, 
        startDate: null, 
        endDate: null, 
        jobs: []
    })
    
    const onSubmitHandler = (e) => {
        e.preventDefault()

        // You can use the state to get data in the form like this and make validation as well
        console.log("Submiting data....")
        console.log("data to be submitted")
        console.log(person)
        console.log(education)
        console.log(experience)

        
        // Handle validation here as well like person and send the validity state with useState here
        // Old way of getting the data
        const data = Object.fromEntries(new FormData(e.target))
    }

    const updatePerson = (e) => {
        const field = e.target

        const personCopy = {...person}

        switch(field.name) {
            case "name":
                personCopy.name = field.value
                setPerson(personCopy)
            break
            case "lastName":
                personCopy.lastName = field.value
                setPerson(personCopy)
            break
            case "email":
                personCopy.email = field.value
                setPerson(personCopy)
            break
            case "phone":
                personCopy.phone = field.value
                setPerson(personCopy)
            break

            default:
                throw(Error("Person Update failed"))
        }
    }

    const updateEducation = (e) => {
        const field = e.target

        const educationCopy = {...education} 

        switch(field.name) {
            case "school":
                educationCopy.school = field.value
                setEducation(educationCopy)
            break
            case "study":
                educationCopy.study = field.value
                setEducation(educationCopy)
            break
            case "date":
               educationCopy.date = field.value
               setEducation(educationCopy)
            break
            
            default:
                throw(Error("Education update failed"))
        }
    }

    // const updateExperience = (e) => {
    //     const field = e.target
    //     const fieldName = field.name
    //     const expCopy = {...experience, ...experience[fieldName] = fieldName}
    //     setExperience(expCopy)
    // }

    return (
        <form onSubmit={onSubmitHandler}>
            <GeneralInfo personState={person} updatePersonState={updatePerson}/>
            <EducationalExperience educationState={education} updateEducationState={updateEducation}/>
            <PracticalExperience experienceState={experience} updateExperienceState={setExperience}/>
            <button type="submit">Submit</button>
        </form>
    )
} 