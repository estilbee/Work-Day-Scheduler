
var formatDate = moment().format("dddd, MMMM Do YYYY") //tells us what day, month, day and year it is
var saveBtn = $(".saveBtn")
var currentHour = moment().hours() //tells us what the current hour is

$("#currentDay").text(formatDate) //.text displays the current day (linked with an ID on body of HTML) 

$(saveBtn).on("click", function(){
    var textData = $(this).siblings(".description").val() //from vantage of saveBtn-check siblings-find description-return value
    var divKey = $(this).parent().attr("id") //this is referring to saveBtn- go to parent- grab attribute ID
    localStorage.setItem(divKey,textData) //save into local storage the description and ID with vars created above
})

$("#9 .description").val(localStorage.getItem("9")) //allowing any input to stay once the browser refreshes
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

$(".time-block").each(function(){ //this function allows the CSS to connect and change the time block colors depending on the hour
    var divTime = $(this).attr("id")
    if( divTime < currentHour){
        $()
        $(this).addClass("past")
    }
    if( divTime > currentHour){
        $(this).addClass("future")
    }
    if( divTime == currentHour){  //only two = here because they are different "typeof" data (string and number)
        $(this).addClass("present")
    }
})


