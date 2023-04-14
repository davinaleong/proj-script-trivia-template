console.log('main.js loaded')

const finishedMessages = [
    "Congratulations!",
    "Well done!",
    "Good job!",
    "You're a real pro!",
    "You aced that quiz!"
]

const classActive = `active`
const classDNone = `d-none`

const dataElementAttr = `data-element`
const dataActiveAttr = `data-active`
const srcAttr = `src`

const alertEls = document.querySelectorAll(getDataElementAttr(`alert`))

// Buttons
const btnOptionEls = document.querySelectorAll(getDataElementAttr(`btn-option`))
const btnAnwserEls = document.querySelectorAll(getDataElementAttr(`btn-answer`))
const btnHelpEl = document.querySelector(getDataElementAttr(`btn-help`))

// Modals
const modalEls = document.querySelectorAll(`.modal`)
const helpModalEl = document.querySelector(getDataElementAttr(`help-modal`))
const imageModalEl = document.querySelector(getDataElementAttr(`image-modal`))
const optionsModalEl = document.querySelector(getDataElementAttr(`options-modal`))
const finishedHeadingEl = document.querySelector(getDataElementAttr(`finished-heading`))

alertEls.forEach(function (alertEl) {
    const btnCloseAlertEl = alertEl.querySelector(getDataElementAttr(`btn-close-alert`))

    if (btnCloseAlertEl) {
        btnCloseAlertEl.addEventListener(`click`, function (event) {
            event.preventDefault()
            alertEl.remove()
        })
    }
})

btnOptionEls.forEach(function (btnOptionEl) {
    toggleElement(btnOptionEl)

    btnOptionEl.addEventListener(`click`, function(event) {
        event.preventDefault()

        btnOptionEls.forEach(function (btnOptionEl) {
            btnOptionEl.removeAttribute(dataActiveAttr)
        })

        btnOptionEl.setAttribute(dataActiveAttr, true)
    })
})

btnAnwserEls.forEach(function (btnAnswerEl) {
    btnAnswerEl.addEventListener(`click`, function (event) {
        event.preventDefault()
        optionsModalEl.setAttribute(dataActiveAttr, true)
    })
})

if (finishedHeadingEl) {
    finishedHeadingEl.innerHTML = getFinishedMessage()
}

/// Modals
modalEls.forEach(function (modalEl) {
    modalEl.removeAttribute(dataActiveAttr)

    const btnCloseModalEl = modalEl.querySelector(getDataElementAttr(`btn-close-modal`))
    btnCloseModalEl.addEventListener(`click`, function (event) {
        event.preventDefault()
        modalEl.removeAttribute(dataActiveAttr)
    })
})

if(btnHelpEl && helpModalEl) {
    btnHelpEl.addEventListener(`click`, function (event) {
        event.preventDefault()

        helpModalEl.setAttribute(dataActiveAttr, true)
    })
}

if (imageModalEl) {
    const modalImgEl = imageModalEl.querySelector(getDataElementAttr(`image-modal-img`))
    const imgEls = document.querySelectorAll(`img`)
    imgEls.forEach(function (imgEl) {
        imgEl.addEventListener(`click`, function(event) {
            const src = imgEl.getAttribute(srcAttr)
            modalImgEl.setAttribute(srcAttr, src)

            imageModalEl.setAttribute(dataActiveAttr, true)
        })
    })
}

/// Functions
function getDataElementAttr(name) {
    return `[${dataElementAttr}="${name}"]`
}

function toggleElement(element, toggle = false) {
    if (element) {
        if (toggle) {
            element.classList.add(classActive)
            element.setAttribute(dataActiveAttr, true)
        } else {
            element.classList.remove(classActive)
            element.removeAttribute(dataActiveAttr)
        }
    }
}

function getFinishedMessage() {
    return finishedMessages[Math.floor(Math.random() * finishedMessages.length)]
}