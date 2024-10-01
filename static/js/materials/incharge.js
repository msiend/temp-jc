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
                        <div class="contents grid gtc-2 gap-10">
                            <div class="description flex align-center gap-5">
                                <h3>Client Name:</h3>
                                <p class="text">Kankan Jyoti Nath</p>
                            </div>
                            <div class="description flex align-center gap-5">
                                <h3>Phone / Alternate Number:</h3>
                                <p class="text">6002649802 / 7636896075</p>
                            </div>
                        </div>
                        <button class="btn-dashed flex align-items j-center" type="button" onclick="addInventoryItem(this)">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-circle"
                                class="">
                                <path fill=""
                                    d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                                </path>
                            </svg>
                            <span class="text">Add Item</span>
                        </button>
                        <div class="addItem-popup hide">
                            <div class="form">
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
                                <div class="action-btn flex gap-10">
                                    <button type="button" class="btn-success flex-1">Add</button>
                                    <button type="button" class="btn-warning flex-1" onclick="closeItemPopup()">Cancel</button>
                                </div>
                            </div>
                        </div>
                        <div class="editItem-popup hide">
                            <div class="form">
                                <div class="grid gtc-2 gap-10">
                                    <div class="field">
                                        <p class="title">Item</p>
                                        <input type="text" name="" id="">
                                    </div>
                                    <div class="field">
                                        <p class="title">Quantity</p>
                                        <input type="text" name="" id="">
                                    </div>
                                </div>
                                <div class="action-btn flex gap-10">
                                    <button type="button" class="btn-success flex-1">Update</button>
                                    <button type="button" class="btn-warning flex-1" onclick="closeEditItem()">Cancel</button>
                                </div>
                            </div>
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
                                        <td class="flex gap-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        onclick="editItem(this)">
                                                        <path fill=""
                                                            d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z">
                                                        </path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path fill=""
                                                            d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z">
                                                        </path>
                                                    </svg>
                                                </td>
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