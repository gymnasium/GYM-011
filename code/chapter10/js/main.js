var listTemplate = document.getElementById("list_template").innerHTML,
	detailsTemplate = document.getElementById("details_template").innerHTML,
	searchText = document.getElementById("search_text"),
	listDiv = document.getElementById("list"),
	detailsDiv = document.getElementById("details"),
	searchBtn = document.getElementById("search_button");

/* NOTE: Since this application was originally developed, the OMDB api has become private.
 * In order to use it, you will need to get an API key. 
 * For the remainder of this course, you can use the Aquent key as shown below
 * If you intend on using the API after tha, you will need to get your own, which will cost you $1 per month.
 * Go here to get your own API key: https://www.patreon.com/posts/api-is-going-10743518
 * When you have it, replace the "aquent" below with your own key.
 */
var apiKey = "aquent";


searchBtn.addEventListener("click", function() {
	var title = searchText.value;
	$.get("http://www.omdbapi.com/?s=" + title + "&apikey=" + apiKey, null, null, "json")
		.done(onSearchResult)
		.fail(onSearchFail);
});

function onSearchResult(data) {
	var html = Mustache.render(listTemplate, data);
	listDiv.innerHTML = html;

	var items = listDiv.getElementsByTagName("a");
	for(var i = 0; i < items.length; i++) {
		var item = items[i];
		item.addEventListener("click", getDetails);
	}
}

function onSearchFail() {
	alert("There was a problem contacting the server. Please try again.");
}

function getDetails(event) {
	var id = event.target.id;
	$.get("http://www.omdbapi.com/?plot=full&i=" + id + "&apikey=" + apiKey, null, null, "json")
		.done(onDetailsResult)
		.fail(onSearchFail);
}

function onDetailsResult(data) {
	var html = Mustache.render(detailsTemplate, data);
	detailsDiv.innerHTML = html;
}