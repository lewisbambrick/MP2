const selectionButtons = document.querySelectorAll('[data-selection]')

/**
 * allows the user to make a move"
 */
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
       const selectionName = selectionButton.dataset.selection
        makeSelection(selectionName)
    })
})

function makeSelection(selection){
    console.log(selection);
}