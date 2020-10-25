
exports.seed = async function(knex) {
  await knex("resource").truncate()
   
  await knex('resource').insert([
        {name: 'shovel',description: "used to dig"},
        {name: 'dirt',description: "high quality dirt"},
        {name: 'seeds',description: "your choice of veggies for your garden"},
        {name: 'concrete',description: "somthing that dries quickly"}
      ]);
    
};
