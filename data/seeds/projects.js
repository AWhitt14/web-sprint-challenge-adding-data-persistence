
exports.seed = async function(knex) {
  await knex("projects").truncate()
   
  await knex('projects').insert([
        {name: 'Garden setup',description: "start your garden"},
        {name: 'Make your patio',description: "build a concrete patio for your backyard"}
      ]);
    
};
