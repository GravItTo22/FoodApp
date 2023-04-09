
exports.up = function(knex) {
  return knex.schema
    .table('wallet_request_bank', async function (table) {
      table.string('Amount');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('wallet_request_bank', async function (table) {
      table.dropColumn('Amount');
    })
};
