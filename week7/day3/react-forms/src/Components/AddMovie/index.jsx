import {useState} from 'react';

function AddMovie(props){
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");

    const handleTitleInput = (e) =>{
        setTitle(e.target.value);
    };

    const handleDirectorInput = (e) =>{
        setDirector(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newMovie = {
            title,
            director
        }

        props.addNewMovie(newMovie);

        setTitle("");
        setDirector("");
    }

    return(
    <div>
        <h4>Add a Movie</h4>
        <form onSubmit={handleSubmit}>
            <label> Title:
                <input type="text"
                name="title"
                value={title}
                onChange = {handleTitleInput}
                ></input>
            </label>
            <label> Director:
                <input type="text"
                name="director"
                value={director}
                onChange = {handleDirectorInput}
                ></input>
            </label>
            <button type="submit">Add a Movie</button>
        </form>
    </div>)
}

export default AddMovie