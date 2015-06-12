var story


var sampleObject = {
	emoji: ["🐛","🆗","👙","🍯","💬"],
	text: "🐛Hello, I am a fuzzy little caterpillar. I'm here to crawl on branches and muhc some leaves. Most of my days are pretty regular. But yesterday something happened that i didn't expect🆗🆗I didn't feel great, didn't feel bad. I justmostly felt... okay. And if you're a caterpillar, that's not okay. Caterpillars are the joybringers of th ekin👙👙gdom. But why did I feel poorly? Because it is swimsuit season, and my pink, polka-doted bikini looked ridiculous on me. Maybe as a caterpillar I 🍯🍯should have known. But I had been eating honey all winter. And I had a caterbelly. That I suppose is why cateripllars don't wear b💬💬kinis. So anyway, I spent the entire afternoon, silently staring. Every conversation I refused to engaged, just giving dramatic puases. People didn't know what to 💬"
}

$(document).on("ready", function() {

	console.log(sampleObject)

	for (var i = 0; i < sampleObject.emoji.length; i++) {
		$("#emoji"+(i+1)).text(sampleObject.emoji[i])
	}
	


	//subject this to a funciton to parse out the emijos	
	$(".finished").text(sampleObject.text)



/*

	$.ajax({
		url: "/assets/getEmoji",
		method: "GET",
		data: "",
		success: function(data) {
			//could use handlebars (and each?) to send each emoji and each paragraph to seperate containers

				for (var i = 0; i < data.emoji.length; i++) {
					$("#emoji"+i).text(data.emoji[i])
				}
				

				$(".finished").text(data.text)
			
		}
	})

*/

})