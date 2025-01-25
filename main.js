const themeToggle = document.querySelector('[data-theme_toggle]')
const themes = ['💻', '☀️', '🌑']

function toggle(evt) {
    const currentTheme = themeToggle.textContent
    let currentIndex = themes.indexOf(currentTheme)
    currentIndex++

    let theme = currentIndex < themes.length ? themes[currentIndex] : themes[0]
    themeToggle.textContent = theme
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
}

themeToggle?.addEventListener('click', toggle)

document.addEventListener('DOMContentLoaded', () => {
    if (theme) { // theme should be assigned in <head> script
        themeToggle.textContent = theme // update btn with stored theme
    }

    document.documentElement.classList.add('_loaded') // show btn with updated textContent
})
