

//CLOSE POPUP

function closemainPopup(event) {
    document.querySelector(`.main-popup`).classList.add(`hide`);
    // document.querySelector(`.main-popup`).classList.add(`active`);
}


//CREATE PROJECT
function addProject() {
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML = '';
    const childPopup = `<div class="add-project-popup blur">
                        <div class="form">
                            <h2>Add a Project</h2>
                            <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                            <hr>
                            <div class="grid gtc-2 gap-10 add-project-header">
                                <div class="field">
                                    <p class="title client-selector">Select a Client</p>
                                    <select name="cname" id="" class="client-selector">
                                        <option value="">Manash Kakoti</option>
                                        <option value="">Panchanan Deka</option>
                                    </select>
                                </div>
                                <div class="field add-field-btn">
                                    <p class="opacity-0">0</p>
                                    <button class="btn-primary j-center" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-circle"
                                            class="">
                                            <path fill=""
                                                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                                            </path>
                                        </svg>
                                        <span class="text">Add a New Client</span>
                                    </button>
                                </div>
                            </div>
                            <div class="accordion">
                                <div class="accordion-heading flex align-center j-between">
                                    <h3>Profile details</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-down"
                                        class="svg-18 arrow">
                                        <path
                                            d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="accordion-data profile-accordion hide">
                                    <div class="grid gtc-2 gap-10">
                                        <div class="field">
                                            <p class="title">Name</p>
                                            <input type="text" name="" id="" required>
                                        </div>
                                        <div class="field">
                                            <p class="title">Contact Number</p>
                                            <input type="number" name="" id="" required>
                                        </div>
                                        <div class="field">
                                            <p class="title">Alternate Number<span>(*optional)</span></p>
                                            <input type="number" name="" id="">
                                        </div>
                                        <div class="field">
                                            <p class="title">Email<span>(*optional)</span></p>
                                            <input type="email" name="" id="">
                                        </div>
                                        <div class="field">
                                            <p class="title">Address<span>(*optional)</span></p>
                                            <input type="text" name="" id="">
                                        </div>
                                        <div class="field">
                                            <p class="title">Other Details<span>(optional)</span></p>
                                            <input type="text" name="" id="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>

                            <div class="accordion">
                                <div class="accordion-heading flex align-center j-between">
                                    <h3>Project details</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-down"
                                        class="svg-18 arrow">
                                        <path
                                            d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="accordion-data hide">
                                    <div class="grid gtc-2 gap-10">
                                        <div class="field">
                                            <p class="title">Project Name</p>
                                            <input type="text" name="" id="">
                                        </div>
                                        <div class="field">
                                            <p class="title">Deadline<span>(*optional)</span></p>
                                            <input type="text" name="" id="">
                                        </div>
                                        <div class="field">
                                            <p class="title">Total Amount</p>
                                            <input type="text" name="" id="">
                                        </div>
                                        <div class="field">
                                            <p class="title">Advance Amount</p>
                                            <input type="text" name="" id="">
                                        </div>
                                        <div class="field">
                                            <p class="title">House Type</p>
                                            <select name="cname" id="" class="house-type">
                                                <option value="">Assam Type</option>
                                                <optgroup label="RCC">
                                                <option value="G+1">G+1</option>
                                                <option value="G+2">G+2</option>
                                            </optgroup>
                                            </select>
                                        </div>
                                        <div class="field">
                                            <p class="title">Site Description<span>(*optional)</span></p>
                                            <input type="text" name="" id="">
                                        </div>
                                        <div class="field">
                                            <p class="title">Project Duration <span>in years</span> <span>(*optional)</span></p>
                                            <input type="text" name="" id="">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr>
                            <div class="accordion">
                                <div class="accordion-heading flex align-center j-between">
                                    <h3>Attached files</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-down"
                                        class="svg-18 arrow">
                                        <path
                                            d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="accordion-data hide">
                                    <div class="field">
                                        <button class="btn-secondary" type="button" onclick="">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="image-plus">
                                                <path
                                                    d="M19,10a1,1,0,0,0-1,1v3.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.71L9.41,11.12a2.79,2.79,0,0,0-3.93,0L4,12.61V7A1,1,0,0,1,5,6h8a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19.22A2.79,2.79,0,0,0,4.78,22H17.22a2.88,2.88,0,0,0,.8-.12h0a2.74,2.74,0,0,0,2-2.65V11A1,1,0,0,0,19,10ZM5,20a1,1,0,0,1-1-1V15.43l2.89-2.89a.78.78,0,0,1,1.1,0L15.46,20Zm13-1a1,1,0,0,1-.18.54L13.3,15l.71-.7a.77.77,0,0,1,1.1,0L18,17.21ZM21,4H20V3a1,1,0,0,0-2,0V4H17a1,1,0,0,0,0,2h1V7a1,1,0,0,0,2,0V6h1a1,1,0,0,0,0-2Z">
                                                </path>
                                            </svg>
                                            <span class="text">Upload</span>
                                        </button>
                                    </div>
                                    <div class="uploaded-files flex align-center gap-10 f-wrap">
                                        <figure class="hide">
                                            <img src="/img/admin.jpg" alt="file">
                                            <figcaption>Admin.jpg</figcaption>
                                            <span>&times</span>
                                        </figure>
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
    
    document.querySelectorAll('.accordion').forEach((element)=> {
        element.querySelector('.accordion-heading').addEventListener('click',(event)=>{
            event.stopPropagation()
            element.querySelector('.accordion-data').classList.toggle('hide');
            element.querySelector('.accordion-heading .arrow').classList.toggle('active');
        })
    });
    
    
    document.querySelector('.add-field-btn').addEventListener('click', ()=>{
        document.querySelector('.accordion-heading .arrow').classList.add('active');
        document.querySelector('.profile-accordion').classList.remove('hide');
    })

    document.querySelector('.accordion-data button').addEventListener("click", ()=>{
        document.querySelectorAll('figure').forEach(image=>{
            image.classList.remove('hide')
        })
    })
}


//EDIT PROJECT
function editProject() {
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML = '';
    const childPopup = `<div class="edit-project-popup blur">
                    <div class="form">
                        <h2>Edit Project</h2>
                        <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                        <hr>

                        <div class="grid gtc-2 gap-10">
                            <div class="field">
                                <p class="title">Project Name</p>
                                <input type="text" name="" id="">
                            </div>
                            <div class="field">
                                <p class="title">Deadline</p>
                                <input type="text" name="" id="">
                            </div>
                            <div class="field">
                                <p class="title">Total Amount</p>
                                <input type="text" name="" id="">
                            </div>
                            <div class="field">
                                <p class="title">Advance Amount</p>
                                <input type="text" name="" id="" disabled>
                            </div>
                            <div class="field">
                                <p class="title">House Type</p>
                                <select name="cname" id="" class="house-type">
                                    <option value="">Assam Type</option>
                                    <optgroup label="RCC">
                                    <option value="G+1">G+1</option>
                                    <option value="G+2">G+2</option>
                                </optgroup>
                                </select>
                            </div>
                            <div class="field">
                                <p class="title">Site Description<span>(*optional)</span></p>
                                <input type="text" name="" id="">
                            </div>
                            <div class="field">
                                <p class="title">Project Duration <span>in years</span> <span>(*optional)</span></p>
                                <input type="text" name="" id="">
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
//ADD EMPLOYEE
function addEmployee() {
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML = '';
    const childPopup = `<div class="add-employee-popup blur">
                        <div class="form">
                            <h2>Add an Employee</h2>
                            <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                            <hr>

                            <div class="grid gtc-3 gap-10">
                                <div class="field">
                                    <p class="title">Select Employee</p>
                                    <select name="employee" id="" class="employee">
                                        <option value="">Panchanan Deka</option>
                                        <option value="">Kankan Jyoti Nath</option>
                                        <option value="">Mintu Sharma</option>
                                    </select>
                                </div>
                                <div class="field">
                                    <p class="title">Select phase<span>(*optional)</span></p>
                                    <select name="phase" id="" class="phase">
                                        <option value="">Phase I</option>
                                        <option value="">Phase II</option>
                                        <option value="">Phase III</option>
                                    </select>
                                </div>
                                <div class="field">
                                    <p class="title">Select sub task<span>(*optional)</span></p>
                                    <select name="sub-task" id="" class="sub-task">
                                        <option value="">Slab Casting</option>
                                        <option value="">Phase II</option>
                                        <option value="">Phase III</option>
                                    </select>
                                </div>
                            </div>
                            <hr>
                            <div class="field">
                                <button class="btn-secondary" type="button" onclick="addNewEmployee">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-circle"
                                        class="">
                                        <path fill=""
                                            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                                        </path>
                                    </svg>
                                    <span class="text">Add Employee</span>
                                </button>
                            </div>

                            <div class="grid gtc-2 gap-10 employeeField hide">
                                <div class="field">
                                    <p class="title">Name</p>
                                    <input type="text" name="" id="" placeholder="Add Employee">
                                </div>
                                <div class="field">
                                    <p class="title">Designation</p>
                                    <input type="text" name="" id="" placeholder="Designation">
                                </div>
                                <div class="field">
                                    <p class="title">Select phase<span>(*optional)</span></p>
                                    <select name="sub-task" id="" class="sub-task">
                                        <option value="">Phase I</option>
                                        <option value="">Phase II</option>
                                        <option value="">Phase III</option>
                                    </select>
                                </div>
                                <div class="field">
                                    <p class="title">Select sub task<span>(*optional)</span></p>
                                    <select name="sub-task" id="" class="sub-task">
                                        <option value="">Slab Casting</option>
                                        <option value="">Phase II</option>
                                        <option value="">Phase III</option>
                                    </select>
                                </div>
                            </div>
                            

                            <div class="action-btn flex align-center gap-10">
                                <button type="button" class="btn-success flex-1">Update</button>
                                <button type="button" class="btn-warning flex-1"
                                    onclick="closemainPopup()">Cancel</button>
                            </div>
                        </div>
                    </div>`
    mainPopup.innerHTML = childPopup;
}

//REMOVE EMPLOYEE
function removeEmployee() {
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML = '';
    const childPopup = `<div class="add-employee-popup blur">
                    <div class="form">
                        <h2>Remove an Employee</h2>
                        <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                        <hr>

                        <div class="addFlex flex align-center">
                            <div class="field">
                                <p class="title">Select emloyee</p>
                                <select name="cname" id="" class="house-type">
                                    <option value="">Assam Type</option>
                                    <optgroup label="RCC">
                                    <option value="G+1">G+1</option>
                                    <option value="G+2">G+2</option>
                                </optgroup>
                                </select>
                            </div>
                            <div class="field">
                                <p class="title">House Type</p>
                                <select name="cname" id="" class="house-type">
                                    <option value="">Assam Type</option>
                                    <optgroup label="RCC">
                                    <option value="G+1">G+1</option>
                                    <option value="G+2">G+2</option>
                                </optgroup>
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

//ADD A NEW CLIENT INSIDE A PROJECT
function addNewEmployee() {
    document.querySelector(`.employeeField`).classList.remove(`hide`);
}
//ADD SUB-TASK
function addSubTask() {
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML = '';
    const childPopup = `<div class="sub-tasks-popup blur">
                        <div class="form">
                            <h2>Add Sub-Tasks</h2>
                            <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                            <hr>
    
                            <div class="grid gtc-2 gap-10">
                                <div class="field">
                                    <p class="title">Sub-Task</p>
                                    <input type="text" name="" id="" placeholder="Sub-task">
                                </div>
                                <div class="field">
                                    <p class="title">Select phase</p>
                                    <select name="sub-task" id="" class="sub-task">
                                        <option value="">Phase I</option>
                                        <option value="">Phase II</option>
                                        <option value="">Phase III</option>
                                    </select>
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


//REMOVE SUB TASK
function removeSubTask() {
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML = '';
    const childPopup = `<div class="sub-tasks-popup blur">
                    <div class="form">
                        <h2>Remove Sub-Tasks</h2>
                        <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                        <hr>

                        <div class="addFlex flex align-center">
                            <div class="field flex align-center">
                                <input type="checkbox" name="" id="">
                                <p class="text">Plumbing</p>
                            </div>
                            <div class="field flex align-center">
                                <input type="checkbox" name="" id="">
                                <p class="text">Electricity</p>
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




// function validateInput() {
//     const field = document.querySelectorAll(`.field`);

//     field.forEach(val => {
//         const input = val.querySelector(`input`);
//         const errMsg = val.querySelector(`span.err`);

//         if (input.hasAttribute(`required`) && input.value.trim() === '') {
//             errMsg.classList.remove(`hide`);
//             field.classList.add(`error`);
//         } else {
//             errMsg.classList.add(`hide`);
//             field.classList.remove(`error`);
//         }
//     })
// }


// validateInput();