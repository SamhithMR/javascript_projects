//to get a input value inside form
let input = document.querySelector(".container").elements.namedItem("binary")

// acept only 0 & 1
input.addEventListener('input', (e) => {
    return e.target.value = e.target.value.replace(/[^0-1]/g, '');
});

document.querySelector("form").addEventListener("submit", () => {
    event.preventDefault(); //prevent refreshing page on submitting form
    let binary = input.value
    let sum = 0;
    let j = 0;
    //multiply input[length of input]2**(1), input[length of input -1]*2**(2),....input[o]*2**(length of input)
    for (let i = binary.length - 1; i >= 0; i--) {
        sum += (+binary[i] * (2 ** j))
        j = j + 1;
    }
    document.querySelector(".result").textContent = `Decimal Number:${sum}`
})