let chatArr = []
let localData = JSON.parse(localStorage.getItem("chat")) 

const add = ()=>{
    // alert("welcome")
    let item = {
        title:title.value,
        note:note.value
    }
    // console.log(item);
    chatArr.push(item)

    console.log(chatArr);

    localStorage.setItem("chat",JSON.stringify(chatArr));
    // console.log(localData);
    // disp.innerHTML = "";
    location.reload()
    

    title.value = "";
    note.value = ""
}
const displayChat = ()=>{
    // disp.innerHTML = ""
    localData.map((value , index)=> {
        disp.innerHTML += `
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div class="h-full p-3 rounded-lg border-2 border-indigo-500 flex flex-col overflow-hidden">
                    <!-- <button class="bg-indigo-700 text-white px-3 py-1 tracking-widest text-l absolute right-0 top-0 rounded-bl">Delete Note</button> -->
                    <h2 class="text-lg font-normal tracking-widest ">${value.title}</h2>
                
                    <div class="py-2">
                        <hr>
                    </div>
                    <p class="flex items-center text-gray-600 mb-2">${value.note}</p>
                    <button class="flex items-center mt-auto text-white bg-indigo-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Delete Note
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `
    })
}
// displayChat();
