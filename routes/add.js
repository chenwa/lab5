var data = require("../data.json");

exports.addFriend = function(req, res) {   
  
  var newFriend = new Object();
  newFriend.name = req.query.name;
  newFriend.description = req.query.description;
  newFriend.imageURL = "http://lorempixel.com/400/400/people";
  var newFriendJSON = JSON.stringify(newFriend);
  data.friends.push(newFriend);

  console.log(data);
  res.render('index', {
    friends: data.friends,
  });
};
