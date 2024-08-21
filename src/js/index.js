const adviceNumber = document.querySelector(".advice-id")
const adviceText = document.querySelector(".advice-text")
const btnAdviceGenerator = document.querySelector("#btn-advice-update")

async function getAdvice() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice")
    
        if (!response.ok) {
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
        }

        const adviceContent = await response.json();
        const adviceId = `Advice #${adviceContent.slip.id}`;
        const adviceDescription = `"${adviceContent.slip.advice}"`;
        
        adviceNumber.innerHTML = adviceId
        adviceText.innerHTML = adviceDescription
    
    }catch (error) {
        console.error("Erro ao tentar buscar as informações da API", error)
    }
}

    btnAdviceGenerator.addEventListener("click", getAdvice);

    getAdvice();


// async function randomAdiviceGenarator() {
//     const url= "https://api.adviceslip.com/advice"
//     const response = await fetch(url);
//     const json = await response.json();
//     console.log(json);

// }

// randomAdiviceGenarator()