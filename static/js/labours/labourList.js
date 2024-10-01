
//CLOSE POPUP

function closemainPopup(event){
    document.querySelector(`.main-popup`).classList.add(`hide`);
    // document.querySelector(`.main-popup`).classList.add(`active`);
}


function addLabour(){
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML='';
    const childPopup = `<div class="labour-list blur">
                        <div class="form">
                            <h2>Add a Labour</h2>
                            <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                            <hr>
                            <div class="grid gtc-2 gap-10">
                                <div class="field">
                                    <p class="title v-selector">Select a Client</p>
                                    <select name="cname" id="" class="v-selector">
                                        <option value="">Panchanan Deka</option>
                                        <option value="">Hello World</option>
                                    </select>
                                </div>
                                <div class="field">
                                    <p class="title">Phone Number<span>(*optional)</span></p>
                                    <input type="text" name="" id="" disabled value="9957661351">
                                </div>
                            </div>

                            <div class="labourDetails">
                                <div class="grid gtc-4 gap-10 labourGrid">
                                    <div class="field">
                                        <p class="title">Labour Name</p>
                                        <input type="text" name="" id="" required>
                                    </div>
                                    <div class="field">
                                        <p class="title">Phone Number</p>
                                        <input type="text" name="" id="" required>
                                    </div>
                                    <div class="field">
                                        <p class="title">Verification Document</p>
                                        <input type="text" name="" id="" required>
                                    </div>
                                    <div class="field">
                                        <p class="title opacity-0">P</p>
                                        <button class="btn-secondary flex align-items j-center" type="button" onclick="addOneItem(this)">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-circle"
                                                class="">
                                                <path fill=""
                                                    d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                                                </path>
                                            </svg>
                                            <span class="text">Upload Photo</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button class="btn-dashed flex align-items j-center" type="button" onclick="addInventoryItem(this)">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-circle"
                                    class="">
                                    <path fill=""
                                        d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                                    </path>
                                </svg>
                                <span class="text">Add Another Labour</span>
                            </button>
                            <div class="action-btn flex gap-10">
                                <button type="button" class="btn-success flex-1">Add</button>
                                <button type="button" class="btn-warning flex-1" onclick="closemainPopup()">Cancel</button>
                            </div>
                        </div>
                    </div>`
    mainPopup.innerHTML = childPopup;
}