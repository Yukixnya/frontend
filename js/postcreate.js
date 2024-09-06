document.addEventListener("DOMContentLoaded", function() {
    const postForm = document.getElementById("postForm");
    postForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const postTitle = document.getElementById("postTitle").value;
        const postDesc = document.getElementById("postDesc").value;
        const imageFile = document.getElementById("imageFile").files[0];

        const formData = new FormData();
        const post = {
            postTitle: postTitle,
            postDesc: postDesc
        };
        formData.append('post', new Blob([JSON.stringify(post)], { type: 'application/json' }));
        formData.append('imageFile', imageFile);

        fetch("http://localhost:8080/alumni/createPost", {
            method: "POST",
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to create post');
            }
        })
        .then(data => {
            document.getElementById("message").innerHTML = "<p style='color:green;'>Post created successfully!</p>";
            postForm.reset();
        })
        .catch(error => {
            document.getElementById("message").innerHTML = `<p style='color:red;'>${error.message}</p>`;
        });
    });
});