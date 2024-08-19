const Todo = require('../model/todoModel')

module.exports.createTask = async (req, res) => {
    
    const { task } = req.body;

    // Ensure `task` is provided
    if (!task) {
        return res.status(400).json({ message: 'Task is required.' });
    }

    const newTask = new Todo({ task });

    try {
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create task.', status:false});
    }
};


module.exports.getAllTask = async(req,res)=>{

    try {
        const allTask = await Todo.find()
        res.status(200).json(allTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to get all tasks.' , status : false});
    }
}

module.exports.deleteTask =async (req,res) =>{
    try {
        const deletedTask = await Todo.findByIdAndDelete(req.params.id);
        if(!deletedTask){
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "Task deleted" });
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
}

module.exports.updateTask = async (req,res) =>{

    try {
        const {task}  = req.body 
        
        const updateTask = await Todo.findByIdAndUpdate(req.params.id, {task} , {new:true});
        if(!updateTask){
            return res.status(404).json({message:"Task not Found"})
        }
        res.json(updateTask);
    } catch (error) {
        res.status(500).json({message:err.message})    
    }   


}