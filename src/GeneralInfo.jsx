import {  useState } from "react";
import "./GeneralInfo.css"
import PropTypes from "prop-types"

function GeneralInfo({personState, updatePersonState}) {
    // const [person, setPerson] = useState({name: null, lastName:null, email:null, phone:null})
    const [isDisable, setDisable] = useState(false)

    const isDisableHandler = () => {
        console.log(personState)
        if(isDisable) {
            setDisable(false)
            return
        }
        setDisable(true)
    }
    
    const onChangeHandler = (e) => {
        const field = e.target

        const personCopy = {...personState}

        switch(field.name) {
            case "name":
                personCopy.name = field.value
                updatePersonState(personCopy)
            break
            case "lastName":
                personCopy.lastName = field.value
                updatePersonState(personCopy)
            break
            case "email":
                personCopy.email = field.value
                updatePersonState(personCopy)
            break
            case "phone":
                personCopy.phone = field.value
                updatePersonState(personCopy)
            break

            default:
                throw(Error("OnChange input not defined"))
        }
    }

    return(
            <div>
                <h1>General Information</h1>
                <input onChange={updatePersonState} name="name" disabled={isDisable}  placeholder="Enter name"/>
                <input onChange={updatePersonState} name="lastName" disabled={isDisable}  placeholder="Enter last name"/>
                <input onChange={updatePersonState} name="email" disabled={isDisable}  placeholder="Enter email"/>
                <input onChange={updatePersonState} name="phone" disabled={isDisable}  placeholder="Enter phone number"/>
                <button type="button" onClick={isDisableHandler} disabled={isDisable ? false : true}>Edit</button>
                <button type="button" onClick={isDisableHandler} disabled={isDisable? true: false}>Save</button>
           </div>
            
        )
}
GeneralInfo.propTypes = {
    personState: PropTypes.any, 
    updatePersonState: PropTypes.func.isRequired
}

export default GeneralInfo