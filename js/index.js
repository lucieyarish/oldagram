import { posts } from './data.js';

const postList = document.getElementById('post-list');

let id;
let avatar;
let name;
let location;
let post;
let likes;
let username;
let comment;

for (let i = 0; i < posts.length; i++) {
  id = posts[i].id;
  avatar = posts[i].avatar;
  name = posts[i].name;
  location = posts[i].location;
  post = posts[i].post;
  likes = posts[i].likes;
  username = posts[i].username;
  comment = posts[i].comment;

  const altValue = assignImgAltValues(id);

  const html = `
  <section class="post-container indent-bottom-15 key-group" id="${id}">
    <div class="post-header">
        <img class="profile-photo" src="${avatar}" alt="${altValue.profilePhotoAlt}">
        <div class="post-author-info">
            <p class="text-bold">${name}</p>
            <p class="text-regular">${location}</p>
        </div>
    </div>
    <img class="post" src="${post}" alt="${altValue.postAlt}">
    <div class="post-action-icons">
        <button class="action-icon-btn" data-id="${id}"><img class="action-icon" src="images/icon-heart.png" alt="Heart outline icon"></button>
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

function assignImgAltValues(id) {
  let obj = {
    profilePhotoAlt: '',
    postAlt: '',
  };

  switch (id) {
    case 1:
      obj.profilePhotoAlt = 'Profile picture of Vincent van Gogh';
      obj.postAlt = 'Impressionist portrait painting of Vincent van Gogh';
      break;
    case 2:
      obj.profilePhotoAlt = 'Profile picture of Gustave Courbet';
      obj.postAlt =
        'Portrait painting of Gustave Courbet with his hands on his head';
      break;
    case 3:
      obj.profilePhotoAlt = 'Profile picture of Joseph Ducreux';
      obj.postAlt =
        'Portrait painting of smiling Joseph Ducreux with his finger pointed at the painter';
      break;
    default:
      obj.profilePhotoAlt = 'Profile picture';
      obj.postAlt = 'Portrait painting';
  }

  return obj;
}

document.addEventListener('click', function (event) {
  if (event.target.closest('[data-id]')) {
    //I was able to retrieve the ID of the button clicked,
    //but couldn't figure out how to increase the amount of likes
    let id = event.target.closest('[data-id]').dataset.id;
  }
});
