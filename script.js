$(document).ready(function(){

    getData();
    
    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".description").val();
        console.log(value);
        var time = $(this).parent().attr("id");
        console.log(time);

        localStorage.setItem(time, value);
        
    });
    $("#currentDay").text(moment().format("MMMM Do YYYY"));
});


    var currentHour = moment().format('HH');

    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
    if (blockHour < 9) {
        blockHour += 12
    }
      
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      };

     
    });

    function getData() {
      //each hour = local get item(KEY hour-9) // text to description box of hour 9
      var hour9 = localStorage.getItem("hour-9");
      $("#hour-9 .description").text(hour9);

      var hour10 = localStorage.getItem("hour-10");
      $("#hour-10 .description").text(hour10);

      var hour11 = localStorage.getItem("hour-11");
      $("#hour-11 .description").text(hour11);

      var hour12 = localStorage.getItem("hour-12");
      $("#hour-12 .description").text(hour12);

      var hour1 = localStorage.getItem("hour-1");
      $("#hour-1 .description").text(hour1);

      var hour2 = localStorage.getItem("hour-2");
      $("#hour-2 .description").text(hour2);

      var hour3 = localStorage.getItem("hour-3");
      $("#hour-3 .description").text(hour3);

      var hour4 = localStorage.getItem("hour-4");
      $("#hour-4 .description").text(hour4);

      var hour5 = localStorage.getItem("hour-5");
      $("#hour-5 .description").text(hour5);


  };

