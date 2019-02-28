

$(document).ready(function(){
  $(".opening_buttons").click(function(){
    $(".row").hide();
  });
});

$(document).ready(function(){
  $("#close").click(function(){
    $(".row").show();
  });
});


// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
    //   document.getElementById('seasons').style.opacity = '1';
    // document.getElementById('birthdays').style.opacity = '0.1';

}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");

  var captionText = document.getElementById("caption");
  
const fade = (() => { star.style.opacity = 0; });

const unfade = (() => { star.style.opacity = 1; });

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



//charts start

google.charts.load('current', {'packages':['corechart']});
      
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
      
      var data1 = google.visualization.arrayToDataTable([
          ['Seasons', 'Count'],
          ['Summer',6,],
          ['Autumn',1],
          ['Winter',  1],
          ['Spring', 2],
          
        ]);

        var options1 = {
          title: 'Favourite Seasons',
          width:800,
          height:500,
                    slices: {0: {color: '#F8EF3D'}, 1:{color: '#F59E28'}, 2:{color: '#3084A5'}, 3: {color: '#82D518'}, 4:{color: 'grey'}},
                     is3D: true
              // backgroundColor: 'transparent'
        };
       
       var chart = new google.visualization.PieChart(document.getElementById('seasons'));
        
        chart.draw(data1, options1);


    
        var data2 = google.visualization.arrayToDataTable([
          ['date', 'month'],
        [ 1,  12],
          [ 1,   9],
          [ 2,   12],
          [ 9,   25],
          [ 2,    2],
          [ 11,    5],
          [ 4,    9],
          [ 6,    25],
          [ 12,    7],
          [ 11,    22]
        ]);

        var options2 = {
           title: 'BDAY!',
          hAxis: {title:'month', minValue: 0, maxValue: 12},
          vAxis: {title:'date', minValue: 0, maxValue: 31},

          width:800,
          height:500,
  
        };

        
         var chartLinear = new google.visualization.ScatterChart(document.getElementById('birthdays'));
        
        chartLinear.draw(data2, options2);




$.ajax({
  url:"js/data.json",
  type: "GET",
  dataType : "json",
  success : function (dataFromJSON){
    console.log(dataFromJSON);


        
       var data3 = google.visualization.arrayToDataTable([
        ["Student", "Height" ],
        [dataFromJSON[0].studentName,dataFromJSON[0].height],
         [dataFromJSON[1].studentName,dataFromJSON[1].height],
          [dataFromJSON[2].studentName,dataFromJSON[2].height],
           [dataFromJSON[3].studentName,dataFromJSON[3].height]
            [dataFromJSON[4].studentName,dataFromJSON[4].height],
         [dataFromJSON[5].studentName,dataFromJSON[5].height],
          [dataFromJSON[6].studentName,dataFromJSON[6].height],
           [dataFromJSON[7].studentName,dataFromJSON[7].height] 
         [dataFromJSON[8].studentName,dataFromJSON[8].height],
          [dataFromJSON[9].studentName,dataFromJSON[9].height],
          

       ]);

      var view = new google.visualization.DataView(data3);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       1]);

      var options3 = {
        title: "Height of class",
        width: 800,
        height: 500,
        bar: {groupWidth: "95%"},
    
        legend: { position: "none" },
      };
      
      var chart = new google.visualization.BarChart(document.getElementById("barchart_height"));
      
      chart.draw(data3, options3);

        }
      });
  



var options = {
  hAxis: {
    titleTextStyle: {color: '#607d8b'}, 
    gridlines: { count:0}, 
    textStyle: { color: '#b0bec5', fontName: 'Roboto', fontSize: '12', bold: true},
     backgroundColor: 'white'
  },
  vAxis: {
    minValue: 0, 
    gridlines: {color:'#37474f', count:4}, 
    baselineColor: 'transparent'
  },
  legend: {position: 'top', alignment: 'center', textStyle: {color:'#607d8b', fontName: 'Roboto', fontSize: '12'} },
  colors: ["#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39"],
  areaOpacity: 0.24,
  lineWidth: 1,
  backgroundColor: 'transparent',
  chartArea: {
    backgroundColor: "white",
    width: '100%',
    height: '80%'
  },
      height:200, // example height, to make the demo charts equal size
      width:400,
      pieSliceBorderColor: '#263238',
      pieSliceTextStyle:  {color:'#607d8b' },
      pieHole: 0.9,
      bar: {groupWidth: "40" },
      colorAxis: {colors: ["#3f51b5","#2196f3","#03a9f4","#00bcd4"] },
      backgroundColor: 'white',
      datalessRegionColor: '#37474f',
      displayMode: 'regions',
         
    };

var studVisit= [
{

"country" : "Japan",
"visits"  : 3

},

{

"country" : "South Africa",
"visits"  : 3

},

{

"country" : "Brazil",
"visits"  : 1

},

{

"country" : "France",
"visits"  : 3

},

{

"country" : "China",
"visits"  : 3

},

{

"country" : "Romania",
"visits"  : 1

},


{

"country" : "Netherlands",
"visits"  : 3

},

{

"country" : "Poland",
"visits"  : 1

},

{

"country" : "Italy",
"visits"  : 3

},


{

"country" : "South korea",
"visits"  : 1

},

{

"country" : "Sweden",
"visits"  : 1

},

{

"country" : "Norway",
"visits"  : 3

},

 {

 "country" : "Denmark",
 "visits"  : 3

 },

{

"country" : "Hungary",
"visits"  : 1

},


{

"country" : "Greece",
"visits"  : 1

},

{

"country" : "Spain",
"visits"  : 2

},

 {

 "country" : "Italy",
 "visits"  : 2

 },

{

"country" : "England",
"visits"  : 5

},

{

"country" : "Vietnam",
"visits"  : 1

},

{

"country" : "Taiwan",
"visits"  : 1

},

{

"country" : "Malaysia",
"visits"  : 1

},

{

"country" : "Thailand",
"visits"  : 1

},


 {

 "country" : "Switzerland",
 "visits"  : 1

},
{

"country" : "Czech Republic",
"visits"  : 1

},

{

"country" : "Monaco",
"visits"  : 1

},

{

"country" : "Slovenia",
"visits"  : 1

},


{

"country" : "United Arab Emirates",
"visits"  : 2

},

{

"country" : "Peru",
"visits"  : 2

},

{

"country" : "Australia",
"visits"  : 7

},

{

"country" : "Slovenia",
"visits"  : 1

},

{

"country" : "Turkey",
"visits"  : 1

},
{

"country" : "Austria",
"visits"  : 1

},
{

"country" : "New Zealand",
"visits"  : 10

}

]

//31 countries visited



   google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyDbtmUbSFhQM5Y7gwLeP7GPtglT5l4yVYo'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'vists'],
          [studVisit[0].country, studVisit[0].visits],
           [studVisit[1].country, studVisit[1].visits],
          [studVisit[2].country, studVisit[2].visits],
           [studVisit[3].country, studVisit[3].visits],
              [studVisit[4].country, studVisit[4].visits],
           [studVisit[5].country, studVisit[5].visits],
          [studVisit[6].country, studVisit[6].visits],
           [studVisit[7].country, studVisit[7].visits],
              [studVisit[8].country, studVisit[8].visits],
           [studVisit[9].country, studVisit[9].visits],
          [studVisit[10].country, studVisit[10].visits],
           [studVisit[11].country, studVisit[11].visits],
              [studVisit[12].country, studVisit[12].visits],
           [studVisit[13].country, studVisit[13].visits],
          [studVisit[14].country, studVisit[14].visits],
           [studVisit[15].country, studVisit[15].visits],
              [studVisit[16].country, studVisit[16].visits],
           [studVisit[17].country, studVisit[17].visits],
          [studVisit[18].country, studVisit[18].visits],
           [studVisit[19].country, studVisit[19].visits],
              [studVisit[20].country, studVisit[20].visits],
           [studVisit[21].country, studVisit[21].visits],
          [studVisit[22].country, studVisit[22].visits],
           [studVisit[23].country, studVisit[23].visits],
              [studVisit[14].country, studVisit[24].visits],
           [studVisit[25].country, studVisit[25].visits],
          [studVisit[26].country, studVisit[26].visits],
           [studVisit[27].country, studVisit[27].visits],
              [studVisit[28].country, studVisit[28].visits],
           [studVisit[29].country, studVisit[29].visits],
          [studVisit[30].country, studVisit[29].visits],
           [studVisit[31].country, studVisit[31].visits],
            [studVisit[32].country, studVisit[32].visits]

         
         
        ]);

        var options = {  
           title: "Countries Visited",
          width: 800,
          height: 500,
          backgroundColor: 'red',
          backgroundColor: {
            fill: 'lightblue'
          }
        };

        var chart = new google.visualization.GeoChart(document.getElementById('geo-regions'));

        chart.draw(data, options);
      }
}