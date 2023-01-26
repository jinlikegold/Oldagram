const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

/*
Here's what I want to change dynamically:
Full Name *
Location *
Avatar *
Post Image *
Username *
Comment * 
# of likes *

I think I need an array (userData) for all of the DOM variables that represent each one, and then the for loop
can cycle through the objects in posts and plug them into each member of the array's textcontent

let's try it

ok actually I needed to make separate arrays for each set of variables

now to refactor...

*/

let fullNames = document.querySelectorAll(".full-name")
let locations = document.querySelectorAll(".location")
let likes = document.querySelectorAll(".likes")
let usernames = document.querySelectorAll(".username")
let comments = document.querySelectorAll(".comment")
let avatars = document.querySelectorAll(".avatar")
let postImgs = document.querySelectorAll(".post")

for (i=0; i<posts.length; i++) {
    fullNames[i].textContent = posts[i].name
    locations[i].textContent = posts[i].location
    likes[i].textContent = posts[i].likes
    usernames[i].textContent = posts[i].username
    comments[i].textContent = posts[i].comment
    avatars[i].src = posts[i].avatar
    postImgs[i].src = posts[i].post
}


