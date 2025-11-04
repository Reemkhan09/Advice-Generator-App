
const adviceId = document.getElementById("Advice_id");
const adviceText = document.getElementById("Advice_Text");
const button = document.getElementById("Dice-Btn");

async function getQuotes() {

  try{

    const response = await fetch("https://api.adviceslip.com/advice");
  
    const data = await response.json();
    adviceId.textContent = `Advice #${data.slip.id}`;
    adviceText.textContent = `"${data.slip.advice}"`;
   
  } catch (error) {
    console.error("Error:" ,error)
  }


}

button.addEventListener("click", getQuotes)

