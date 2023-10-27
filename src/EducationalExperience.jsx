import { useState } from "react"
import PropTypes from "prop-types"

export default function EducationalExperience({educationState, updateEducationState}) {

    // const [education, setEducation] = useState({school:null, study:null, date:null})
    const [isDisable, setDisable] = useState(false)
    const isDisableHandler = () => {
         console.log(educationState)
        if(isDisable) {
            setDisable(false)
            return
        }
        setDisable(true)
    }
    
//     const onChangeHandler = (e) => {
//         const field = e.target
// 
//         const educationCopy = {...education} 
// 
//         switch(field.name) {
//             case "school":
//                 educationCopy.school = field.value
//                 setEducation(educationCopy)
//             break
//             case "study":
//                 educationCopy.study = field.value
//                 setEducation(educationCopy)
//             break
//             case "date":
//                educationCopy.date = field.value
//                setEducation(educationCopy)
//             break
//             
//             default:
//                 throw(Error("OnChange input not defined"))
//         }
//     }
    return (
        <section>
            <h1>Education</h1>
                <input onChange={updateEducationState} name="school" disabled={isDisable}  placeholder="Enter school"/>
                <input onChange={updateEducationState} name="study" disabled={isDisable}  placeholder="Enter study"/>
                <input onChange={updateEducationState} name="date" disabled={isDisable}  placeholder="Enter date"/>
                <button type="button" onClick={isDisableHandler} disabled={isDisable ? false : true}>Edit</button>
                <button type="button" onClick={isDisableHandler} disabled={isDisable ? true: false}>Save</button>
        </section>
    )
}

EducationalExperience.propTypes = {
    educationState: PropTypes.any,
    updateEducationState: PropTypes.func.isRequired
}