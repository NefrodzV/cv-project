import PropTypes from "prop-types"
export default function Example({name, text, color}) {
    const getUpdates = (e) => {
        console.log("Current text " + e.target.value)
        console.log("Get updates called")
    }
    return (
        <>
        <h1 id={name} style={{backgroundColor :color}}>
            {text}
        </h1>
        <MyInput fn={getUpdates} />
        </>
    )
}

// Passing a callback fn
function MyInput({fn}) {
   
    return (
        <input onChange={fn}>
        </input>
    )
}

MyInput.propTypes = {
    fn: PropTypes.func.isRequired
}

Example.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}