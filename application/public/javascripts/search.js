function getInputValue(){
    // Selecting the input element and get its value 
    var searchTerm = document.getElementById("searchInput").value;

    // Makes call to server to get all searchTerm related items from database.
    fetch(`/test_results/${searchTerm}`, { method: 'get' })
    .then((response) => response.json())
    .then((results) => {
        //[{"idItems":1,"category":2,"seller":1,"photopath":null,"description":null,"title":"Lord of The Rings","price":null,"approved":0}]
        console.log("Results:\n"+results);
        // let resultsListing = document.getElementById('results');
        // let newResultsListing = '';
        // for(let i = 0; i < results.length; i++) {
        //     newResultsListing += createResultListing(results[i].title, results[i].seller, results[i].description, results[i].price);
        // }
        // resultsListing.innerHTML = newResultsListing;
    });


}

// Template to create new result card in Results page.
function createResultListing(title, seller, description, price) {
    return `<div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img src="https://www.petmd.com/sites/default/files/2020-11/picture-of-golden-retriever-dog_0.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${seller}</h6>
                    <p class="card-text">${description}</p>
                    <span class="border border-primary rounded-2 px-4 pv-2 fs-5">${price}</span>
                    </div>
                </div>
            </div>`;
}