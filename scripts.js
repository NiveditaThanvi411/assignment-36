const contacts = {
    niveditathanvi: "7972719979",
    shaileshthanvi: "9881745575",
    siddeshpurohit: "9881745574",
    praneelthanvi: "8788143040",
    kanishkabhange: "88887834487",
    shagunpurohit: "9356617272",
    karanthanvi: "9629706468",
    shrikantpurohit: "9960953995",
}

function search() {
    const searchInput = document.getElementById("search");
    const query = searchInput.value.toLowerCase();

    const mobile = contacts[query]

    const result = document.getElementById("result");

    if (mobile) {
        result.innerText = `Contact Number of ${query} is ${mobile}.`;
    }else{
        result.innerText = `Contact Number Not Found 🙏.`
    }
}

function  showCurrentTime(){
    const timeElement = document.getElementById('time');
    const currentTime = new Date();

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    timeElement.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(showCurrentTime, 1000);

function notify(){
    alert("Always Enter Name in lowerCase to get Appropriate Output");
}

setTimeout(notify, 1000);