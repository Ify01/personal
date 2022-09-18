const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");
const sideMenu = document.getElementById("sidemenu");

const openTab = function (tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
};

const openMenu = function () {
  sideMenu.style.right = "0";
};

const closeMenu = function () {
  sideMenu.style.right = "-200px";
};

const scriptURL =
  "https://script.google.com/macros/s/AKfycby1PLsdlu0vr-rilP59oA7Y38_TJDkN2tnbZr4kUDXIiCfyfDfcdOM5rnfEn-J97_Lw9g/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

console.log("how");
