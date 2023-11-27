class Modal{
    constructor(className){
        this.modalHtml = this.createModalHtml();
        this.addOpenModalEvent(className);
    }

    addModalRemove(){
        this.modalHtml.addEventListener('click', (event) => {
            console.log(event.target)

            if(event.target.className === 'modal' || event.target.className === 'close__btn' ){
                this.modalHtml.remove();
            }
        })
    }

    addOpenModalEvent(classForEvent){
        const actionElement = document.querySelector(`.${classForEvent}`);
        if(!actionElement){
            console.log('ActionElement not found');
            return;
        }

        actionElement.addEventListener('click', () => {
            document.body.appendChild(this.modalHtml);
            this.addModalRemove();
        })
    }

    createModalHtml(){
        const modalElement = document.createElement('div');
        modalElement.classList.add('modal');
        modalElement.innerHTML = `
        <div class="modal">
            <div class="modal__wrapper">
                <div class="modal__header">
                    <h3>Hello</h3>
                    <button class="close__btn">X</button>
                </div>
                <div class="modal__content">
                    <h2 class="modal__content__title">Content title</h2>
                    <p class="modal__content__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ducimus.</p>
                </div>
            </div>
        </div> `
        return modalElement;
    }
}

window.addEventListener('load', ()=>{
    new Modal('click__btn');
})