   

// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
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
          title: 'My Daily Activities'
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
          chartArea: {width:'50%'},
          trendlines: {
            0: {
              type: 'linear',
              showR2: true,
              visibleInLegend: true
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
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      
      var chart = new google.visualization.BarChart(document.getElementById("barchart_height"));
      
      chart.draw(data3, options3);
  }



//       google.charts.load('current', {'packages':['corechart','']});
      
//       google.charts.setOnLoadCallback(drawChart);

//       function drawChart() {


//       var data1 = google.visualization.arrayToDataTable([
//           ['Seasons'],
//           ['Summer',6],
//           ['Autumn',1],
//           ['Winter',  1],
//           ['Spring', 2],
          
//         ]);
//         var options1 = {
//           title: 'My Daily Activities'
//         };

//         var data2 = google.visualization.arrayToDataTable([
//           ['month', 'date'],
//           [ 12,  1],
//           [ 9,   1],
//           [ 12,   2],
//           [ 25,   9],
//           [ 12,    2],
//           [ 25,    9],
//           [ 2,    2],
//           [ 5,    11],
//           [ 9,    4],
//           [ 25,    6],
//           [ 7,    12],
//           [ 22,    11],

//         ]);

//           var options2 = {
//           hAxis: {minValue: 0, maxValue: 12},
//           vAxis: {minValue: 0, maxValue: 30},
//           chartArea: {width:'50%'},
//           trendlines: {
//             0: {
//               type: 'linear',
//               showR2: true,
//               visibleInLegend: true
//             }
//           }
//         };
      
//       var data3 = google.visualization.arrayToDataTable([
//         ["Height", "Density", { role: "style" } ],
//         ["student one", 185.42, "#b87333"],
//         ["student two", 177, "silver"],
//         ["student three", 173, "gold"],
//         ["student four", 170.18, "color: #e5e4e2"],
//         ["student five", 161, "color: #e5e4e2"],
//         ["student six", 168, "gold"],
//         ["student sevene", 181, "color: #e5e4e2"],
//         ["student eight", 171, "color: #e5e4e2"],
//         ["student nine", 173, "color: #e5e4e2"],
//         ["student ten", 153, "color: #e5e4e2"]

//       ]);
      
//       var options3 = {
//         title: "Height of class",
//         width: 600,
//         height: 400,
//         bar: {groupWidth: "95%"},
//         legend: { position: "none" },
//       };

      
//       var chart = new google.visualization.PieChart(document.getElementById('seasons'));
//        chart.draw(data1, options1);

//         var chartLinear = new google.visualization.ScatterChart(document.getElementById('birthdays'));
        
//         chartLinear.draw(data2, options2);


//       var chart = new google.visualization.BarChart(document.getElementById("barchart_height"));
      
//       chart.draw(view, options3);




// }




