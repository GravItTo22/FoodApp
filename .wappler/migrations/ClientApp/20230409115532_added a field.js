
exports.up = function(knex) {
  return knex.schema
    .dropTable('wallet_transactions')
    .table('wallet_request_bank', async function (table) {
      table.string('account_holder');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('wallet_request_bank', async function (table) {
      table.dropColumn('account_holder');
    })
    .createTable('wallet_transactions', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.integer('order_id');
      table.integer('user_id');
      table.string('opening_bal', -5);
      table.string('credit_amount', -5);
      table.string('debit_amount', -5);
      table.string('closing_bal', -5);
      table.string('tr_from', -5);
      table.string('tr_trpe', -5);
      table.string('tr_status', -5);
      table.integer('status');
      table.integer('created_by');
      table.timestamp('created_on');
      table.timestamp('updated_on');
      table.timestamp('deleted_on');
    })
};
