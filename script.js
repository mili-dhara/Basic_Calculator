window.onload = () => {
    const buttons = document.querySelectorAll(".btn");
    const screen = document.querySelector(".screen");
    const ans = document.querySelector('#ans');
    const clear = document.querySelector('#btn-clear');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            screen.value += e.target.innerHTML;
        })
    })

    ans.addEventListener('click', (e) => {
        if(!screen.value) {
            screen.value = "Enter value:";
        }
        else {
            screen.value = eval(screen.value);
        }
    })

    clear.addEventListener('click', () => {
        screen.value = "";
    })
}