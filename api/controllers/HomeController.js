/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

   _config: {
    actions: false,
    shortcuts: false,
    rest: false
  },
	
  landing: function(req, res, next) {
    res.redirect("/index.html")
  },

  write: function(req, res, next) {
    res.redirect("/write.html")
  },

  read: function(req, res, next) {
    res.redirect("/emoji.html")
  }

};

