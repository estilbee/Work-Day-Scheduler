
var formatDate = moment().format("dddd, MMMM Do YYYY")
var saveBtn = $(".saveBtn")
var currentHour = moment().hours() //look into where Robby found this

$("#currentDay").text(formatDate)

$(saveBtn).on("click", function(){
    var textData = $(this).siblings(".description").val() //from vantage of saveBtn-check siblings-find description-return value
    var divKey = $(this).parent().attr("id") //this is referring to saveBtn
    localStorage.setItem(divKey,textData)
})

$("#9 .description").val(localStorage.getItem("9"))
// repeat for every number^^

$(".time-block").each(function(){
    var divTime = $(this).attr("id")
    if( divTime < currentHour){
        $()
        $(this).addClass("past")
    }
    if( divTime > currentHour){
        $(this).addClass("future")
    }
    if( divTime == currentHour){
        $(this).addClass("present")
    }
})


