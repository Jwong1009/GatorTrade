const resultsContainer = document.querySelector('#results'); // The div that displays all results
const results = JSON.parse(resultsContainer.dataset.results); // The results returned as a valid JS object
const sortSelect = document.querySelector('#sortSelect'); // The select menu for sort options

//Helper function to sort results based on properties of inner objects like title or price.
function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}

// Function for updating the sorted results on the results page.
function updateResults() {
resultsContainer.innerHTML = '';
let updatedContent = '';
let count = 0;
for(item of results){
    let categoryName;
    switch(item.category){
    case 1: categoryName = 'Electronics';
            break;
    case 2: categoryName = 'Textbooks';
            break;
    case 3: categoryName = 'Handicraft';
            break;
    case 4: categoryName = 'Education Supplies';
            break;
    case 5: categoryName = 'Food';
            break;
    default: break;
    }

    let itemCard = `<div class="col-md-4">
                    <div class="card h-100" style="width: 18rem;">
                        <img src="${item.photopath}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${item.category}</h6>
                        <p class="card-text">${item.description}</p>
                        <span class="border border-primary rounded-2 px-4 pv-2 fs-5">$${item.price}</span>
                        </div>
                    </div>
                    </div>`;
    if(count % 3 === 0){
        updatedContent += `<div class="row mb-5">` + itemCard;
    } else if(count % 3 === 1){
        updatedContent += itemCard;
    } else if(count % 3 === 2 || count + 1 === results.length){
        updatedContent += itemCard + `</div>`;
    }
    count++;
}
resultsContainer.innerHTML = updatedContent;
}

//Sorting the results according to the selected sort option.
sortSelect.addEventListener("change", () => {
if(sortSelect.value === 'default'){
    var key = 'idItems';
    var order = 'asc';
}else{
    var key = sortSelect.value.slice(0,5);
    var order = sortSelect.value.slice(6);
}
results.sort(compareValues(key, order));
updateResults();
});