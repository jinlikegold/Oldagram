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


let location = document.querySelector(".location")
let userName = document.querySelector(".username")

*/


let fullName1 = document.querySelector(".full-name1")
let fullName2 = document.querySelector(".full-name2")
let fullName3 = document.querySelector(".full-name3")

let location1 = document.querySelector(".location1")
let location2 = document.querySelector(".location2")
let location3 = document.querySelector(".location3")

let likes1 = document.querySelector(".likes1")
let likes2 = document.querySelector(".likes2")
let likes3 = document.querySelector(".likes3")

let username1 = document.querySelector(".username1")
let username2 = document.querySelector(".username2")
let username3 = document.querySelector(".username3")

let comment1 = document.querySelector(".comment1")
let comment2 = document.querySelector(".comment2")
let comment3 = document.querySelector(".comment3")
    
let avatar1 = document.querySelector(".avatar1")
let avatar2 = document.querySelector(".avatar2")
let avatar3 = document.querySelector(".avatar3")

let post1 = document.querySelector(".post1")
let post2 = document.querySelector(".post2")
let post3 = document.querySelector(".post3")

const names = [fullName1, fullName2, fullName3]
const locations = [location1, location2, location3]
const likes = [likes1, likes2, likes3]
const usernames = [username1, username2, username3]
const comments = [comment1, comment2, comment3]
const avatars = [avatar1, avatar2, avatar3]
const postImgs = [post1, post2, post3]

for (i=0; i<posts.length; i++) {
    names[i].textContent = posts[i].name
    locations[i].textContent = posts[i].location
    likes[i].textContent = posts[i].likes
    usernames[i].textContent = posts[i].username
    comments[i].textContent = posts[i].comment
    avatars[i].src = posts[i].avatar
    postImgs[i].src = posts[i].post
}


