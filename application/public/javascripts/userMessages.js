/* FILE: public/javascripts/userMessages.js

DESCRIPTION: Manages sorting functionality on My Messages page.

CREATED BY: Kishan */

const messagesContainer = document.querySelector('#messages'); // The div that displays all messages
const messages = JSON.parse(messagesContainer.dataset.messages); // The messages returned as a valid JS object
const senders = JSON.parse(messagesContainer.dataset.senders);
const sortSelect = document.querySelector('#sortSelect'); // The select menu for sort options

console.log(messages);
console.log(senders);

//Helper function to sort messages based on properties of inner objects like item or date.
function compareValues(key, order = 'asc') {
    console.log('compareValues', key, order);
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

// Function for updating the sorted messages on the My Messages page.
function updateMessages() {
    console.log('updateMessages');
    messagesContainer.innerHTML = '';
    let updatedContent = '';
    for(message of messages){
        let senderName;
        for(sender of senders){
            if(sender.idUsers === message.sender){
                senderName = `${sender.firstname} ${sender.lastname}`;
                break;
            }
        }
        let messageCard = `<div class="d-flex my-3 p-2 bg-white rounded-2 w-75">
                                <img
                                src="/${message.thumbnail}"
                                class="img-thumbnail bg-dark"
                                width="120px"
                                height="auto"
                                />
                                <div class="col">
                                <div class="d-flex justify-content-between">
                                    <div class="fs-4 col-sm m-2">
                                    Item: <b> ${message.title} </b>
                                    </div>
                                    <div class="d-flex fs-6 col-sm m-2 justify-content-end">
                                    Date sent: ${message.date}
                                    </div>
                                </div>
                                <div class="fs-5 col-sm m-2">
                                    From: ${senderName}
                                </div>
                                <div class="fs-6 col-sm m-2 text-wrap">
                                    Message: ${message.body}
                                </div>
                                </div>
                            </div>`;
        updatedContent += messageCard;
    }
    messagesContainer.innerHTML = updatedContent;
}

// Helper function to sort results according to the selected sort value.
function sortMessages(){
    console.log('sortMessages');
    if(sortSelect.value === 'default'){
        var key = 'idMessages';
        var order = 'asc';
    }else{
        var key = sortSelect.value.slice(0,4);
        key = (key === 'item') ? 'title' : key;
        var order = sortSelect.value.slice(5);
    }
    messages.sort(compareValues(key, order));
    console.log(messages);
}

//Sorting and displaying sorted results when the selected sort value changes.
sortSelect.addEventListener("change", () => {
    sortMessages();
    updateMessages();
});