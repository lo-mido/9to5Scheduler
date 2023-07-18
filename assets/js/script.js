$(function () {
  var currentDayEl = $("#currentDay");
  var currentDayTime = dayjs().format("MMMM DD, YYYY, HH:mm:ss");
  var saveBtn = $(".saveBtn");
  var timeBlock = $(".time-block");

  currentDayEl.text(currentDayTime);

  var currentTime = dayjs().hour();

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

  saveBtn.on("click", function() {
    var hour = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();

    localStorage.setItem(hour, description);
  });

  for(var i = 9; i <= 17; i++) {
    $(`#hour-${i} textarea`).val(localStorage.getItem(`hour-${i}`));
  };
});

