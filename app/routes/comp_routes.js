var get_info = require('./get_info.js');

module.exports = function(app, db) {
  app.get('/comp', async (req, res) => {
    if (!req.query.id && !req.query.website) {
      return res.send({"error": "Not sufficient information"});
    } else if (req.query.id) {
      const comp_id = req.query.id;
      var compinfo = await get_info.get_additional_comp_info(comp_id);
      return res.send(compinfo);
    }
  });
};
