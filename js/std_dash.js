
const posts = [
  {
    id: 1,
    author: "Yuki",
    content: "I'm doing well",
    images: [
      "images/wp10474992-anime-programming-wallpapers.png",
      "https://picsum.photos/200/301"
    ],
    likes: 10,
    follows: 5,
    comments: []
  },
  {
    id: 2,
    author: "Asuna",
    content: "Sword Art Online",
    images: [
      "https://picsum.photos/200/302",
      "https://picsum.photos/200/303"
    ],
    likes: 20,
    follows: 10,
    comments: []
  },
  {
    id: 3,
    author: "Xiao Yan",
    content: "Doupo Cangqiong",
    images: [
      "https://picsum.photos/200/305",
      "https://picsum.photos/200/305"
    ],
    likes: 30,
    follows: 15,
    comments: []
  }
];

const postList = document.getElementById("post-list");

posts.forEach((post) => {
  const postHTML = `
    <li class="post">
      <h3 class="post-author">${post.author}</h3>
      <div class="post-content">
        ${post.content}
        ${post.images.map((image) => `
          <img src="${image}" alt="${post.author}'s post image" class="post-image">
        `).join('')}
      </div>
      <button class="like-button">Like (${post.likes})</button>
      <button class="follow-button">Follow (${post.follows})</button>
      <img src="images/comments.png" class="comment-icon"><button class="comment-button">0</button>
      <div class="comment-box" style="display: none;">
        <input type="text" class="comment-input" placeholder="Write a comment...">
        <button class="submit-comment-button">Submit</button>
      </div>
      <div class="comments-container">
        <h4>Comments</h4>
        <ul class="comments-list">
        </ul>
      </div>
    </li>
  `;
  postList.insertAdjacentHTML("beforeend", postHTML);
});

const images = document.querySelectorAll('.post-image');

images.forEach((image) => {
  image.style.maxWidth = '100%';
  image.style.height = 'auto';
});

const likeButtons = document.querySelectorAll(".like-button");
const followButtons = document.querySelectorAll(".follow-button");
const submitCommentButtons = document.querySelectorAll(".submit-comment-button");
const commentIcons = document.querySelectorAll('.comment-icon');

likeButtons.forEach((button, index) => {
  let likes = parseInt(button.textContent.match(/\d+/)[0]);
  let isLiked = false;
  button.addEventListener("click", () => {
    if (!isLiked) {
      likes += 1;
      isLiked = true;
    } else {
      likes -= 1;
      isLiked = false;
    }
    button.textContent = `Like (${likes})`;
    console.log("Like button clicked!");
  });
});

followButtons.forEach((button, index) => {
  let follows = parseInt(button.textContent.match(/\d+/)[0]);
  let isFollowed = false;
  button.addEventListener("click", () => {
    if (!isFollowed) {
      follows += 1;
      isFollowed = true;
    } else {
      follows -= 1;
      isFollowed = false;
    }
    button.textContent = `Follow (${follows})`;
    console.log("Follow button clicked!");
  });
});

commentIcons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    const commentBox = icon.nextElementSibling.nextElementSibling;
    const commentsContainer = commentBox.nextElementSibling;
    if (commentBox.style.display === 'block') {
      commentBox.style.display = 'none';
      commentsContainer.style.display = 'none';
    } else {
      commentBox.style.display = 'block';
      commentsContainer.style.display = 'block';
    }
  });
});

submitCommentButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const commentInput = button.previousElementSibling;
    const commentText = commentInput.value.trim();
    if (commentText !== "") {
      const post = posts[index];
      post.comments.push(commentText);
      const commentsList = button.parentNode.parentNode.querySelector(".comments-list");
      const commentHTML = `
        <li class="comment">
          <span class="comment-user">${post.user}</span>
          <span class="comment-text">${commentText}</span>
        </li>
      `;
      commentsList.insertAdjacentHTML("beforeend", commentHTML);
      commentInput.value = "";
      const commentBox = button.parentNode;
      commentBox.style.display = 'none';
      const commentsContainer = commentBox.nextElementSibling;
      commentsContainer.style.display = 'block';
      const commentButton = commentButtons[index];
      const commentCount = post.comments.length;
      commentButton.textContent = commentCount;
    }
  });
});

posts.forEach((post, index) => {
  const commentButton = document.querySelectorAll('.comment-button')[index];
  commentButton.textContent = post.comments.length;
});

const commentButtons = document.querySelectorAll('.comment-button');
commentButtons.forEach((button, index) => {
  button.removeEventListener('click', () => {
    const commentBox = button.previousElementSibling;
    const commentsContainer = commentBox.nextElementSibling;
    if (commentBox.style.display === 'block') {
      commentBox.style.display = 'none';
      commentsContainer.style.display = 'none';
    } else {
      commentBox.style.display = 'block';
      commentsContainer.style.display = 'block';
    }
  });
});
``