const submit = document.querySelector("#submit");
const title = document.querySelector("#title");
const content = document.querySelector("#content");
const deletePost = document.querySelector("#delete-post");

const postId = submit.getAttribute("data-id");

submit.addEventListener("click", async () => {

    const data = {

        id: postId,
        title: title.value,
        content: content.value,

    }

    await fetch("/dashboard/edit-blogpost/", {

        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),

    });

    window.location.href = "/dashboard";

});

deletePost.addEventListener("click", async () => {

    const deleteConfirm = confirm("Are you sure you want to delete this post?");

    if (deleteConfirm === true) {

        const data = {

            id: postId,

        }

        await fetch("/dashboard/edit-blogpost/", {

            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),

        });

        window.location.href = "/dashboard";

    }

});