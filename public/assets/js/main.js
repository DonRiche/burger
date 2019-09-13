$(document).ready(() => {
    $('.burger-list-item > button').on('click', (evt) => {
        console.log('click', evt.currentTarget.dataset.id)
    })
})