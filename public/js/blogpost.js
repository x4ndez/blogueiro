const submit = document.querySelector("#submit");
const content = document.querySelector("#content");
const timestamp = document.querySelectorAll(".timestamp");

for (let item of timestamp) {

    let commentTimestampRaw = item.getAttribute("data-raw");
    // console.log(commentTimestampRaw);
    let commentTimestampHour = dayjs(commentTimestampRaw).format("hh:mm a");
    let commentTimestampDate = dayjs(commentTimestampRaw).format("DD/MM/YY");
    console.log(commentTimestampHour, commentTimestampDate);
    item.innerText = `${commentTimestampHour} at ${commentTimestampDate}`;

}

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