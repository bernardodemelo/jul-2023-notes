const router = require('express').Router();

const ApiService = require('../services/api.service');
const apiService = new ApiService();

/* READ */
router.get('/movie-characters/list', async(req,res)=>{
    try{
        let allCharacters = await apiService.getAllCharacters();
        console.log(allCharacters);
        res.render('pages/characters-list', {characters: allCharacters.data});
    }

    catch(error){
        console.log(error);
    }
});

/* CREATE */

// Render a form to create a new character
router.get('/movie-characters/create', (req,res)=>{
    res.render('pages/new-character-form');
});

router.post('/movie-characters/create', async(req,res)=>{
    const {name, occupation, weapon} = req.body;
    try{
        await apiService.createCharacter({name, occupation, weapon});
        /* ADD THIS LINE --> */ res.redirect('/movie-characters/list');
    }
    catch(error){
        console.log(error);
    }
});

/* UPDATE */
// Render a form to edit a character 
router.get('/movie-characters/edit/:id', async(req,res)=>{
    const {id} = req.params;
    try{
        let characterInfo = await apiService.getSingleCharacter(id);
        res.render('pages/edit-character-form', {character: characterInfo.data} );
    }
    catch(error){
        console.log(error);
    }
})

// Submit the information that was submited via edit form
router.post('/movie-characters/edit/:id', async(req,res)=>{
    try{
        const {id} = req.params; 
        const {name, occupation, weapon} = req.body; 

        await apiService.editCharacter(id, {name, occupation, weapon});
        res.redirect('/movie-characters/list');
    }
    catch(error){
        console.log(error);
    }
})

/* DELETE ROUTE */
router.post('/movie-characters/delete/:id', async(req,res)=>{
    const characterId = req.params.id;
    try{
        await apiService.deleteCharacter(characterId);
        res.redirect('/movie-characters/list')
    }
    catch(error){
        console.log(error);
    }
})



module.exports = router;