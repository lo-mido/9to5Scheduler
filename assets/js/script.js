$(function () {
  var currentDayEl = $("#currentDay");
  var currentDayTime = dayjs().format("MMMM DD, YYYY, HH:mm:ss");
  var saveBtn = $(".saveBtn");
  var timeBlock = $(".time-block");
// updates the current day and time on the work Schedule Calendar//

  currentDayEl.text(currentDayTime);

  var currentTime = dayjs().hour();
//  The time block function will udate the schedule for the past, present and future time blocks connected to the CSS//
  timeBlock.each(function() {
    var id = $(this).attr("id").slice(5);
    if(id < currentTime) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description past");
    } else if (id == currentTime) { 
      $(this).children(".description").attr("class", "col-8 col-md-10 description present");
    } else if (id > currentTime) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description future");
    }
  });
// The function will handle the clicks and save the description on the time block when user clicks//
  saveBtn.on("click", function() {
    var hour = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();

    localStorage.setItem(hour, description);
  });
//  saves the textare to the localStorage//
  for(var i = 9; i <= 17; i++) {
    $(`#hour-${i} textarea`).val(localStorage.getItem(`hour-${i}`));
  };
});

