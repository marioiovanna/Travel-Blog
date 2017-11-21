
// Local store for redirect to Main or show legend of travel
$("#local-storage").on("click", function () {
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("VisitHome", "true");
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
});

// If already been on this website on CLICK INTRO go to MAIN page
$('#introchoice').on('click', function () {

    var storage = localStorage.getItem('VisitHome');

    if (storage === 'true') {
        $('#introchoice').attr('href','main')
    }
});
