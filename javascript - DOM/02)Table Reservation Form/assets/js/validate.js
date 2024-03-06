import JustValidate from "just-validate";
import { formatMyDate} from "./utils"

const formEl = document.getElementById("table-reservation-form");
console.log(formEl);
const bookingListCard = document.getElementById("bookingListCard");

const validateForm = new JustValidate(formEl, {
  validateBeforeSubmitting: true,
});

validateForm.addField(
  "#fullName",
  [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 20,
    },
  ],
  { errorLabelCssClass: ["form-error"] }
);

validateForm.addField(
  "#phoneNumber",
  [
    {
      rule: "required",
    },
    {
      rule: "number",
    },
    {
      rule: "maxLength",
      value: 10,
    },
    {
      rule: "minLength",
      value: 10,
    },
  ],
  { errorLabelCssClass: ["form-error"] }
);

validateForm.addField(
  "#email",
  [
    {
      rule: "required",
    },
    {
      rule: "email",
    },
  ],
  { errorLabelCssClass: ["form-error"] }
);

validateForm.addField(
  "#reservationDate",
  [
    {
      rule: "required",
    },
  ],
  { errorLabelCssClass: ["form-error"] }
);

validateForm.addField(
  "#reservationTime",
  [
    {
      rule: "required",
    },
  ],
  { errorLabelCssClass: ["form-error"] }
);

validateForm.addField(
  "#numberOfGuests",
  [
    {
      rule: "required",
    },
    {
      rule: "number",
    },
  ],
  { errorLabelCssClass: ["form-error"] }
);

validateForm.addField(
  "#tablePreference",
  [
    {
      rule: "required",
    },
  ],
  { errorLabelCssClass: ["form-error"] }
);

validateForm.onSuccess((e) => {
  const formData = new FormData(formEl).entries(); //Array method.
  // const arrayData = [... new FormData(formEl).values()];
  // console.log(arrayData);
  const objForm = Object.fromEntries(formData);
  console.log(objForm);
  // creating new array
  const newBookingData = [];
  // getting existing localStorage value (if it's exist ?)
  const existingBookingData = localStorage.getItem("bookingData");
  //convert string to javascript obj/arr
  const existingBookingArray = JSON.parse(existingBookingData);

  if (existingBookingArray) {
    // pushing the existing form value to existingTaskArray
    existingBookingArray.push(objForm);
    // setting the existingTaskArray value to localStorage as json stringify form
    localStorage.setItem("bookingData", JSON.stringify(existingBookingArray));
  } else {
    // if there is no existing data push to newTaskData array
    newBookingData.push(objForm);
    // setting the newarray value to localStorage as json stringify form
    localStorage.setItem("bookingData", JSON.stringify(newBookingData));
  }
  alert("Your table has been reserved");
  getAllTaskData();
  formEl.reset();
});

// Add an event listener for the delete buttons using a class
const tableEl = document.getElementById("bookingListTable");
tableEl.addEventListener("click", function (e) {
  if (e.target.classList.contains("deleteBtn")) {
    // Get the parent row of the delete button
    const row = e.target.closest("tr");

    // Get the index of the row in the table
    const rowIndex = Array.from(tableEl.children).indexOf(row);

    // Get the existing task data from localStorage
    const existingBookingData = localStorage.getItem("bookingData");
    const existingBookingArray = JSON.parse(existingBookingData);

    // Remove the task corresponding to the clicked row index
    alert("Are you sure wanna to cancel this reservation?")
    existingBookingArray.splice(rowIndex, 1);

    // Update the localStorage with the modified task data
    localStorage.setItem("bookingData", JSON.stringify(existingBookingArray));

    // Update the UI
    getAllTaskData();
  }
});

function getAllTaskData() {
  // getting all data from the localStorage
  const bookingData = localStorage.getItem("bookingData");
  // coverting to JS form
  const bookingDataArr = JSON.parse(bookingData);
  // if no task created
  if (bookingDataArr && bookingDataArr.length > 0) {
    bookingListCard.style.display = "block";
    // getting output task list in UI
    const tableEl = document.getElementById("bookingListTable");

    tableEl.innerHTML = "";

    const finalData = bookingDataArr
      .map((bookingData, index) => {
        return `
        <tr>
                  <td class="py-2 px-4  border border-pink-800">${
                    index + 1
                  }</td>
                  <td class="py-2 px-4 border border-pink-800">${
                    bookingData.fullName
                  }</td>
                  <td class="py-2 px-4 border border-pink-800">${
                    bookingData.phoneNumber
                  }</td>
                  <td class="py-2 px-4 border border-pink-800">${
                    bookingData.email
                  }</td>
                  <td class="py-2 px-4 border border-pink-800">${
                    formatMyDate(bookingData.date)
                  }</td>
                 
                  <td class="py-2 px-4 border border-pink-800">${
                    bookingData.numberOfGuests
                  }</td>
                  <td class="py-2 px-4 border border-pink-800">${
                    bookingData.tablePreference
                  }</td>
                  <td class="py-2 px-4 border border-pink-800"> <button type="submit" class=" deleteBtn px-3 py-2 rounded bg-pink-800 hover:bg-pink-900 text-gray-100 font-bold">Cancel </button>
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
}
getAllTaskData();



// const mycurrentDate = formatMyDate('2013-12-22')
// console.log(mycurrentDate)

// const rawDate = "2013-12-22";
// const myDate = new Date(rawDate);

// // console.log(new Date(rawDate).toLocaleTimeString())

// const currentDate = myDate.getDate()
// const currentMonth = myDate.toLocaleString("en-IN",{
//   month:"short"
// })
// const currentYear = myDate.getFullYear()

// const finalDate = `${currentDate},${currentMonth}-${currentYear}`

// console.log(finalDate)
