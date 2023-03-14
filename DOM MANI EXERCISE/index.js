// this is a program to add to a shopping list and deleting from the same list

window.addEventListener('load', () => {
    const shoppingItem = document.querySelector('#item');
    const shoppingList = document.querySelector('#list');
    const submit = document.querySelector('#submit');

    submit.addEventListener('click', event => {
        const itemValue = shoppingItem.value;
        shoppingItem.value = '';

        const item = document.createElement("li");
        const spa = document.createElement("span");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = 'Delete';

        spa.textContent = itemValue;
        item.appendChild(spa);
        item.appendChild(deleteButton);
        shoppingList.appendChild(item)

        // define the event handler to attach to the DOM created element
        function clickHandler() {
            shoppingList.removeChild(item);
        }
        deleteButton.addEventListener('click', clickHandler);
        shoppingItem.focus()
    })
})