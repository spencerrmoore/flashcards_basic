var mongoose=require("mongoose");

//create a schema for all the cards
var CardSchema=mongoose.Schema({
  title:{
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  group:{
    type: String,
    required: true,
  },
  pseudocode:{
    type: String
  },
  time_complexity:{
    type: String
  },
  space_complexity:{
    type: String
  },
  create_date: {
    type: Date,
    default: Date.now()
  }
});

var Card=module.exports=mongoose.model('fc_cards',CardSchema);

//get the cards
module.exports.getCards=function(callback,limit) {
  Card.find(callback).limit(limit);
};

//get a single card
module.exports.getCardById=function(id,callback) {
  Card.findById(id,callback);
}

//add a card
module.exports.addCard=function(card,callback) {
  Card.create(card,callback);
};


//edit a card
module.exports.updateCard=function(id,card,options,callback) {
  var query={_id:id};
  var update= {
    title: card.title,
    description: card.description,
    group: card.group,
    pseudocode: card.pseudocode,
    time_complexity: card.time_complexity,
    space_complexity: card.space_complexity
  };

  Card.findOneAndUpdate(query,update,options,callback);
};

//delete a card
module.exports.deleteCard=function(id,callback) {
  var query={_id:id};

  Card.remove(query,callback);
};
