
        let display = document.querySelector('#display')
        let parent = document.querySelector("#parent")
        let button = document.querySelectorAll('.text')



        parent.addEventListener("click", (e) => {
            e.preventDefault()
            display.innerHTML += e.target.innerText
            if (e.target.innerText == "=") {
                let arr = display.innerHTML.split("")
                arr.pop()
                display.innerHTML = eval(arr.join(""))

            }
            if (e.target.innerText == "C") {
                display.innerHTML = ""
            }
        }, true)
