/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var shortId = require("shortid")

module.exports = {
	
  getEmoji: function(req, res, next) {
    res.json({
      emoji: EmojiService(5)
    })
  },

  saveStory: function(req, res, next) {
    var text = req.param("text")
    var emoji = req.param("emoji")

    Story.create({
      text: text,
      emoji: emoji,
      slug: shortId.generate()
    }, function(err, story){
      res.json(story)
    })
  }

};

