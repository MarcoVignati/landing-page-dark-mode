const widthH1 = document.querySelector('#hero-title').clientWidth;
console.log(widthH1)

document.getElementById('hero-text').style.width = `${widthH1}px`


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);