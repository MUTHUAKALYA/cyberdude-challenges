//getting calculator app form element submit button
const buttonEl = document.getElementById("button");
console.log(buttonEl);
//getting formelement
const formEl = document.getElementById("nameform");
console.log(formEl);
//getting first input element [name of the event]
const nameInputEl = formEl.elements[0];
console.log(nameInputEl);
//getting second input element [choose base currency]
const currencyEl = formEl.elements[1];
console.log(currencyEl);
//getting third input element [add people]
const addPeopleInputEl = formEl.elements[2];
console.log(addPeopleInputEl);
//getting third input element's add button [Add people]
const addPeopleButtonEl = formEl.elements["addbutton"];
console.log(addPeopleButtonEl);
//getting Fourth input element
const amountInputEl = formEl.elements[4];
console.log(amountInputEl);

// getting addName button in add people input section
const addNameEl = document.getElementById("addName");

const chipsEl = document.getElementById("chips");
// const iconEl =document.querySelector("button #icon")

// const maindivEl = document.querySelector("div #maindiv")
// console.log(maindivEl)
// iconEl.addEventListener("click",()=>{
// maindivEl.classList.add("hidden")
// })

addPeopleInputEl.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (addPeopleInputEl.value !== "") {
    addPeopleButtonEl.removeAttribute("disabled");
    addPeopleButtonEl.classList.add("hover:bg-pink-200");

    for (let i = 0; i < addPeopleInputEl.value; i++) {
      const inputEl = `<input
   type="text"
   name="${i+1}personname"
   id="${i+1}personname"
   placeholder="Name"
   id="nameoftheevent"
   class="py-3 px-5 rounded-lg outline-none text-gray-400 text-md "
   autocomplete="off"
   required
 />`;
      addNameEl.innerHTML += inputEl;
    }
  }else {
    addPeopleButtonEl.setAttribute("disabled", null);
    addPeopleButtonEl.classList.remove("hover:bg-pink-200");
  }
});

formEl.addEventListener("keyup", () => {
  if (
    nameInputEl.value !== "" &&
    currencyEl.value !== "" &&
    addPeopleInputEl.value !== "" &&
    amountInputEl.value !== ""
  ) {
    buttonEl.removeAttribute("disabled");
    buttonEl.classList.add("hover:bg-pink-200");
  } else {
    buttonEl.setAttribute("disabled", null);
    buttonEl.classList.remove("hover:bg-pink-200");
  }
});
// console.log(arrayel)

//creating an empty array to push formentries
const localstoragearrayel = [];
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  window.alert("form submitted succesfully");
  console.log(amountInputEl.value / addPeopleInputEl.value);

  const formData = new FormData(formEl);

  const formValueObj = Object.fromEntries(formData.entries());
  console.log(formValueObj);

  const newSplitAmountData = [];

  //get existing localstorage value,if it exists
  const existingSplitAmountData = localStorage.getItem("splitAmountData");

  //parse that string into javascript value
  const existingSplitAmountArr = JSON.parse(existingSplitAmountData);

  if (existingSplitAmountArr) {
    // create a new array and push the existing localstorage value into new array
    existingSplitAmountArr.push(formValueObj);
    // push the new array (which has all the info to the localstorage)
    localStorage.setItem(
      "splitAmountData",
      JSON.stringify(existingSplitAmountArr)
    );
  } else {
    newSplitAmountData.push(formValueObj);
    localStorage.setItem("splitAmountData", JSON.stringify(newSplitAmountData));
  }

  formEl.reset();
  window.location.reload()
});
function getSplitAmountData() {
  //getting all data from the localstorage
  const gettingDatafromLocal = localStorage.getItem("splitAmountData");
  //convert into Javascript object
  const gettingDatafromLocalArr = JSON.parse(gettingDatafromLocal);
  console.log(gettingDatafromLocalArr);
   // if no task created
   if (gettingDatafromLocalArr && gettingDatafromLocalArr.length > 0) {
    bookingListCard.style.display = "block";
    // getting output task list in UI
    const tableEl = document.getElementById("bookingListTable");

    tableEl.innerHTML = "";

    const finalData = gettingDatafromLocalArr
      .map((gettingDatafromLocal, index) => {
        console.log(gettingDatafromLocal)
        return `
        <tr>
                  <td class="py-2 px-4  border border-darkPrimaryColor">${
                    index + 1
                  }</td>
                 
                  <td class="py-2 px-4 border border-darkPrimaryColor">${
                    gettingDatafromLocal.nameoftheevent
                  }</td>
                  <td class="py-2 px-4 border border-darkPrimaryColor">${
                    gettingDatafromLocal.totalamount
                  }</td>

                  <td class="py-2 px-4 border border-darkPrimaryColor">${
                    gettingDatafromLocal.personname
                  }</td>

                  <td class="py-2 px-4 border border-darkPrimaryColor">${
                    amountInputEl.value / addPeopleInputEl.value
                  }</td>

                  <td class="py-2 px-4 border border-darkPrimaryColor"> <button type="submit" class=" deleteBtn px-3 py-2 rounded bg-darkPrimaryColor hover:bg-lightPrimaryColor hover:text-black text-gray-100 font-bold">Delete </button>
                  </td>
                 
                </tr>                  
        `;
      })
      .join(" ");
    console.log(finalData);
    tableEl.innerHTML += finalData;
  } else {
    // Remove the "taskData" key from localStorage if there are no tasks
    localStorage.removeItem("bookingData");
    bookingListCard.style.display = "none";

    console.log(" Not booked Yet ..!");
  }
  // window.location.reload();
}
getSplitAmountData();
