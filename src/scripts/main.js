console.log('main.js loaded')

const classDNone = `d-none`
const dataElementAttr = `data-element`

const alertEls = document.querySelectorAll(`[data-element="alert"]`)

alertEls.forEach(function (alertEl) {
    const btnCloseAlertEl = alertEl.querySelector(`[${dataElementAttr}="btn-close-alert"]`)

    if (btnCloseAlertEl) {
        btnCloseAlertEl.addEventListener(`click`, function (event) {
            event.preventDefault()
            alertEl.remove()
        })
    }
})