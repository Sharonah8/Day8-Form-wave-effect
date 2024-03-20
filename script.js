// gives us a nodelist of all labels
const labels = document.querySelectorAll('.form-control label')



labels.forEach(label => {
    label.innerHTML = label.innerText
    // split the labels into an array with the different letters
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        // turn it back into a string
        .join('')
})

