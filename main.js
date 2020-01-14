

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
            console.log(data['list']);

            let averageTemp = array => Math.floor((array.reduce((a,b) => a + b, 0) / array.length)) + '&#176';

            let allTemp = [];
            let beschrijving = [];

            for (let i = 0; i < 40; i++) {
          allTemp.push(data.list[i].main.temp);
          beschrijving.push(data.list[i].weather[0].description);

            }
            console.log(beschrijving);
            console.log(allTemp);

//elke dag bereken per 8 getallen in de array
           let day1= allTemp.slice(0,8);
           let day2= allTemp.slice(8,16);
           let day3= allTemp.slice(16,24);
           let day4= allTemp.slice(24,32);
           let day5= allTemp.slice(32,40);


           let descrip1 = beschrijving.slice(0,8);
           let descrip2 = beschrijving.slice(8,16);
           let descrip3 = beschrijving.slice(16,24);
           let descrip4 = beschrijving.slice(24,32);
           let descrip5 = beschrijving.slice(32,40);




            function geefWeer(beschrijvingWeer){

                var cnts = beschrijvingWeer.reduce( function (obj, val) {
                    obj[val] = (obj[val] || 0) + 1;
                    return obj;
                }, {} );
                //Use the keys of the object to get all the values of the array
                //and sort those keys by their counts
                var sorted = Object.keys(cnts).sort( function(a,b) {
                    return cnts[b] - cnts[a];
                });

                return sorted[0];
            }

            let beschrijvingWeer1 = geefWeer(descrip1);
            let beschrijvingWeer2 = geefWeer(descrip2);
            let beschrijvingWeer3 = geefWeer(descrip3);
            let beschrijvingWeer4 = geefWeer(descrip4);
            let beschrijvingWeer5 = geefWeer(descrip5);


            document.getElementById("dayOne").innerHTML = averageTemp(day1);
            document.getElementById("dayTwo").innerHTML = averageTemp(day2);
            document.getElementById("dayThree").innerHTML = averageTemp(day3);
            document.getElementById("dayFour").innerHTML = averageTemp(day4);
            document.getElementById("dayFive").innerHTML = averageTemp(day5);


            document.getElementById("description1").innerHTML = beschrijvingWeer1;
            document.getElementById("description2").innerHTML = beschrijvingWeer2;
            document.getElementById("description3").innerHTML = beschrijvingWeer3;
            document.getElementById("description4").innerHTML = beschrijvingWeer4;
            document.getElementById("description5").innerHTML = beschrijvingWeer5;





            console.log(averageTemp(day1));





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
