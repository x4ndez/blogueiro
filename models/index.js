const Users = require("./Users");
const BlogPosts = require("./BlogPosts");

Users.hasMany(BlogPosts);

BlogPosts.belongsTo(Users);

module.exports = {
    Users,
    BlogPosts,
}