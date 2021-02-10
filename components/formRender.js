function formRender(selector) {
        // input validation 
        selector = selector.trim()

    if (typeof selector !== 'string' ||            
        selector === '') {                          
        console.error('ERROR: Invalid selector format');
        return false;
    }
        //logic

    const DOM = document.querySelector(selector);

    if(!DOM) {
        console.error ('ERROR: Cannot find given selector')
        return false
    }
        let HTML  = `<input data-validation="name" type="text" placeholder="Name" required>
        <input data-validation="email" type="text" placeholder="Email" required>
        <input data-validation="number" type="text" placeholder="Number" required>
        <textarea data-validation="text" placeholder="Message" required></textarea>
        <button class="button" type="submit">Submit now</button>`;

        // return result
    DOM.innerHTML = HTML;
}

export {formRender}