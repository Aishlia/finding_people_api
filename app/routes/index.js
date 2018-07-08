const lead_routes = require('./lead_routes');
const comp_routes = require('./comp_routes');

module.exports = function(app, db) {
  lead_routes(app, db);
  comp_routes(app, db);
};
