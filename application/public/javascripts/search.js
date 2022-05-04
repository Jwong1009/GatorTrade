// File used to implement search-validation.

const searchTerm = document.querySelector("#searchInput");
const searchForm = document.querySelector("#searchForm");

// Search Validation. Only allowing search inputs of 40 characters or less.
searchForm.addEventListener("submit", (event) => {
    if(searchTerm.value.length > 40){
        event.preventDefault();
        window.alert("A maximum of 40 characters are allowed in the search field. Please try a different input.");
    }
});
