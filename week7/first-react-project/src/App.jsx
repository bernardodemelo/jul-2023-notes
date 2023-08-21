import './App.css'

function App() {

  // 1) - Pass JSX into a variable, then return it.
  const heading = <h1>I love React so much</h1>;

  const student = {
    firstName: 'Chico', 
    lastName: 'Macareu'
  }

  let teacher = {
    firstName: 'bruno', 
    lastName: 'rocha'
  }

  // let firstName = student.firstName;
  const {firstName, lastName} = student;

  function capitalizeFirstLetter(str){
    return str[0].toUpperCase() + str.slice(1);
  }

  // Pass Attribute Values
  const classApp = 'home';

  // EXERCISE 
  const burritoIngredients = ['beans', 'rice', 'salt', 'pepper', 'tequilla', 'jalapeños'];

  return (
    <div className={classApp}>
       {heading}
       <h1>{firstName}</h1>
       <p>{lastName}</p>
       <h4>
        Capitalized: {capitalizeFirstLetter(teacher.firstName)} {capitalizeFirstLetter(teacher.lastName)}
       </h4>
       <ul>
        {burritoIngredients.map((ingredient)=>{
          return(<li>{ingredient}</li>)
        })}
       </ul>
    </div>
  )
}

export default App
