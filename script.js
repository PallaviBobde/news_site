let headingList = document.getElementById("headingList");
headingList.innerHTML = "";

let descriptions = document.getElementById("descriptions");
descriptions.innerHTML = "";

const xhr = new XMLHttpRequest();

let url =
	"http://newsapi.org/v2/top-headlines?" +
	"sources=bbc-news&" +
    "apiKey=e2e1c63300d7402b94c8fefeb9e8bf19";
    
xhr.open("GET", url, true);

xhr.getResponseHeader("content-type", "application/json");

xhr.onload = function () {
	let json = JSON.parse(xhr.responseText);
	console.log(json.articles);

	json.articles.forEach((element, index) => {
		// console.log(element.urlToImage);
		let heading = `<a
                    class="list-group-item list-group-item-action"
                    id=${index}heading
                    data-bs-toggle="list"
                    href="#list-${index}heading"
                    role="tab"
                    aria-controls="home"
                    >${element.title}</a
                >`;

        headingList.innerHTML += heading;
        
        let contentDescription = `<div
                    class="tab-pane fade show"
                    id=list-${index}heading
                    role="tabpanel"
                    aria-labelledby="list-home-list"
                    >
                    <img src="${element.urlToImage}" class="col-8 rounded mx-auto d-block img-fluid img-thumbnail" alt="...">
                    ${element.description}
                    <span class="badge rounded-pill bg-light text-dark">${element.publishedAt}</span>
                    <a href="${element.url}">Read more...</a>
                    </div>`;

    descriptions.innerHTML +=contentDescription;
	});
};
xhr.send();
