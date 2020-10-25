
exports.seed = async function(knex) {
  await knex("connect").truncate()
   
  await knex('connect').insert([
        {project_id: "1", res_id: "1"},
        {project_id: "1", res_id: "2"},
        {project_id: "1", res_id: "3"},
        {project_id: "2", res_id: "1"},
        {project_id: "2", res_id: "4"},
        {project_id: "1", task_id: "1"},
        {project_id: "1", task_id: "2"},
        {project_id: "1", task_id: "3"},
        {project_id: "2", task_id: "4"},
        {project_id: "2", task_id: "5"},
      ]);
    
};
