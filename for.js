let chatArr = []; // Declare an empty array to store chat data

// If there is chat data saved in the localStorage, parse it and store it in chatArr
if (localStorage.chat) {
    chatArr = JSON.parse(localStorage.getItem("chat")); 
}

// This function gets called when the user clicks the "Add" button to submit a new chat item
const add = () => {
    // Create a new chat item with the title and note entered by the user
    let item = {
        title: title.value,
        note: note.value
    };

    // Add the new chat item to chatArr and save the updated array to localStorage
    chatArr.push(item);
    localStorage.setItem("chat", JSON.stringify(chatArr));
    
    // Clear the input fields and display the updated chat data
    title.value = "";
    note.value = "";
    displayChat();
};

// This function retrieves the chat data from localStorage and generates HTML markup to display it on the page
const displayChat = () => {
    let localData = JSON.parse(localStorage.getItem("chat"));
    
    // Clear the current chat display
    disp.innerHTML = "";

    // Generate HTML markup for each chat item and append it to the chat display
    localData.map((value , index) => {
        disp.innerHTML += `
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div class="h-full p-3 rounded-lg border-2 border-indigo-500 flex flex-col overflow-hidden">
                    <h2 class="text-2xl font-medium tracking-widest text-gray-900">${value.title}</h2>
                    <div class="py-2">
                        <hr>
                    </div>
                    <p class="flex items-center text-gray-600 mb-2">${value.note}</p>
                    <button class="flex items-center mt-auto text-white bg-indigo-700 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-800 rounded" onclick="deleteNote(${index})">Delete Note
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>`;
    });
};

// This function gets called when the user clicks the "Delete Note" button on a chat item
const deleteNote = (index) => {
    // Remove the chat item at the specified index from chatArr and save the updated array to localStorage
    chatArr.splice(index, 1);
    localStorage.setItem("chat", JSON.stringify(chatArr));
    
    // Display the updated chat data
    displayChat();
};
