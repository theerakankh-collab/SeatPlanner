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
