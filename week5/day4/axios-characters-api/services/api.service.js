// Require Axios
const axios = require('axios');

class ApiService {
    constructor(){
        this.api = axios.create({
          baseURL: 'https://ih-crud-api.herokuapp.com'
        });
    }

    // CRUD Actions 
    getAllCharacters = () =>{
        return this.api.get('/characters');    
    }

    getSingleCharacter = (characterId) =>{
        return this.api.get(`/characters/${characterId}`);
    }

    createCharacter = (info) =>{
        return this.api.post('/characters', info);
    }

    editCharacter = (characterId, info) =>{
        return this.api.put(`/characters/${characterId}`, info);
    }

    deleteCharacter = (characterId) =>{
        return this.api.delete(`/characters/${characterId}`);
    }
}

module.exports = ApiService;