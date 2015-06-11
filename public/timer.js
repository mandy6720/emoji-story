

$(document).on("ready", function(){

	var emojiBank = [ "128023",
		"128704",
		"127997",
		"128014",
		"127755",
		"128059"]

	var timer = 25
		setTimeout(setInterval(function(){
			timer -= 1
			console.log(timer)
			return timer
		}, 1000), 25000)

	console.log(timer)

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



})

