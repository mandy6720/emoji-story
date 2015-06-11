

$(document).on("ready", function(){


		var startTime = new Date().valueOf()

		var count = 25

		var timer = setInterval(function(){

			count -= .1

			$(".timer").text(Math.round(count))
			
			if (((new Date().valueOf() - 125000) > startTime)&&(count < .1)) {
				clearInterval(timer)
				alert("Time's Up!")
			}

			//TO MAKE A SINGLE LOOP: delete following if statement,
				// and change in above, 125000 to 25000

			if (count < .1) {
				//send text to finished story box
				//empty textarea
				//bring a new emoji
				//enable textarea
				count = 25
			}

		}, 100)




/*
	var timer = 25
		setTimeout(setInterval(function(){
			timer -= 1
			console.log(timer)
			return timer
		}, 1000), 25000)

	console.log(timer)


	var resetClock = setInterval(function (){
		var emojiSelector = Math.floor(Math.random()*6)

		$(".emoji-display").text(emojiBank[emojiSelector])	

		//remove stuff function
	}, 25000)


	var timerInit = $("#start").on("click", function() {
		$("#story").removeAttr("disabled")

		//placeholder line to get an emoji from a bank
		var emojiSelector = Math.floor(Math.random()*6)

		$(".emoji-display").text(emojiBank[emojiSelector])	

		//setTimeout (timerStop(), 300)	

	})


	var timerStop = $("#stop").on("click", function() {
		$("#story").attr("disabled")

		$(".prev").append($("#story").text()+"\n\n")

		$("#story").text("")
	})

*/

})

