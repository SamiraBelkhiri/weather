

/*
$(document).ready(function () {

$('#submitWeather').click(function () {


    var city =$(city).val();

    if(city !=''){

        $.ajax({
           url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + '&APPID=fb5f4c0b40f1db9cb2d39540974f5684',
           type:"GET",
        dataType:"jsonp",
            success: function (data) {
               console.log(data);

            }
        });

    }else {
        $("#error").html('field cannot be empty');
    }

});

});

*/


//trying another way cause the ajax is not working...



let cityName ='';
let url;

function getData( name ) {
    var key = 'fb5f4c0b40f1db9cb2d39540974f5684';
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName+ '&units=metric&appid=' + key)
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            console.log(data);
        })
        .catch(function() {
            // catch any errors
        });
}

document.getElementById("callApi").addEventListener("click",function () {
    cityName = document.getElementById("cityName").value;
    getData(cityName);
}) ;







//window.onload = function() {
    //weatherBalloon("antwerp" );
//}
