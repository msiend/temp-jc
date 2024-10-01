
function closemainPopup(event){
    document.querySelector(`.main-popup`).classList.add(`hide`);
    // document.querySelector(`.main-popup`).classList.add(`active`);
}

//ADD INSTALLMENT
function addInstallment() {
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML = '';
    const childPopup = `<div class="add-installment-popup blur">
                    <div class="form">
                        <h2>Add Installment</h2>
                        <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                        <hr>

                        <div class="grid gtc-3 gap-10">
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
                                <div class="flex f-wrap gap-10">
                                    <div class="flex gap-2">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">Cash</p>
                                    </div>
                                    <div class="flex gap-2">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">UPI</p>
                                    </div>
                                    <div class="flex gap-2">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">Cheque</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="action-btn flex align-center gap-10">
                            <button type="button" class="btn-success flex-1">Update</button>
                            <button type="button" class="btn-warning flex-1" onclick="closemainPopup()">Cancel</button>
                        </div>
                    </div>
                </div>`
    mainPopup.innerHTML = childPopup;
}
//EDIT INSTALLMENT
function editInstallment() {
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML = '';
    const childPopup = `<div class="add-installment-popup blur">
                    <div class="form">
                        <h2>Edit Installment</h2>
                        <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                        <hr>

                        <div class="grid gtc-3 gap-10">
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
                                <div class="flex f-wrap gap-10">
                                    <div class="flex gap-2">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">Cash</p>
                                    </div>
                                    <div class="flex gap-2">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">UPI</p>
                                    </div>
                                    <div class="flex gap-2">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">Cheque</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="action-btn flex align-center gap-10">
                            <button type="button" class="btn-success flex-1">Update</button>
                            <button type="button" class="btn-warning flex-1" onclick="closemainPopup()">Cancel</button>
                        </div>
                    </div>
                </div>`
    mainPopup.innerHTML = childPopup;
}

// IVIEW MORE
document.querySelectorAll('.action-icon').forEach(element => {
    element.addEventListener('click', ()=>{
        document.querySelector('.action-dropdown-list').classList.toggle('hide'); 
    })
});