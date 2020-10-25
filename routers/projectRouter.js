const express = require("express")
const pm = require("../models/projectModels")

const router = express.Router()

router.get("/", async (req,res,next) => {
    try {
        const projects = await pm.getProjects()
        res.json(projects)

    } catch(er) {
        next(er)
    }
})

router.get("/:id", async (req,res,next) => {
    try{
        const project = await pm.getProjectById(req.params.id)
        const tasks = []
        const tools = []
        project.forEach(x => {
            tasks.push(x.task)
        })
        project.forEach(x => {
            tools.push(x.tools)
        })
        const reProj = {
            name: project[1].name,
            tasks: tasks,
            completed: project[0].completed

        }
        res.json(reProj)
    }catch(er){next(er)}
})

router.get("/:id/tools", async (req,res,next) => {
    try{
        const tools = await pm.getTools(req.params.id)
        res.json(tools)
    }catch(er){next(er)}
})

router.get("/:id/tasks", async (req,res,next) => {
    try{
        const taskList = []
        const tasks = await pm.getTasks(req.params.id)
        tasks.forEach(x => {
            taskList.push({id: x.id, task: x.description, notes: x.notes, completed: x.completed})
        })
        res.json(taskList)
    }catch(er){next(er)}
})

router.post("/",async (req,res,next) => {
    try{
        const body = {
            name: req.body.name,
            description: req.body.description
        }
        if (req.body.name){
        const np = await pm.createProject(body)
        res.status(201).json(np)} else {
            res.status(400).json({message: "please provide a name"})
        }
    }catch(er){next(er)}
})

router.get('/resources', async (req,res,next) => {
    try{
        const resources = await pm.getResources()
        res.json(resources)
    } catch(er){next(er)}
})


router.post('/:id/tasks', async (req,res,next) => {
    try{
        if (req.body.description || req.body.project_id){
            const task = await pm.addTask(req.params.id,req.body)
            res.json(task)
        }
    }catch(er){next(er)}
})




module.exports = router