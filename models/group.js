var mongoose=require("mongoose");

//create a schema for all the groups
var GroupSchema=mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  description:{
    type: String
  },
  create_date: {
    type: Date,
    default: Date.now()
  }
});

var Group=module.exports=mongoose.model('fc_groups',GroupSchema);

//get the groups
module.exports.getGroups=function(callback,limit) {
  Group.find(callback).limit(limit);
};

//get a single group
module.exports.getGroupById=function(id,callback) {
  Group.findById(id,callback);
};

//add a group
module.exports.addGroup=function(group,callback) {
  Group.create(group,callback);
};

//edit a group
module.exports.updateGroup=function(id,group,options,callback) {
  var query={_id:id};
  var update= {
    name: group.name,
    description:group.description
  };

  Group.findOneAndUpdate(query,update,options,callback);
};


//delete a group
module.exports.deleteGroup=function(id,callback) {
  var query={_id:id};

  Group.remove(query,callback);
};
