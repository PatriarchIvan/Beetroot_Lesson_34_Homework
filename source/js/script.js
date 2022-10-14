window.addEventListener('DOMContentLoaded', () => {
    // 1 create section from js
    const mainBlock = document.querySelector('.main');
    const sectionBlock = document.createElement('section');
    const heading = document.createElement('h1');
    const paragraph = document.createElement('p');

    heading.textContent = 'Section title';
    paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus recusandae tempora ea sed qui quo possimus voluptates nisi excepturi. Quaerat tempora mollitia enim, excepturi quos sint, nemo beatae consequatur quo labore ut totam ab. Expedita eligendi iste cumque officiis inventore, tempore iusto reprehenderit autem sint natus aliquam fugit quas ad, laudantium earum dignissimos eveniet sequi quaerat tempora enim. Reiciendis perferendis numquam ad ex minus et officia aliquam aspernatur explicabo eos, amet praesentium nisi eveniet molestiae rem assumenda accusamus aliquid perspiciatis a omnis velit dolorem? Explicabo, sit consequuntur dolorum quaerat optio vel maiores quam illum! Facere eum quis explicabo esse accusamus!';
    sectionBlock.append(heading, paragraph);
    mainBlock.append(sectionBlock);
    // 2 create currency converter function
    const input = document.querySelector('#request');
    const btns = document.querySelectorAll('.buttons__btn');
    const result = document.createElement('div');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (isNaN(input.value)) {
                result.textContent = "You're entered a wrong data";
                result.classList.add('result')
                mainBlock.prepend(result);
            } else {
                result.textContent = `You can buy ${(input.value/btn.dataset.rate).toFixed(2)} ${btn.textContent} for the ${input.value} UAH`;
                result.classList.add('result')
                mainBlock.prepend(result);
            }

        })
    });

    // 3 Create modal
    const createBtn = document.querySelector('.create__btn');
    const modal = document.createElement('div');
    const closeBtn = document.createElement('span');
    const modalText = document.createElement('p');
    modal.append(closeBtn, modalText);
    modal.classList.add('modal');
    closeBtn.classList.add('close__btn');
    modalText.classList.add('modal__text');
    modalText.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus recusandae tempora ea sed qui quo possimus voluptates nisi excepturi. Quaerat tempora mollitia enim, excepturi quos sint, nemo beatae consequatur quo labore ut totam ab. Expedita eligendi iste cumque officiis inventore, tempore iusto reprehenderit autem sint natus aliquam fugit quas ad, laudantium earum dignissimos eveniet sequi quaerat tempora enim. Reiciendis perferendis numquam ad ex minus et officia aliquam aspernatur explicabo eos, amet praesentium nisi eveniet molestiae rem assumenda accusamus aliquid perspiciatis a omnis velit dolorem? Explicabo, sit consequuntur dolorum quaerat optio vel maiores quam illum! Facere eum quis explicabo esse accusamus!';
    
    createBtn.addEventListener('click', () => {
        modal.classList.add('active');
        console.log('click');
        document.body.prepend(modal);
        console.log(modal);
    })

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    })
});