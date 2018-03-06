var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");

app.use(bodyParser.json());

Group=require('./models/group');
Card=require('./models/card');

//connect to mongoose
mongoose.connect("mongodb://localhost/flashcards");
var db=mongoose.connection;

app.get("/",function(req,res) {
  res.send("please use the api");
});
//-------------------------------------------------------------------------
//group functions

//get all groups
app.get("/api/groups",function(req,res) {
  Group.getGroups(function(err,groups) {
    if(err) {
      throw err;
    }

    res.json(groups);
  })
});

//get one group
app.get("/api/groups/:_id",function(req,res) {
  Group.getGroupById(req.params._id,function(err,group) {
    if(err) {
      throw err;
    }

    res.json(group);
  })
});

//add a group
app.post("/api/groups",function(req,res) {
  var group=req.body;

  Group.addGroup(group,function(err,group) {
    if(err) {
      throw err;
    }

    res.json(group);
  })
});

//update a group
app.put("/api/groups/:_id",function(req,res) {
  var group=req.body;
  var id=req.params._id;

  Group.updateGroup(id,group,{},function(err,group) {
    if(err) {
      throw err;
    }

    res.json(group);
  })
});

//delete a group
app.delete("/api/groups/:_id",function(req,res) {
  var id=req.params._id;

  Group.deleteGroup(id,function(err,group) {
    if(err) {
      throw err;
    }

    res.json(group);
  })
});


//-------------------------------------------------------------------------



//-------------------------------------------------------------------------
// card functions
app.get("/api/cards",function(req,res) {
  Card.getCards(function(err,cards) {
    if(err) {
      throw err;
    }

    res.json(cards);
  })
});

app.get("/api/cards/:_id",function(req,res) {
  Card.getCardById(req.params._id,function(err,card) {
    if(err) {
      throw err;
    }

    res.json(card);
  })
});

//add a card
app.post("/api/cards",function(req,res) {
  var card=req.body;
  console.log(card);

  Card.addCard(card,function(err,card) {
    if(err) {
      throw err;
    }

    res.json(card);
  })
});


//update a card
app.put("/api/cards/:_id",function(req,res) {
  var card=req.body;
  var id=req.params._id;

  Card.updateCard(id,card,{},function(err,card) {
    if(err) {
      throw err;
    }

    res.json(card);
  })
});

//delete a card
app.delete("/api/cards/:_id",function(req,res) {
  var id=req.params._id;

  Card.deleteCard(id,function(err,card) {
    if(err) {
      throw err;
    }

    res.json(card);
  })
});


//-------------------------------------------------------------------------


app.listen(3000);

console.log("running on port 3000...");
