const $controls = document.querySelectorAll('.control')

let currentItem = 0;

const $img = document.querySelectorAll('.item')

const maxItems = $img.length;

$controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left')

        if(isLeft) {
            currentItem -=1;
        } else {
            currentItem += 1
        }

        if(currentItem >= maxItems) {
            currentItem = 0
        }

        if(currentItem < 0) {
            currentItem = maxItems - 1
        }

        $img[currentItem].scrollIntoView({inline: 'start', behavior:'smooth', block:'nearest'})
    })
})
