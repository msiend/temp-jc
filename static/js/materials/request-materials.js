//CLOSE POPUP

function closemainPopup(event) {
    document.querySelector(`.main-popup`).classList.add(`hide`);
    // document.querySelector(`.main-popup`).classList.add(`active`);
}

function requestItem() {
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML = '';
    const childPopup = `<div class="add-collection blur">
                        <div class="form">
                            <h2>Request Materials</h2>
                            <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                            <hr>
                            <div class="grid gtc-2 gap-10">
                                <div class="field">
                                    <p class="title v-selector">Select a Client</p>
                                    <select name="cname" id="" class="v-selector">
                                        <option value="">Mukunda Sharma</option>
                                        <option value="">Vidit Gujrati</option>
                                    </select>
                                </div>
                                <div class="field">
                                    <p class="title">Phone Number</p>
                                    <input type="number" name="" id="" required>
                                </div>
                            </div>

                                <button class="btn-dashed flex align-items j-center" type="button" onclick="addOneItem(this)">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-circle"
                                        class="">
                                        <path fill=""
                                            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                                        </path>
                                    </svg>
                                    <span class="text">Add Item</span>
                                </button>

                            <div class="newItem">
                                <div class="grid gap-10 inventoryGrid">
                                    <div class="field">
                                        <p class="title">Item</p>
                                        <input type="text" name="" id="">
                                    </div>
                                    <div class="field">
                                        <p class="title">Quantity</p>
                                        <input type="text" name="" id="">
                                    </div>
                                    <div class="field">
                                        <p class="opacity-0">p</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="trash-alt"><path fill="" d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path></svg>
                                    </div>
                                </div>
                                <div class="grid gap-10 inventoryGrid">
                                    <div class="field">
                                        <p class="title">Item</p>
                                        <input type="text" name="" id="">
                                    </div>
                                    <div class="field">
                                        <p class="title">Quantity</p>
                                        <input type="text" name="" id="">
                                    </div>
                                    <div class="field">
                                        <p class="opacity-0">p</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="trash-alt"><path fill="" d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="action-btn flex gap-10">
                                <button type="button" class="btn-success flex-1">Request</button>
                                <button type="button" class="btn-warning flex-1" onclick="closemainPopup()">Cancel</button>
                            </div>
                        </div>
                    </div>`
    mainPopup.innerHTML = childPopup;
}

function editRequest() {
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML = '';
    const childPopup = `<div class="add-collection blur">
                        <div class="form">
                            <h2>Edit Request</h2>
                            <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                            <hr>
                            <div class="grid gtc-2 gap-10">
                                <div class="field">
                                    <p class="title v-selector">Select a Client</p>
                                    <select name="cname" id="" class="v-selector">
                                        <option value="">Mukunda Sharma</option>
                                        <option value="">Vidit Gujrati</option>
                                    </select>
                                </div>
                                <div class="field">
                                    <p class="title">Phone Number</p>
                                    <input type="number" name="" id="" required>
                                </div>
                            </div>

                            <button class="btn-dashed flex align-items j-center" type="button" onclick="addOneItem(this)">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-circle"
                                    class="">
                                    <path fill=""
                                        d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                                    </path>
                                </svg>
                                <span class="text">Add Item</span>
                            </button>

                            <div class="newItem">
                                <div class="grid gap-10 inventoryGrid">
                                    <div class="field">
                                        <p class="title">Item</p>
                                        <input type="text" name="" id="">
                                    </div>
                                    <div class="field">
                                        <p class="title">Quantity</p>
                                        <input type="text" name="" id="">
                                    </div>
                                    <div class="field">
                                        <p class="opacity-0">p</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="trash-alt"><path fill="" d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path></svg>
                                    </div>
                                </div>
                                <div class="grid gap-10 inventoryGrid">
                                    <div class="field">
                                        <p class="title">Item</p>
                                        <input type="text" name="" id="">
                                    </div>
                                    <div class="field">
                                        <p class="title">Quantity</p>
                                        <input type="text" name="" id="">
                                    </div>
                                    <div class="field">
                                        <p class="opacity-0">p</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="trash-alt"><path fill="" d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="action-btn flex gap-10">
                                <button type="button" class="btn-success flex-1">Add</button>
                                <button type="button" class="btn-warning flex-1" onclick="closemainPopup()">Cancel</button>
                            </div>
                        </div>
                    </div>`
    mainPopup.innerHTML = childPopup;
}

function viewRequest(){
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML = '';
    const childPopup = `<div class="inventory-popup">
                        <div class="flex align-start j-between">
                            <h2>Request No: 1</h2>
                            <button type="button" class="btn-warning close" onclick="closemainPopup(this)">Close</button>
                        </div> 
                        <div class="contents grid gap-10">
                            <div class="description flex align-center gap-5">
                                <h3>Date:</h3>
                                <p class="text">12-Nov-2024</p>
                            </div>
                            <div class="description flex align-center gap-5">
                                <h3>Client Name:</h3>
                                <p class="text">Kankan Jyoti Nath</p>
                            </div>
                            <div class="description flex align-center gap-5">
                                <h3>Phone / Alternate Number:</h3>
                                <p class="text">6002649802 / 7636896075</p>
                            </div>
                        </div>
                        <div class="approveAll-btn">
                            <button class="btn-primary" type="button" onclick="requestItem()">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="file-check-alt"><path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z"></path></svg>
                                <span class="text">Approve All</span>
                            </button>
                        </div>
                        <div class="inventory-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" name="checkbox" class="select-all"></th>
                                        <th class="">No.</th>
                                        <th class="">Item</th>
                                        <th class="">Quantity</th>
                                        <th class="">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" name="" id="" onchange="toggleHighlight(this)"
                                            class="row-checkbox"></td>
                                        <td class="text">1</td>
                                        <td class="text">Cement</td>
                                        <td class="text">10</td>
                                        <td class="text approve"><span>Approve</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
    
                        
                    </div>`
    mainPopup.innerHTML = childPopup;
}


//ADD inventory Items
function addInventoryItem(event) {
    document.querySelector(`.addItem-popup`).classList.remove(`hide`);
    document.querySelector(`.inventory-table`).classList.add(`hide`);
}

//Close ITEM POPUP
function closeItemPopup(event) {
    document.querySelector(`.addItem-popup`).classList.add(`hide`);
    document.querySelector(`.inventory-table`).classList.remove(`hide`);
}

//ADD inventory Items
function editItem(event) {
    document.querySelector(`.editItem-popup`).classList.remove(`hide`);
    document.querySelector(`.btn-dashed`).classList.add(`hide`);
    document.querySelector(`.inventory-table`).classList.add(`hide`);
}

//Close ITEM POPUP
function closeEditItem(event) {
    document.querySelector(`.editItem-popup`).classList.add(`hide`);
    document.querySelector(`.btn-dashed`).classList.remove(`hide`);
    document.querySelector(`.inventory-table`).classList.remove(`hide`);
}

