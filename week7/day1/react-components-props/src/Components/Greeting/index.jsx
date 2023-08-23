/* eslint-disable react/prop-types */
import Message from "../Message";

function Greeting(props){
    // const message = "Hello, Bruno Rápido";

    return(
    <div>
       <Message marceloRebelodeSousa={props.firstName}/>
    </div>
    )
}

export default Greeting;