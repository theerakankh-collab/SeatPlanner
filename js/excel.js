// excel.js

document
.getElementById("excelFile")
.addEventListener("change", importExcel);

function importExcel(e){

    const file = e.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(evt){

        const data = new Uint8Array(evt.target.result);

        const workbook = XLSX.read(data,{
            type:"array"
        });

        const sheet =
            workbook.Sheets[
                workbook.SheetNames[0]
            ];

        const rows =
            XLSX.utils.sheet_to_json(sheet);

        fillSeat(rows);

    };

    reader.readAsArrayBuffer(file);

}

function fillSeat(rows){

    // ล้างข้อมูลเดิม
    document.querySelectorAll(".seat").forEach(seat=>{

        seat.querySelector(".seat-name").innerHTML="";

        seat.style.background="white";

        seat.removeAttribute("title");

    });

    let errorSeat=[];

    rows.forEach(person=>{

        if(!person.seat) return;

        const seatCode =
            String(person.seat).trim().toUpperCase();

        const seat =
            document.getElementById(
                "seat-"+seatCode
            );

        if(!seat){

            errorSeat.push(seatCode);

            return;

        }

        seat.querySelector(".seat-name").innerHTML =
            person.name ?? "";

        seat.style.background="#C8E6C9";

        seat.title =
            (person.rank ?? "")+" "
            +(person.name ?? "")
            +"\n"
            +(person.unit ?? "");

    });

    if(errorSeat.length){

        alert(
        "ไม่พบที่นั่ง :\n"+
        errorSeat.join(", ")
        );

    }else{

        alert("นำเข้าข้อมูลสำเร็จ");

    }

}// excel.js

document
.getElementById("excelFile")
.addEventListener("change", importExcel);

function importExcel(e){

    const file = e.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(evt){

        const data = new Uint8Array(evt.target.result);

        const workbook = XLSX.read(data,{
            type:"array"
        });

        const sheet =
            workbook.Sheets[
                workbook.SheetNames[0]
            ];

        const rows =
            XLSX.utils.sheet_to_json(sheet);

        fillSeat(rows);

    };

    reader.readAsArrayBuffer(file);

}

function fillSeat(rows){

    // ล้างข้อมูลเดิม
    document.querySelectorAll(".seat").forEach(seat=>{

        seat.querySelector(".seat-name").innerHTML="";

        seat.style.background="white";

        seat.removeAttribute("title");

    });

    let errorSeat=[];

    rows.forEach(person=>{

        if(!person.seat) return;

        const seatCode =
            String(person.seat).trim().toUpperCase();

        const seat =
            document.getElementById(
                "seat-"+seatCode
            );

        if(!seat){

            errorSeat.push(seatCode);

            return;

        }

        seat.querySelector(".seat-name").innerHTML =
            person.name ?? "";

        seat.style.background="#C8E6C9";

        seat.title =
            (person.rank ?? "")+" "
            +(person.name ?? "")
            +"\n"
            +(person.unit ?? "");

    });

    if(errorSeat.length){

        alert(
        "ไม่พบที่นั่ง :\n"+
        errorSeat.join(", ")
        );

    }else{
        saveSeats();
        alert("นำเข้าข้อมูลสำเร็จ");

    }

}
