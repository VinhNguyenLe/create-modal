const modal = document.querySelector('.modal')
const btnOpenModal = document.querySelector('.button')
const iconCloseModal = document.querySelector('.modal__header i')
const btnCloseModal = document.querySelector('.modal__btn')

toggleModal = () =>{
    modal.classList.toggle("modal__hide")
}

btnOpenModal.addEventListener("click", toggleModal)
iconCloseModal.addEventListener("click", toggleModal)
btnCloseModal.addEventListener("click", toggleModal)
modal.addEventListener("click", (e) => {
    if(e.target == e.currentTarget){
        toggleModal()
        console.log(e.target)
        console.log(e.currentTarget)
    } else {
        console.log(e.target)
        console.log(e.currentTarget)
    }
})