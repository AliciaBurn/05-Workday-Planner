$(document).ready(function(){
    
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
    console.log(currentHour)
    // loop over time blocks
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
        console.log(currentHour)
      }
    });
// };
