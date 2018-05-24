var inputField = document.querySelectorAll('.controlers input');
console.log(inputField);

function updateImageFunction() {
    var suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

for (var i = 0; i < inputField.length; i++) {
    inputField[i].addEventListener('change', updateImageFunction);
    inputField[i].addEventListener('mousemove', updateImageFunction);
}