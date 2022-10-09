
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
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))
$("#18 .description").val(localStorage.getItem("18"))
$("#19 .description").val(localStorage.getItem("19"))
$("#20 .description").val(localStorage.getItem("20"))
$("#21 .description").val(localStorage.getItem("21"))

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


