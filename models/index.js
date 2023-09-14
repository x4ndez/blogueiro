const Users = require("./Users");
const BlogPosts = require("./BlogPosts");
const Comments = require("./Comments");
const Logs = require("./Logs");

Users.hasMany(BlogPosts);

BlogPosts.belongsTo(Users);

//

BlogPosts.hasMany(Comments);

Comments.belongsTo(BlogPosts);

//

Users.hasMany(Comments);

Comments.belongsTo(Users);

//

Users.hasMany(Logs);

Logs.belongsTo(Users);

module.exports = {
    Users,
    BlogPosts,
    Comments,
    Logs,
}