








$(document).on("ready", function() {
var emoji
    
    // Get an array of five random emoji from server

		$.ajax({
		  url: "/api/getEmoji",
	      method: "GET",
	      success: function (data) {
	      	console.log(data)
	 		emoji = data.emoji
	      }
	  	})


	// Send emoji AND text to server
	var postContent = function(emoji, text){
		$.ajax({
		  url: "../api/savestory",
		  method: "POST",
		  data: {
		  	emoji: emoji,
		  	text: text
		  },
		  success: function(data) {
		  	var postInfo = $("#written").val().append(data.text)
	
		  }
		})
	}

   var randoEmoji =  function(data) {

    }
  	

    $("#start").on("click", function (){
		$(".current-emoji").text(emoji[0])
	    var startTime = new Date().valueOf()

		var count = 25
				var i = 0
		var timer = 
				setInterval(function(){

				count -= .1

				$(".timer").text(Math.round(count))
				
				if (((new Date().valueOf() - 125000) > startTime)&&(count < .1)) {
					clearInterval(timer)
				}

				//TO MAKE A SINGLE LOOP: delete following if statement,
					// and change in above, 125000 to 25000

				if (count < .1) {

					count = 25	    		
					$("#written").append($(".current-emoji").text())
		    		$("#written").append($("#writing").val())
		    		$("#writing").val("")
			    	i++
		    		$(".current-emoji").text(emoji[i])



				}

			}, 100)
		





    })
  	

  







})