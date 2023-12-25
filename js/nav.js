      function showheader(obj){
              	
                     if(obj.classList.contains("fa-close")){
              		
              		obj.classList.remove("fa-close");
              		obj.classList.add("fa-bars");
					document.getElementsByClassName("container")[0].style.overflowY="scroll";
              		
              	}
              	else{
              				obj.classList.remove("fa-bars");
              		obj.classList.add("fa-close");	
              		document.getElementsByClassName("container")[0].style.overflowY="hidden";
              	}
            
              	document.getElementsByClassName("topnavcontainer")[0].classList.toggle("responsivenavbg");
              	document.getElementsByClassName("navbar")[0].classList.toggle("resnavitem");
              	Array.from(document.getElementsByClassName("navitem")).forEach(obj=>{
              		if(obj.classList.contains("main")){
              			
              			obj.classList.toggle("resmain")
              		}else{
              			
              		obj.classList.toggle("resnavitem");	
              		}
              		
              	});
              		
              
              		
              	
              		
              	
              	
              	
              
              	document.getElementsByClassName("topnavborder")[0].classList.toggle("responsivenavbarborder");
              
              }