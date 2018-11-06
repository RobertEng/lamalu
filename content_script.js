function howdy() {
	document.title = "POTATO"

	var elements = document.getElementsByTagName('a')
	for (var i = 0; i < elements.length; i++) {
		console.log(elements[i].dataset.href)

		if (elements[i].dataset.href !== "") {
			elements[i].style.display = "none"
		}
	}

	elements = document.getElementsByTagName('img')
	for (var i = 0; i < elements.length; i++) {
		console.log(elements[i].title)

		if (elements[i].title !== "") {
			elements[i].style.display = "none"
		}
	}

	// var conversationList
	// elements = document.getElementsByTagName('ul')
	// for (var i = 0; i < elements.length; i++) {
	// 	conversationList = elements[i].getElementsByClassName("")[0]
	// }
	// console.log(conversationList)

	
	// elements = document.getElementsByClassName("_5bli _2_a2 img");
	// for (var i = 0; i < elements.length; i++) {
	// 	console.log(elements[i])
	// 	elements[i].style.visibility = "hidden"
	// 	elements[i].style.color = "white"
	// }


	// aria-label="Conversation actions"
}

// setTimeout(howdy, 1000)
setInterval(howdy, 1000)