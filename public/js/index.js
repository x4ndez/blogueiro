const timestamp = document.querySelectorAll(".timestamp");

for (let item of timestamp) {

    let commentTimestampRaw = item.getAttribute("data-raw");
    let commentTimestampHour = dayjs(commentTimestampRaw).format("hh:mm a");
    let commentTimestampDate = dayjs(commentTimestampRaw).format("DD/MM/YY");

    item.innerText = `Last updated at: ${commentTimestampHour} at ${commentTimestampDate}`;

}