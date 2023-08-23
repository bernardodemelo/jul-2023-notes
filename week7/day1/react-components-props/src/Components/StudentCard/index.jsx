/* eslint-disable react/prop-types */
// Exercise 
// Create a React functional Component called 'StudentCard' that returns: 
// A Div with:
    // 1) A paragraph that inside has props.name;
    // 2) A second paragraph that inside has props.bootcamp; 
    // 3) A third paragraph that inside has props.week

// DO NOT FORGET TO CALL THE Component in the App.jsx
// with the values that you want to pass via props.

// e.g.: name = "Bernardo" bootcamp="WebDev" week="seven"

function StudentCard(props){
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.bootcamp}</p>
            <p>{props.week}</p>
        </div>
    )
}

export default StudentCard
