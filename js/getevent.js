function toggleclass() {


    $(".eventlist").toggleClass("eventlistdisplay");
    $(".select-details-holder").toggleClass("selectdetailsdisplay");
    $(".backupbtn").toggleClass("togglebtn");

}
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    document.getElementsByClassName("eventdetails tech")[0].innerHTML = "";
    var getnum = document.getElementsByClassName("selectobj")[0];
    var putdeatils = document.getElementsByClassName("eventdetails tech")[0];
    var eventlist = document.getElementsByClassName("eventlist")[0];
    var str = "";
    var str1 = "";
    if (this.readyState == 4 && this.status == 200) {
        var mydata = JSON.parse(this.responseText);
        str1 = str1 + "Click on the event for more details<br><br>";
        for (const key in mydata[eventtype]) {
            str = str + "<option onclick='getdeatils(this)' name='eventaname'  class='theevent'   value='" + key + "'>" + key + "</option> ";
            str1 = str1 + "<div class='item'>" + key + "</div>";
        }

        eventlist.innerHTML = str1;
        getnum.innerHTML = str;


    }
};
xhttp.open("GET", "https://Omprakash1101.github.io/PINNACLE_2K24/details1.json", true);
xhttp.send();

$(document).ready(function() {
    if (navigator.userAgent.indexOf("Firefox") > 0) {
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    }
	setTimeout(function() {
			
    items = document.getElementsByClassName("item");
    for (var i = 0; i < items.length; i++) {
	
        $(".previous").on('touch', function(event) {
            event.stopPropagation();
            event.stopImmediatePropagation();

            toggleclass()

        });

        items[i].addEventListener("touchstart", function(e) {
            event.stopPropagation();
            event.stopImmediatePropagation();
            document.getElementsByClassName("selectobj")[0].value = e.target.innerHTML;
            $(".eventlist").toggleClass("eventlistdisplay");
            $(".select-details-holder").toggleClass("selectdetailsdisplay");
            $(".backupbtn").toggleClass("togglebtn");
            $(".selectobj").trigger("change");

            //	
        });


        $(".previous").on('click', function(event) {
            event.stopPropagation();
            event.stopImmediatePropagation();


            toggleclass()
        });
        items[i].addEventListener("click", function(e) {
            event.stopPropagation();
            event.stopImmediatePropagation();

            document.getElementsByClassName("selectobj")[0].value = e.target.innerHTML;
            $(".eventlist").toggleClass("eventlistdisplay");
            $(".select-details-holder").toggleClass("selectdetailsdisplay");
            $(".backupbtn").toggleClass("togglebtn");

            $(".selectobj").trigger("change");

            //	
        });


    }

	}, 1000);


});


class events {
    constructor(eventtype, event, htmlholder, jsondata) {
        this.eventtype = eventtype;
        this.event = event;
        this.htmlholder = htmlholder;
        this.jsondata = jsondata;
        this.name = this.jsondata[this.eventtype][this.event]["name"];
    }
    addheading() {
        this.htmlholder.innerHTML = this.htmlholder.innerHTML + "<div  class='texttopic' value=" + this.name + ">" + this.name + "</div>";
    }
    adddesc() {

        var extracontentlength = this.jsondata[this.eventtype][this.event]["desc"].length;
        if (extracontentlength > 0) {
            var str = "<p class='cyberpunk inverse'>";

            for (i = 0; i < this.jsondata[this.eventtype][this.event]["desc"].length; i++) {
                str = str + this.jsondata[this.eventtype][this.event]["desc"][i];
            }
            str = str + "</p>";
            this.htmlholder.innerHTML = this.htmlholder.innerHTML + str;
       
        }

    }
    addextracontents() {
        var i, j;
      
        for (i = 0; i < this.jsondata[this.eventtype][this.event]["contents"].length; i++) {
            for (const key in this.jsondata[this.eventtype][this.event]["contents"][i]) {
                var extracontentlength = this.jsondata[this.eventtype][this.event]["contents"][i][key].length;
                if (extracontentlength > 0) {
                    if(i==0){
					var str = "<ul class='rulesnew'> <div style='font-size: 23px;font-weight: 700;'>" + key + "</div>";	
						
					}
					else{
						
						var str = "<ul class='rulesnew lastrules'> <div style='font-size: 23px;font-weight: 700;'>" + key + "</div>";
					}
                    
					
					
                    for (j = 0; j < extracontentlength; j++) {
    
                        str = str + "<li>" + this.jsondata[this.eventtype][this.event]["contents"][i][key][j] + "</li>";
                    }
                    str = str + "</ul>";
                    this.htmlholder.innerHTML = this.htmlholder.innerHTML + str;
                }
            }
        }
		        var extracontentlength = this.jsondata[this.eventtype][this.event]["desc"].length;
        if (extracontentlength > 0) {
    
            document.getElementsByClassName("rulesnew")[0].style.borderTop= 0;
        }
    }


}

$('.selectobj').change(function() {

    document.getElementsByClassName("eventdetails tech")[0].innerHTML = "";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        var eventget = document.getElementsByClassName("selectobj")[0].value;
        if (this.readyState == 4 && this.status == 200) {
            var mydata = JSON.parse(this.responseText);
            var putdeatils = document.getElementsByClassName("eventdetails tech")[0];
            let selectedevent = new events(type, eventget, putdeatils, mydata);
            selectedevent.addheading();
            selectedevent.adddesc();
            selectedevent.addextracontents();
          
        }
    };
    xhttp.open("GET", "https://Omprakash1101.github.io/PINNACLE_2K24/details1.json", true);
    xhttp.send();

});
