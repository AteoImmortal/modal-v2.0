class Modal{
    constructor(className, modelData){
        this.modalHtml = this.createModalHtml(modelData);
        this.addOpenModalEvent(className);
    }

    addModalRemove(){
        this.modalHtml.addEventListener('click', (event) => {
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

    createModalHtml({displayCloseBtn, headerTitle, contentTitle, content}){
        const modalElement = document.createElement('div');
        modalElement.classList.add('modal');
        modalElement.innerHTML = `
        <div class="modal">
            <div class="modal__wrapper">
                <div class="modal__header">
                    <h3>${headerTitle}</h3>
                    ${displayCloseBtn ? '<button class="close__btn">X</button>' : ''}
                </div>
                <div class="modal__content">
                    <h2 class="modal__content__title">${contentTitle}</h2>
                    <div class="modal__content__description">${content}</div>
                </div>
            </div>
        </div> `
        return modalElement;
    }
}

window.addEventListener('load', ()=>{
    const modalData = {
        displayCloseBtn: true,
        headerTitle: 'Hello modal view',
        contentTitle: 'Hello content title',
        content: "<p>hello</p>"
    }
    new Modal('click__btn', modalData);
})