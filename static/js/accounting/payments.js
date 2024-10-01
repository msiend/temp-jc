//CLOSE POPUP

function closemainPopup(event){
    document.querySelector(`.main-popup`).classList.add(`hide`);
    // document.querySelector(`.main-popup`).classList.add(`active`);
}

function addPayment(event){
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML='';
    const childPopup = `<div class="addPayment blur">
                    <div class="form">
                        <h2>Add a Payment</h2>
                        <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                        <hr>

                        <div class="addGrid">
                            <div class="field">
                                <p class="title">Date</p>
                                <input type="date" name="" id="" required>
                            </div>
                            <div class="field">
                                <p class="title">Amount</p>
                                <input type="number" name="" id="" required>
                            </div>
                            <div class="field">
                                <p class="title">Mode</p>
                                <div class="flex f-wrap">
                                    <div class="flex">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">Cash</p>
                                    </div>
                                    <div class="flex">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">UPI</p>
                                    </div>
                                    <div class="flex">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">Cheque</p>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <p class="title">Type</p>
                                <div class="flex f-wrap">
                                    <div class="flex">
                                        <input type="radio" name="type" id="">
                                        <p class="text">Personal</p>
                                    </div>
                                    <div class="flex">
                                        <input type="radio" name="type" id="" class="vendor-event">
                                        <p class="text">Vendor</p>
                                    </div>
                                    <div class="flex">
                                        <input type="radio" name="type" id="">
                                        <p class="text">Others</p>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <p class="title">Remarks<span>(*optional)</span></p>
                                <input type="text" name="" id="">
                            </div>
                            <div class="field vendor-field">
                                <p class="title vendor-selector">Select a Vendor</p>
                                <select name="cname" id="" class="vendor-selector">
                                    <option value="">Mintu Sharma</option>
                                    <option value="">Rontu DA</option>
                                </select>
                            </div>
                        </div>

                        <div class="action-btn flex">
                            <button type="button" class="btn-success">Add</button>
                            <button type="button" class="btn-warning" onclick="closemainPopup()">Cancel</button>
                        </div>
                    </div>
                </div>`
    mainPopup.innerHTML = childPopup;
}
function editPayment(event){
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML='';
    const childPopup = `<div class="editPayment blur">
                    <div class="form">
                        <h2>Edit Payment</h2>
                        <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                        <hr>

                        <div class="addGrid">
                            <div class="field">
                                <p class="title">Date</p>
                                <input type="date" name="" id="" required>
                            </div>
                            <div class="field">
                                <p class="title">Amount</p>
                                <input type="number" name="" id="" required>
                            </div>
                            <div class="field">
                                <p class="title">Mode</p>
                                <div class="flex f-wrap">
                                    <div class="flex">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">Cash</p>
                                    </div>
                                    <div class="flex">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">UPI</p>
                                    </div>
                                    <div class="flex">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">Cheque</p>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <p class="title">Type</p>
                                <div class="flex f-wrap">
                                    <div class="flex">
                                        <input type="radio" name="type" id="">
                                        <p class="text">Personal</p>
                                    </div>
                                    <div class="flex">
                                        <input type="radio" name="type" id="">
                                        <p class="text">Client</p>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <p class="title">Remarks<span>(*optional)</span></p>
                                <input type="text" name="" id="">
                            </div>
                            <div class="field vendor-field hide">
                                <p class="title vendor-selector">Select a Vendor</p>
                                <select name="cname" id="" class="vendor-selector">
                                    <option value="">Mintu Sharma</option>
                                    <option value="">Rontu DA</option>
                                </select>
                            </div>
                        </div>

                        <div class="action-btn flex">
                            <button type="button" class="btn-success">Update</button>
                            <button type="button" class="btn-warning" onclick="closemainPopup()">Cancel</button>
                        </div>
                    </div>
                </div>`
    mainPopup.innerHTML = childPopup;
}


//RADIO event
function radioEvent(){
    const radio = document.querySelector(`.vendor-event`)
    
}