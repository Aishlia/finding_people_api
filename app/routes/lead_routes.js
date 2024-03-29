var get_info = require('./get_info.js');
var best_lead = require('./best_lead.js');

module.exports = function(app, db) {
  app.get('/lead', async (req, res) => {
    if (!req.query.id) {
      return res.send({"error": "Not sufficient information"});
    } else if (req.query.id) {
      const comp_id = req.query.id;
      var info = await get_info.get_additional_comp_info(comp_id);
      var companies = await [
        {
          "website": info[0]['website'],
          "companyId": comp_id
        }
      ]
      var lead_info = await best_lead.find_best_lead(companies)
      return res.send(lead_info);
    }
  });
};
