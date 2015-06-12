var emoji

$(document).on("ready", function() {
    
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
		  url: "/api/saveStory",
		  method: "POST",
		  data: {
		  	emoji: emoji,
		  	text: text
		  },
		  success: function(data) {
		  	console.log(data)
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
			var timer = setInterval(function(){

				count -= .1

				$(".timer").text(Math.round(count))
				
				//TO MAKE A SINGLE LOOP: delete following if statement,
					// and change in above, 125000 to 25000

				if (count < .1) {

					count = 25	    		
					$("#written").append($(".current-emoji").text())
		    		$("#written").append($("#writing").val())
		    		$("#writing").val("")
			    	i++
		    		$(".current-emoji").text(emoji[i])

		    	if (((new Date().valueOf() - 125000) > startTime)) {
						clearInterval(timer)
						postContent(emoji, $("#written").text())
					}

				}

			}, 100)
		
    })

})
  	

  






