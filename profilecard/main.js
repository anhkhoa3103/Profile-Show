const dialog_open = document.getElementById('dialogOpen');
const dialog_close = document.getElementById('dialogClose');
const model_container = document.getElementById('model-container');

dialog_open.addEventListener('click', ()=>{
    //Add class show
    model_container.classList.add('show');
})
dialog_close.addEventListener('click', ()=>{
    model_container.classList.remove('show');
})