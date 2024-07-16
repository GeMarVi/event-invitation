import JSConfetti from 'js-confetti'

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti({
            confettiColors: [
                '#000000', '#B9B8B5', '#B9B8B5', '#FFFFFF', '#3d8167', '#FFFFFF'
            ],
            confettiRadius: 6,
            confettiNumber: 500,
        })
    }, 1000);
}) 