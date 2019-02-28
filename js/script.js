

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
          ['Summer',6],
          ['Autumn',1],
          ['Winter',  1],
          ['Spring', 2],
          
        ]);

        var options1 = {
          title: 'Favourite Seasons',
          width:800,
          height:500,
              // backgroundColor: 'transparent'
        };
       
       var chart = new google.visualization.PieChart(document.getElementById('seasons'));
        
        chart.draw(data1, options1);


    
        var data2 = google.visualization.arrayToDataTable([
          ['month', 'date'],
          [ 12,  1],
          [ 9,   1],
          [ 12,   2],
          [ 25,   9],
          [ 12,    2],
          [ 25,    9],
          [ 2,    2],
          [ 5,    11],
          [ 9,    4],
          [ 25,    6],
          [ 7,    12],
     

        ]);

        var options2 = {
          hAxis: {minValue: 0, maxValue: 12},
          vAxis: {minValue: 0, maxValue: 30},
          width:800,
          height:500,
          trendlines: {
            0: {
              type: 'linear',
              showR2: true,
              visibleInLegend: true,
                  // backgroundColor: 'transparent'
            }
          }
        };

        var chartLinear = new google.visualization.ScatterChart(document.getElementById('birthdays'));
        
        chartLinear.draw(data2, options2);


        
      var data3 = google.visualization.arrayToDataTable([
        ["Height", "Density", { role: "style" } ],
        ["student one", 185.42, "#b87333"],
        ["student two", 177, "silver"],
        ["student three", 173, "gold"],
        ["student four", 170.18, "color: #e5e4e2"],
        ["student five", 161, "color: #e5e4e2"],
        ["student six", 168, "gold"],
        ["student sevene", 181, "color: #e5e4e2"],
        ["student eight", 171, "color: #e5e4e2"],
        ["student nine", 173, "color: #e5e4e2"],
        ["student ten", 153, "color: #e5e4e2"]

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
            // backgroundColor: 'transparent',
        legend: { position: "none" },
      };
      
      var chart = new google.visualization.BarChart(document.getElementById("barchart_height"));
      
      chart.draw(data3, options3);
  }

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
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700]
        ]);

        var options = {  
          width: 800,
          height: 500,
          backgroundColor: 'red',
          backgroundColor: {
            fill: 'blue'
          }
        };

        var chart = new google.visualization.GeoChart(document.getElementById('geo-regions'));

        chart.draw(data, options);
      }
