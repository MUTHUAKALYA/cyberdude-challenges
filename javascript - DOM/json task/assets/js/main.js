import details from "../js/team.json";
// getting detailsblock
const detailsblockEl = document.getElementById("detailsblock");
console.log(detailsblockEl);

details.forEach((studentDetails)=>{
    const cardcontainerEl = document.createElement("div");
    cardcontainerEl.className = "flex bg-gray-200 p-10 ";
    cardcontainerEl.innerHTML = `
    <div class="imgel">
    <img src="${studentDetails.image}" alt="firstpersone_image">
    </div>
    <div class="textel">
    <span><strong>First Name:</strong>${studentDetails.firstName}</span>
    <span><strong>Last Name:</strong>${studentDetails.lastname}</span>
    <span><strong>Register Number:</strong>${studentDetails.registerNumber}</span>
    <span><strong>Tutor Name:</strong>${studentDetails.tutorName}</span>
    <span><strong>Department:</strong>${studentDetails.department}</span>
    <span><strong>Dayscholar:</strong>${studentDetails.DayScholar}</span>
    <span><strong>Personal Details :</strong></span>
    <span><strong>Mobile Number:</strong>${studentDetails.personalDetails.mobileNumber}</span>
    <span><strong>Email Id:</strong>${studentDetails.personalDetails.mailId}</span>
    <span><strong>Address:</strong>${studentDetails.personalDetails.address}</span>
    <span><strong>Languages Known:</strong>${studentDetails.languagesKnown.join(", ")}</span>
    </div>`;
    
    detailsblockEl.append(cardcontainerEl);    
})
