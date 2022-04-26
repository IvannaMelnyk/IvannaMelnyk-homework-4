let inputName = document.querySelector(".name-input ");
let inputPhone = document.querySelector(".phone-input");
let saveButton = document.querySelector(".submit");
let result;
let phoneResult;

function nameValidation() {
  if (inputName.value.length == 0) result = false;
  else result = true;
}

//бонус
function phoneValidation(phone) {
  if (phone.length == 0) phoneResult = false;
  else phoneResult = true;
  for (let i = 0; i < phone.length; i++) {
    if (phone[i] < "0" || phone[i] > "9") {
      if (phone[i] != "+" && phone[i] != " ") phoneResult = false;
    }
  }
}

function inputValid() {
  if (result == true) inputName.classList = "name-input valid";
  else inputName.className = "name-input invalid";
  if (phoneResult == true) inputPhone.classList = "phone-input valid";
  else inputPhone.className = "phone-input invalid";
}

saveButton.addEventListener("click", function () {
  if (inputName.value.length == 0) alert("Add input name");
  else console.log(inputName.value);
  nameValidation();
  phoneValidation(inputPhone.value);
  if (phoneResult == false)
    alert("use only 0..9, + in the phone number without another symbols");
  if (phoneResult == true && result == true) {
    let item = {
      name: inputName.value,
      phone: inputPhone.value,
    };
    localStorage.setItem("item", JSON.stringify(item));
    alert("Name: " + inputName.value + "  Phone: " + inputPhone.value);
    localStorage.setItem("phone", inputPhone.value);
    localStorage.setItem("name", inputName.value);
  }
  inputValid();
});

