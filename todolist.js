let userListDOM = document.querySelector('#userList')
let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
function liveToastFunction() {
    if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {
            const toast = new bootstrap.Toast(toastLiveExample)

            toast.show()
        })
    }
}


function formHandler(event) {
    event.preventDefault()
    const taskName = document.querySelector('#task')
    if (taskName.value) {
        addItem(taskName.value)
        taskName.value = ""
    }
    else {
        liveToastFunction()
    }
}



const addItem = (task) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${task} 
     <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">  
         
  `
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
    )
    userListDOM.append(liDOM)

}
