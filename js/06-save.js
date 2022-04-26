window.addEventListener("load", () => {
  function returnData() {
    if ((localStorage.length = 0)) {
      document.querySelector("h2").innerHTML = "Nothing has been saved yet!";
    } else {
      let x = document.querySelector(".data");
      let y = document.createElement("tr");
      let newItemName = document.createElement("td");
      let newItemPhone = document.createElement("td");
      for (i = 1; i < localStorage.length; i++) {
        newItemName.innerHTML = localStorage.getItem("name");
        newItemPhone.innerHTML = localStorage.getItem("phone");
        x.appendChild(y);
        y.appendChild(newItemName);
        y.appendChild(newItemPhone);
        localStorage.removeItem("name");
        localStorage.removeItem("phone");
        document.querySelector("h2").innerHTML = "";
      }
    }
  }
  setInterval(() => {
    returnData();
  }, 2000);
});
