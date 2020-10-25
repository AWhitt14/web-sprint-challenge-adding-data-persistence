const { as } = require("../data/config")
const db = require("../data/config")

function getProjects() {
    return db("projects")
}

function getProjectById(id) {
    return db("connect as c")
        .innerJoin("projects as p", 'p.id', "c.project_id")
        .innerJoin("tasks as t", "t.id","c.task_id")
        .where("p.id",id)
        .select("p.name","t.description as task", "t.notes", "t.completed")
}

function getTools(id) {
    return db("connect as c")
    .where("c.project_id", id)
    .join("resource as r", "r.id", "c.res_id")
    .select("r.name")
}

function getTasks(id) {
    return db("connect as c")
    .where("c.project_id", id)
    .join("tasks as t", "t.id", "c.res_id")
    .select("t.*")
}

function createProject(body){
    return db("projects").insert(body)

}

function getResources() {
    return db("resource as r")
        .select("r.*")
}

async function addTask(id,body) {
    const task = {
        description: body.description,
        notes: body.notes
    }
    const taskId = await db("tasks").insert(task)
    const connect = await db("connect").insert({project_id: id, task_id: taskId})
    return taskId
}


module.exports = {
    getProjects, getProjectById, getTools, getTasks,createProject,getResources, addTask
}