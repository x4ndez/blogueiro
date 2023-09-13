const Users = require("./Users");
const BlogPosts = require("./BlogPosts");
const Comments = require("./Comments");

Users.hasMany(BlogPosts);

BlogPosts.belongsTo(Users);

BlogPosts.hasMany(Comments);

Comments.belongsTo(BlogPosts);

Users.hasMany(Comments);

Comments.belongsTo(Users);

module.exports = {
    Users,
    BlogPosts,
}