document.addEventListener("DOMContentLoaded",()=>{

    buildSeatMap();

    document
    .getElementById("importBtn")
    .onclick=()=>{

        document
        .getElementById("excelFile")
        .click();

    };

});
document
.getElementById("searchBtn")
.addEventListener("click",searchSeat);

function searchSeat(){

    const keyword =
    document
    .getElementById("searchBox")
    .value
    .trim()
    .toLowerCase();

    if(keyword=="") return;

    document
    .querySelectorAll(".seat")
    .forEach(seat=>{

        seat.style.outline="none";

    });

    let found=false;

    document
    .querySelectorAll(".seat")
    .forEach(seat=>{

        const text=
        seat.innerText.toLowerCase();

        if(text.includes(keyword)){

            seat.scrollIntoView({

                behavior:"smooth",

                block:"center"

            });

            seat.style.outline="5px solid red";

            found=true;

        }

    });

    if(!found){

        alert("ไม่พบรายชื่อ");

    }

}
let dragSeat = null;

function dragStart(e){

    dragSeat = e.currentTarget;

}

function dragOver(e){

    e.preventDefault();

}

function dropSeat(e){

    e.preventDefault();

    const target = e.currentTarget;

    if(dragSeat === target) return;

    swapSeat(dragSeat,target);

}
function swapSeat(a,b){

    const nameA =
    a.querySelector(".seat-name").innerHTML;

    const nameB =
    b.querySelector(".seat-name").innerHTML;

    a.querySelector(".seat-name").innerHTML = nameB;

    b.querySelector(".seat-name").innerHTML = nameA;

    const colorA = a.style.background;
    const colorB = b.style.background;

    a.style.background = colorB;
    b.style.background = colorA;

}
let firstSeat = null;

document.addEventListener("click", function (e) {

    const seat = e.target.closest(".seat");

    if (!seat) return;

    // ยังไม่ได้เลือกที่นั่งแรก
    if (firstSeat == null) {

        firstSeat = seat;
        seat.classList.add("selected");

        return;
    }

    // แตะที่เดิม ยกเลิก
    if (firstSeat === seat) {

        seat.classList.remove("selected");
        firstSeat = null;

        return;
    }

    swapSeat(firstSeat, seat);

    firstSeat.classList.remove("selected");
    firstSeat = null;

});
function swapSeat(a, b) {

    const nameA = a.querySelector(".seat-name").innerHTML;
    const nameB = b.querySelector(".seat-name").innerHTML;

    a.querySelector(".seat-name").innerHTML = nameB;
    b.querySelector(".seat-name").innerHTML = nameA;

    const bgA = a.style.background;
    const bgB = b.style.background;

    a.style.background = bgB;
    b.style.background = bgA;

}
function saveSeats() {

    const data = [];

    document.querySelectorAll(".seat").forEach(seat => {

        data.push({

            id: seat.id,

            number: seat.querySelector(".seat-number").innerHTML,

            name: seat.querySelector(".seat-name").innerHTML,

            color: seat.style.background

        });

    });

    localStorage.setItem(
        "SeatPlanner",
        JSON.stringify(data)
    );

}
function loadSeats() {

    const json =
        localStorage.getItem("SeatPlanner");

    if (!json) return;

    const data = JSON.parse(json);

    data.forEach(item => {

        const seat =
            document.getElementById(item.id);

        if (!seat) return;

        seat.querySelector(".seat-name").innerHTML =
            item.name;

        seat.style.background =
            item.color;

    });

}
