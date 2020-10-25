
exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table) => {
        table.increments("id")
        table.text("name").notNull()
        table.text("description")
        table.boolean("completed").defaultTo(0)
    })

    await knex.schema.createTable("resource",(table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("description")
        
    })

    await knex.schema.createTable("tasks",(table) => {
        table.increments("id")
        table.text("description").notNull()
        table.text("notes")
        table.boolean("completed").defaultTo(0)
    })
    await knex.schema.createTable("connect",(table) => {
        table.increments("id")
        table.integer("project_id").notNull()
        .references("id")
        .inTable("projects")
        .onDelete('CASCADE')
        table.integer("task_id").unique()
            .references("id")
            .inTable("tasks")
            .onDelete('CASCADE')
        table.integer("res_id")
            .references("id")
            .inTable("resource")
            .onDelete('CASCADE')
        
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("connect")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resource")
    await knex.schema.dropTableIfExists("projects")
  
};
