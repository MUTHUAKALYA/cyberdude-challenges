const quoteEl = document.querySelector("#quote");
const apiUrl = "https://api.adviceslip.com/advice";

const buttonEl = document.querySelector("#button");
buttonEl.style.display = "none";

// reload btn
buttonEl.addEventListener("click", () => {
  window.location.href = "./";
});

// async function
async function getAdvicesData() {
  try {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Network error: ", error);
  }
}

async function showdata() {
  const adviceData = await getAdvicesData();
  quoteEl.textContent = adviceData.slip.advice;
  // reload btn view
buttonEl.style.display = "block";
}

showdata();




