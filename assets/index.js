$(document).on("ready", function() {
    
    // Get an array of five random emoji from server
	var getRandomEmoji = function() {
		$.ajax{(
		  url: ?,
	      method: "GET",
	      success: randoEmoji
	  	)}
	}

	// Send emoji AND text to server
	var postContent = function(emoji, text){
		$.ajax{(
		  url: ?,
		  method: "POST",
		  data: {
		  	emoji: emoji,
		  	text: text
		  },
		  success: function(data) {
		  	var postInfo = $("#written").val().append(data.text)
		
		  }
		)}
	}

   var randoEmoji =  function(data) {
      _.sample(function(data)
      	 $(".class").append(randoEmoji)

    }
   
  
  	

  







})