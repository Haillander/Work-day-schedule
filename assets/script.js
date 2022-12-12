
var today=moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

var hour=moment().format("H");
console.log(hour);

$( ".time-block" ).each(function() {
    console.log(this.dataset.hour);
    
    if(this.dataset.hour===hour){
        $( this ).addClass( "present" );
    }
    else if(parseInt(this.dataset.hour)>parseInt(hour))
    {
        $( this ).addClass( "future" );
    }
    else{
        $( this ).addClass( "past" );
    }
    
  });

  var schedules=[
    {id:"9AM", text:""},
    {id:"10AM", text:""},
    {id:"11AM", text:""},
    {id:"12PM", text:""},
    {id:"1PM", text:""},
    {id:"2PM", text:""},
    {id:"3PM", text:""},
    {id:"4PM", text:""},
    {id:"5PM", text:""}];