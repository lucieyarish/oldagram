import { posts } from './data.js';

const postList = document.getElementById('post-list');

let avatar;
let name;
let location;
let post;
let likes;
let username;
let comment;

for (let i = 0; i < posts.length; i++) {
  avatar = posts[i].avatar;
  name = posts[i].name;
  location = posts[i].location;
  post = posts[i].post;
  likes = posts[i].likes;
  username = posts[i].username;
  comment = posts[i].comment;

  const html = `
  <section class="post-container indent-bottom-15">
  <div class="post-header">
      <img class="profile-photo" src="${avatar}" alt="Instagram profile picture of Vincent van Gogh">
      <div class="post-author-info">
          <p class="text-bold">${name}</p>
          <p class="text-regular">${location}</p>
      </div>
  </div>
  <img class="post" src="${post}" alt="Self-portrait painting of Vincent van Gogh">
  <div class="post-action-icons">
      <button class="action-icon-btn" onClick="increaseLikes(likes)"><img class="action-icon" src="images/icon-heart.png" alt="Heart outline icon"></button>
      <button class="action-icon-btn"><img class="action-icon" src="images/icon-comment.png" alt="Speech bubble outline icon"></button>
      <button class="action-icon-btn"><img class="action-icon" src="images/icon-dm.png" alt="Direct message outline icon"></button>
  </div>
  <div class="post-info">
      <p class="text-bold indent-bottom-8">${likes}</p>
      <p class="text-regular"><span class="text-bold indent-right">${username}</span>${comment}</p>
  </div>
  </section>
`;

  postList.innerHTML += html;
}
