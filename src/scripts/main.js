console.log('main.js loaded')

const classActive = `active`
const classDNone = `d-none`

const dataElementAttr = `data-element`
const dataActiveAttr = `data-active`

const alertEls = document.querySelectorAll(`[data-element="alert"]`)
const btnOptionEls = document.querySelectorAll(`[data-element="btn-option"]`)

alertEls.forEach(function (alertEl) {
    const btnCloseAlertEl = alertEl.querySelector(`[${dataElementAttr}="btn-close-alert"]`)

    if (btnCloseAlertEl) {
        btnCloseAlertEl.addEventListener(`click`, function (event) {
            event.preventDefault()
            alertEl.remove()
        })
    }
})

btnOptionEls.forEach(function (btnOptionEl) {
    btnOptionEl.classList.remove(classActive)
    btnOptionEl.addEventListener(`click`, function(event) {
        event.preventDefault()
        btnOptionEl.toggleAttribute(dataActiveAttr, true)
    })
})