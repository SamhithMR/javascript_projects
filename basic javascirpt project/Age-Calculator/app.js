const container = document.querySelector(".container");
const input = container.children[1];
// const error;

let today = new Date().toISOString().split("T")[0];
input.setAttribute("max", today);

input.addEventListener('input', displayAge);


function getAge(e) {
  var date = e.target.value
  return date
}

function calcAge(e) {
  let dob = new Date(getAge(e)); // Date of birth
  let today = new Date(); // Today's date

  let ageYears = today.getFullYear() - dob.getFullYear();
  let ageMonths = today.getMonth() - dob.getMonth();
  let ageDays = today.getDate() - dob.getDate();

  // If the person has not yet had their birthday this year, subtract 1 from their age in years
  if (ageMonths < 0 || (ageMonths == 0 && ageDays < 0)) ageYears--;

  // If the person has not yet had their birthday this month, subtract 1 from their age in months
  if (ageDays < 0) ageMonths--;

  let val = 12;
  if (ageMonths >= 0) val = 0

  let val2 = 30
  if ([0, 2, 4, 6, 8, 10].includes(dob.getMonth()))val2 = 31
  if (ageDays >= 0) val2 = 0
  

  // return `Age: ${ageYears} years, ${val + ageMonths} months, ${val2 + ageDays} days`;
return [ageYears, val+ageMonths, val2+ageDays]
}

function displayAge(e) {
  let val3 = calcAge(e)
  document.querySelector(`.desc`).textContent = `Your Age is :${val3[0]}`
  document.querySelector(`#years`).textContent = val3[0]
  document.querySelector(`#months`).textContent = val3[1]
  document.querySelector(`#days`).textContent = val3[2]
}