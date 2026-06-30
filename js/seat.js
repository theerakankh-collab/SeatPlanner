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

  president.appendChild(createSeat(2));
  president.appendChild(createSeat(1));
  president.appendChild(createSeat(3));

  seatMap.appendChild(president);

  // แถวที่ 2
  const row2 = document.createElement("div");
  row2.className = "row";

  [8,6,4,5,7,9].forEach(n=>{
    row2.appendChild(createSeat(n));
  });

  seatMap.appendChild(row2);

  // แถวที่ 3
  const row3 = document.createElement("div");
  row3.className = "row";

  [14,12,10,11,13,15].forEach(n=>{
    row3.appendChild(createSeat(n));
  });

  seatMap.appendChild(row3);

  // ===== ผู้ร่วมพิธี =====

  let number = 16;

  for(let r=0;r<4;r++){

      const row=document.createElement("div");
      row.className="row";

      for(let c=0;c<10;c++){

          row.appendChild(createSeat(number));
          number++;

      }

      seatMap.appendChild(row);

  }

}

buildSeatMap();
