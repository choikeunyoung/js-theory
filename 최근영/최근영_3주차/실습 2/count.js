const btns = document.querySelectorAll("#btn");
const numCnt = document.querySelector("#num_count");
console.log(numCnt.textContent);
btns.forEach(function(event) {
    event.addEventListener("click", function(e) {
        if (e.currentTarget.value === "DECREASE") {
            numCnt.textContent -= 1;
            if (numCnt.textContent <= 0) {
                numCnt.classList.remove("even");
                numCnt.classList.remove("odd");
            }
            else {
                if (Number(numCnt.textContent) % 2 === 1) {
                    numCnt.classList.remove("even");
                    numCnt.classList.add("odd");
                }
                else {
                    numCnt.classList.remove("odd");
                    numCnt.classList.add("even");
                }
            }
        }
        else if (e.currentTarget.value === "RESET") {
            numCnt.textContent = 0;
            numCnt.classList.remove("even");
            numCnt.classList.remove("odd");
        }
        else if (e.currentTarget.value === "INCREASE") {
            numCnt.textContent = Number(numCnt.textContent) + 1;
            if (numCnt.textContent <= 0) {
                numCnt.classList.remove("even");
                numCnt.classList.remove("odd");
            }
            else {
                if (Number(numCnt.textContent) % 2 === 1) {
                    numCnt.classList.remove("even");
                    numCnt.classList.add("odd");
                }
                else {
                    numCnt.classList.remove("odd");
                    numCnt.classList.add("even");
                }
            }
        }
    })
})