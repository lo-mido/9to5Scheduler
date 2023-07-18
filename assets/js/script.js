$(function () {
  var currentDayEl = $("#currentDay");
  var currentDayTime = dayjs().format("MMMM DD, YYYY");
  var saveBtn = $(".saveButton");
  var timeBlock = $(".time-block")

  currentDayEl.text(currentDayTime);

  var currentTime = dayjs().hour()

  timeBlock.each(function() {
    var id = $(this).attr("id").slice(5)
    if(id < currentTime) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description past")
    } else if (id == currentTime) { 
      $(this).children(".description").attr("class", "col-8 col-md-10 description present")
    } else if (id > currentTime) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description future")
    }
  })



});
