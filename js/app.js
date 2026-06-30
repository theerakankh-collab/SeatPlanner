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
