const pastBlogs = document.querySelector('#pastBlogs');
const newBlog = document.querySelector('#newBlog');
const newBlogs = document.querySelector('#newBlogs');
const makeNewBlog = document.querySelector('#createNew');

function hideCreateNew(){
    makeNewBlog.hidden = true;
}
hideCreateNew();

function handlenewBlogs(event) {
    event.preventDefault();
    console.log("clicked");
    pastBlogs.hidden = true;
    newBlogs.hidden = true;
    makeNewBlog.hidden = false;
}

async function handlenewBlog(event) {
event.preventDefault();
const title = document.querySelector('#title').value.trim();
const content = document.querySelector('#content').value.trim();

if (!title || !content) {
alert('Please fill everything out');
return;
}
const blog = {
title: title,
content: content,
};

const res = await fetch('/api/post', {
method: 'POST',
body: JSON.stringify({ blog }),
headers: { 'Content-Type': 'application/json' },
});
if (res.ok) {
document.location.replace('/blogboard');
} else {
alert("failed to make new blog post");
}};

document.querySelector('#newBlog').addEventListener('submit', handlenewBlog);
document.querySelector('#newBlogs').addEventListener('submit', handlenewBlogs);