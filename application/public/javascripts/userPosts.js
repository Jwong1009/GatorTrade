/* FILE: public/javascripts/userPosts.js

DESCRIPTION: Manages sorting functionality on My Posts page.

CREATED BY: Kishan */

const postsContainer = document.querySelector('#posts'); // The div that displays all posts
const posts = JSON.parse(postsContainer.dataset.posts); // The posts returned as a valid JS object
const sortSelect = document.querySelector('#sortSelect'); // The select menu for sort options

//Helper function to sort posts based on properties of inner objects like title or price.
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

// Function for updating the sorted posts on the My Posts page.
function updatePosts() {
    postsContainer.innerHTML = '';
    let updatedContent = '';
    for(item of posts){
        let categoryName;
        switch(item.category){
        case 1: categoryName = 'Electronics';
                break;
        case 2: categoryName = 'Books';
                break;
        case 3: categoryName = 'Handicraft';
                break;
        case 4: categoryName = 'Education Supplies';
                break;
        case 5: categoryName = 'Food';
                break;
        default: break;
        }

        let postCard = `<div class="col-8 col-md-4 col-sm-6 my-4 d-flex justify-content-center">
                            <div class="card h-100 mw-100" style="width: 18rem;">
                                <div class="text-center bg-success mb-1 is-approved" data-approved=${item.approved}>
                                    Pending Approval
                                </div>
                                <a href="/dp?id=${item.idItems}">
                                    <img src="/${item.thumbnail}" class="card-img-top" alt="...">
                                </a>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        <a href="/dp?id=${item.idItems}">${item.title}</a>
                                    </h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Category: ${categoryName}</h6>
                                    <p class="card-text">${item.description}</p>
                                </div>
                                <div class="card-footer d-flex justify-content-between">
                                    <div>
                                        <h3 class="m-0"><b>$${item.price.toFixed(2)}</b></h3>
                                    </div>
                                    <a href="/users/delete?id=${item.idItems}" class="btn btn-danger btn-sm">
                                        Delete
                                    </a>
                                </div>
                            </div>
                        </div>`;
        updatedContent += postCard;
    }
    postsContainer.innerHTML = updatedContent;

    // Hiding the pending approval tag from posts that are already approved.
    Array.from(document.querySelectorAll('.is-approved')).forEach((ele) => {
        if(ele.dataset.approved == 1){
            ele.style.display = 'none';
        }
    });
}

// Helper function to sort posts according to the selected sort value.
function sortPosts(){
    if(sortSelect.value === 'default'){
        var key = 'idItems';
        var order = 'asc';
    }else{
        var key = sortSelect.value.slice(0,5);
        var order = sortSelect.value.slice(6);
    }
    posts.sort(compareValues(key, order));
}

//Sorting and displaying sorted posts when the selected sort value changes.
sortSelect.addEventListener("change", () => {
    sortPosts();
    updatePosts();
});

// Sorting all posts on load to display category names for each card.
sortPosts();
updatePosts();