/**
* Story.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    emoji: { type: 'array', required: true },
    text: { type: 'string', required: true },
    slug: { type: 'string', required: true }
  }
};

