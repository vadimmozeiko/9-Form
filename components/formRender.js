function formRender(selector) {
        // input validation 
        



        //logic

    const DOM = document.querySelector(selector);

    let HTML  = `<input data-validation="name" type="text" placeholder="Name" required>
    <input data-validation="email" type="text" placeholder="Email" required>
    <input data-validation="number" type="text" placeholder="Number" required>
    <textarea data-validation="text" placeholder="Message" required></textarea>
    <button class="button" type="submit">Submit now</button>`;

    DOM.innerHTML = HTML;
}

export {formRender}