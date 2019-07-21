
					// Calling out my various elements
					const buttons1 = $('#buttons1');
					const buttons2 = $('#buttons2');
					
					// Looping through to get the first and second sets of buttons

					var buttonNum = 71;
					for( var i=1; i < buttonNum; i++){
						buttons1.append('<button class="buttons1" value="'+i+'">'+i+'</button>')
					};
					var buttonNum2 = 26;
					for( var i=1; i < buttonNum2; i++){
						buttons2.append('<button class="buttons2" value="'+i+'">'+i+'</button>')
					};
				  var p=[];
				    function Button1ClickEvent(){

				    	// Function to get value of my first button;

				    	var button1 = $(".buttons1");
				       

				        //created and array and  buttons are stored in the array to be used in my first 5 inpts field.

					    button1.on("click", function(){
					    p.push($(this).val())
							$('.1').val(p[0])
							$('.2').val(p[1])
							$('.3').val(p[2])
							$('.4').val(p[3])
							$('.5').val(p[4])
							
							if(p.length>5){
								alert("Select from Green Button")
							}

					})
				    }
				    
					// setting my array back to empty so it won't affect the buttons
				    var p = [];
				    // first button ends
				 
				 //the second buttons
				 function Button2ClickEvent(){
				 	var button2 = $(".buttons2")
				 	var r = []
				 	button2.on("click", function(){
					    r.push($(this).val())
							$('.6').val(r[0])
					})
				 }
				
				 var r=[]
				 //second button ends
 
				 //Reset Button
				 function Reset() {
				 	var reset =  $("#reset");
				 	reset.on("click", function(){
				 		 location.reload(true);
				 	})
				 
				 	
				 }
				  // Funtion runs
				 Button1ClickEvent()
				 Button2ClickEvent();
				 Reset(); 

					Promise