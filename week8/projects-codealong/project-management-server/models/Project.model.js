/* Data Models */
// We use Mongoose to help us to create MONGODB Documents

// Those will be blueprints to future documents of a future collection 

// The Schema of a Mongoose Model will define the skeleton of a MongoDB Document

const {Schema, model} = require('mongoose');

const projectSchema = new Schema({
    title: String, 
    description: String, 
    tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}]
})

// Export the Model
module.exports = model('Project', projectSchema);