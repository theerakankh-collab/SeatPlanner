const seatMap = document.getElementById("seatMap");

function createSeat(number, label = number) {
  const seat = document.createElement("div");
  seat.className = "seat";
  seat.id = "seat-" + number;
  seat.innerHTML = `
    <div class="seat-number">${label}</div>
    <div class="seat-name"></div>
  `;
  return seat;
}

function buildSeatMap() {
  seatMap.innerHTML = "";

  // ===== คณะประธาน =====

  const president = document.createElement("div");
  president.className = "president";

  president.appendChild(createSeat(3,"A3"));
  president.appendChild(createSeat(1,"A1"));
  president.appendChild(createSeat(2,"A2"));

  seatMap.appendChild(president);

  // แถวที่ 2
  const row2 = document.createElement("div");
  row2.className = "row";

  [9,7,5,4,6,8].forEach(n=>{
    row2.appendChild(createSeat(n,"A"+n));
});
  seatMap.appendChild(row2);

  // แถวที่ 3
  const row3 = document.createElement("div");
  row3.className = "row";

  [15,13,11,10,12,14].forEach(n=>{
    row3.appendChild(createSeat(n,"A"+n));
});
  
  seatMap.appendChild(row3);
// ===== เส้นคั่นระหว่างประธานกับผู้ร่วมพิธี =====
const divider1 = document.createElement("hr");
divider1.className = "section-divider";
seatMap.appendChild(divider1);
  
  // ===== ผู้ร่วมพิธี =====
let number = 1;

for (let r = 0; r < 4; r++) {

    const row = document.createElement("div");
    row.className = "row";

    // เริ่มเลขของแต่ละแถว
    let start = number + 9;

    for (let c = 0; c < 10; c++) {

    row.appendChild(createSeat(start));
    start--;

    // เส้นแบ่งแนวตั้งตรงกลาง
    if (c === 4) {
        const divider = document.createElement("div");
        divider.className = "vertical-divider";
        row.appendChild(divider);
    }

}

    number += 10;

    seatMap.appendChild(row);
}
}

buildSeatMap();
