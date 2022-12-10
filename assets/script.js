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
