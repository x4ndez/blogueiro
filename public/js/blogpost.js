const submit = document.querySelector("#submit");
const content = document.querySelector("#content");

const postId = submit.getAttribute("data-id");
const commentUser = submit.getAttribute("data-user");

submit.addEventListener("click", async () => {

    const data = {

        id: postId,
        username: commentUser,
        content: content.value,

    }

    await fetch("/blogpost", {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),

    });

    window.location.href = `/blogpost/${postId}`;

});