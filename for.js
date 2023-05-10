// Retrieve chat data from localStorage
let chatArr = JSON.parse(localStorage.getItem("chat")) || [];

// Function to add new note to chat and update localStorage
const addNote = () => {
  const title = document.getElementById("title").value;
  const note = document.getElementById("note").value;

  // Create new note object
  const newNote = { title, note };

  // Add new note to chat array
  chatArr.push(newNote);

  // Store updated chat array in localStorage
  localStorage.setItem("chat", JSON.stringify(chatArr));

  // Clear input fields
  document.getElementById("title").value = "";
  document.getElementById("note").value = "";

  // Refresh chat display
  displayChat();
};

// Function to display chat notes from localStorage
const displayChat = () => {
  const chatDiv = document.getElementById("chat");
  chatDiv.innerHTML = "";

  // Loop through chat array and create HTML elements for each note
  chatArr.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "p-4 xl:w-1/4 md:w-1/2 w-full";
    noteDiv.innerHTML = `
      <div class="h-full p-3 rounded-lg border-2 border-indigo-500 flex flex-col overflow-hidden">
        <h2 class="text-lg font-normal tracking-widest ">${note.title}</h2>
        <div class="py-2"><hr></div>
        <p class="flex items-center text-gray-600 mb-2">${note.note}</p>
        <button onclick="deleteNote(${index})" class="flex items-center mt-auto text-white bg-indigo-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Delete Note
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    `;
    chatDiv.appendChild(noteDiv);
  });
};

// Function to delete a note from the chat array and update localStorage
const deleteNote = (index) => {
  chatArr.splice(index, 1);
  localStorage.setItem("chat", JSON.stringify(chatArr));
  displayChat();
};

// Call displayChat function on page load
displayChat();
