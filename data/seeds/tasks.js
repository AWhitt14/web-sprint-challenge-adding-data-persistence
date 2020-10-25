
exports.seed = async function(knex) {
  await knex("tasks").truncate()
   
  await knex('tasks').insert([
        {description: "dig garden area", notes: "make sure you have enough dirt to fill the area"},
        {description: "place high quality dirt", notes: ""},
        {description: "plant seeds", notes: "use package depth recommendation"},
        {description: "dig area for patio", notes: "make sure its level"},
        {description: "pour concrete mixture", notes: "let dry"}
      ]);
    
};
