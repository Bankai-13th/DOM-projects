
        let inputtags = document.getElementsByTagName("input")
        let Percent = document.getElementById("profit%")
        let def = document.querySelector("#def")

        let button = document.querySelector("button")
        inputtags = [...inputtags];
        let obj = {}

        button.addEventListener("click", (e) => {
            e.preventDefault()
            inputtags.forEach((i) => {
                obj[i.name] = i.value
                i.value = ""
            })
            console.log(obj)
            //function for profit and loss
            let result = profitorloss(obj)
            function profitorloss({ cost, sell }) {
                let profit = sell - cost;
                let profitPer = (profit / cost) * 100;
                return profitPer

            }
            // conditional rendering
            if (obj.cost == "" || obj.sell == "") {
                def.innerHTML = "Provide all data"
            } else if (result > 0) {
                def.innerHTML = "Profit Percentage "
                Percent.innerText = result + "%"
            } else if (result < 0) {
                def.innerHTML = "Loss Percentage "
                Percent.innerText = Math.abs(result) + "%"
            }


        })
