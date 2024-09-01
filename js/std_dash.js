const posts = [
    {
      id: 1,
      author: "Yuki",
      content: "Just finished my latest novel! 🎉 I’m beyond excited to share it with all of you. It’s a thrilling fantasy adventure that follows a young hero on an epic quest to save their world from impending doom. Along the way, they’ll encounter mythical creatures, unravel ancient secrets, and face challenges that test their courage and determination.I’ve poured my heart into this story, and I can’t wait for you to dive into the magical realms and intricate plot twists. Stay tuned for updates on the release date, sneak peeks, and exclusive content. Your support means everything to me, and I’m thrilled to embark on this new journey with you all.Keep an eye out for more details, and thank you for being part of this adventure! 🌟📚✨",
      images: [
        "https://th.bing.com/th/id/OIP.VHlGPWhBYD-Dszw3x31U4gHaFj?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.Sau01Xy7UjYNFG1eJ6fn0AHaEx?rs=1&pid=ImgDetMain"
      ],
      likes: 10,
      follows: 5,
      comments: []
    },
    {
      id: 2,
      author: "Myo",
      content: "I’m thrilled to announce that my latest robo-tech project has been selected! 🚀 It’s an innovative AI assistant designed to delve into and understand the complexities of human mood and emotion. This cutting-edge technology not only enhances interactions by adapting to emotional cues but also offers valuable insights into the subtleties of human feelings.I’m incredibly excited for you all to experience it and hope it sparks inspiration for your own innovations. Whether you’re working on tech, psychology, or anything in between, I believe there’s something in this project that can ignite new ideas and possibilities.Stay tuned for more updates as we roll out features and share more about the development process. Thank you for your support and enthusiasm—here’s to pushing the boundaries of technology together! 🤖💡✨",
      images: [
        "https://th.bing.com/th/id/OIP.ssNlo69fnDpQwEFD_kwn1gHaEw?rs=1&pid=ImgDetMain",
        "https://1.bp.blogspot.com/-rhFVoe1DJhI/XRtgswdwIJI/AAAAAAAAF7Q/OHH932ja-IU6a9w0OehGQdAZslOpUXifACLcBGAs/s1600/ai-emotions.jpg"
      ],
      likes: 20,
      follows: 10,
      comments: []
    },
    {
      id: 3,
      author: "Soe",
      content: "I’m excited to share that I’m currently working on a new project that I’m truly passionate about! 🎬✨ It’s a sci-fi movie that dives deep into the fascinating world of artificial intelligence and explores its profound implications on society. From the ethical dilemmas to the potential futures AI could shape, this film aims to spark thought-provoking conversations and offer a fresh perspective on technology’s role in our lives.I’m pouring my heart and soul into this project, and I can’t wait for you to join me on this cinematic journey. Stay tuned for updates, behind-the-scenes glimpses, and more as we bring this vision to life. Thank you for your support and enthusiasm—here’s to a thrilling adventure into the future of AI! 🤖🎥🚀",
      images: [
        "https://i.pinimg.com/originals/31/e4/50/31e45088577d45711b528cb037402338.jpg",
        "https://th.bing.com/th/id/R.e9e99fd09763b72d664b9a181a7b9030?rik=61UscGhb4Lhg%2bQ&riu=http%3a%2f%2fwww.cityheadshots.com%2fuploads%2f5%2f1%2f2%2f1%2f5121840%2fistock-1150200782_orig.jpg&ehk=1S1eNfFrYQZ4ZW%2bvLh3SNy2mE8SlaKCC%2bp5W5FB5P8U%3d&risl=&pid=ImgRaw&r=0"
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
        <img src="images/likes.png" class="like-icon"><button class="like-button">${post.likes}</button>
        <img src="images/followers.png" class="follow-icon"><button class="follow-button">${post.follows}</button>
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
  
  const likeIcons = document.querySelectorAll('.like-icon');
  const likeButtons = document.querySelectorAll(".like-button");
  const followButtons = document.querySelectorAll(".follow-button");
  const followIcons = document.querySelectorAll('.follow-icon'); // added dot (.) before follow-icon
  const submitCommentButtons = document.querySelectorAll(".submit-comment-button");
  const commentIcons = document.querySelectorAll('.comment-icon');
  
  likeIcons.forEach((icon, index) => {
    let likes = parseInt(icon.nextElementSibling.textContent.match(/\d+/)[0]);
    let isLiked = false;
    icon.addEventListener('click', () => {
      if (!isLiked) {
        likes += 1;
        isLiked = true;
      } else {
        likes -= 1;
        isLiked = false;
      }
      icon.nextElementSibling.textContent = `${likes}`;
      console.log("Like icon clicked!");
    });
  });
  
  likeButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
  
  followIcons.forEach((icon, index) => {
    let follows = parseInt(icon.nextElementSibling.textContent.match(/\d+/)[0]);
    let isFollowed = false;
    icon.addEventListener("click", () => {
      if (!isFollowed) {
        follows += 1;
        isFollowed = true;
      } else {
        follows -= 1;
        isFollowed = false;
      }
      icon.nextElementSibling.textContent = `${follows}`;
      console.log("Follow icon clicked!");
    });
  });
  
  followButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
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
            <span class="comment-author">${post.author}</span>
            <span class="comment-text">${commentText}</span>
          </li>
        `;
        commentsList.insertAdjacentHTML("beforeend", commentHTML);
        commentInput.value = "";
        const commentButton = button.parentNode.parentNode.querySelector(".comment-button");
        commentButton.textContent = `${post.comments.length}`;
      }
    });
  });
  ``