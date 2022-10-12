import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users',(table)=>{
        table.uuid('id').primary().notNullable().unique();
        table.string('username').notNullable().unique();
        table.string('email').notNullable().unique();
        table.string('fullname').notNullable().unique();
        table.string('password').notNullable();
        table.string('phonenumber').notNullable().unique();
        table.timestamps(true,true);
    })
    .createTable('account',(table)=>{
        table.uuid('id').primary().notNullable();
        table.string('bankName').notNullable();
        table.string('accountName').notNullable();
        table.string('bankNumber').notNullable();
        table.string('bankCode').notNullable();
        table.uuid('userId')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('account').dropTableIfExists('users')
}

