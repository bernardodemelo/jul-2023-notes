// Require Packages / Packages Functionalities
const router = require('express').Router();
const mongoose = require('mongoose');

// Require Data Models
const Project = require('../models/Project.model');
const Task = require('../models/Task.model');

// POST ROUTE that Creates a new Project
router.post('/projects', async (req,res)=>{
    const {title, description} = req.body; 
    try{
        let response = await Project.create({title, description, tasks:[]});
        res.json(response);
    }
    catch (error){
        res.json(error);
    }

});

// GET ROUTE that gets all the projects
router.get('/projects', async(req,res)=>{
    try{
        let allProjects = await Project.find().populate('tasks');
        res.json(allProjects);
    }
    catch(error){
        res.json(error);
    }
});

// GET Route that gets info of a specific project
router.get('/projects/:projectId', async(req,res)=>{
    const {projectId} = req.params;

    try{
        let foundProject = await Project.findById(projectId).populate('tasks');
        res.json(foundProject);
    }
    catch(error){
        res.json(error);
    }
})

// HTTP Verbs: GET, POST, PUT, DELETE
// Since we're building a REST API, we're sending data via JSON and using HTTP Requests for communication. 

// PUT route to update info of a Project
router.put('/projects/:projectId', async(req,res)=>{
    const {projectId} = req.params; 
    const {title, description} = req.body; 

    try{
        let updateProject = await Project.findByIdAndUpdate(projectId, {title, description}, {new: true});
        res.json(updateProject);
    }
    catch(error){
        res.json(error);
    }
});

// DELETE route to delete a Project
router.delete('/projects/:projectId', async(req,res)=>{
    const {projectId} = req.params;

    try{
        await Project.findByIdAndDelete(projectId);
        res.json({message: 'Project deleted'});
    }
    catch(error){
        res.json(error);
    }
});

router.post('/:projectId/tasks', async(req,res)=>{
    const {projectId} = req.params; 
    const {title, description} = req.body; 

    try{
        let newTask = await Task.create({title, description, project: projectId});

        let response = await Project.findByIdAndUpdate(projectId, {$push: {tasks: newTask._id}});

        res.json(response);
    }

    catch(error){
        res.json(error);
    }
});




// Exporting Express Router with all its routes
module.exports = router; 