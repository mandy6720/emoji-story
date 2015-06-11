var emoji

$(document).on("ready", function() {
    
    // Get an array of five random emoji from server
	var getRandomEmoji = function() {
		$.ajax({
		  url: "/api/getEmoji",
	      method: "GET",
	      success: randoEmoji
	  	})
	}

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
		  	var postInfo = $("#written").val().append(data.text)
		
		  }
		})
	}

   var randoEmoji =  function(data) {
     	emoji = data.emoji
		$(".current-emoji").text(emoji[0])
     }

//Where we left off today! 
	

	//console.log(getRandomEmoji())

	//console.log(getRandomEmoji[0])
	getRandomEmoji()



 	
})
  
  	

  






