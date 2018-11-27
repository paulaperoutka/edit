window.onload = function () {

  document.getElementById("edit-logo").onclick = function () {
    window.location.href = "./assets/pages/landing.html";
  };

  document.getElementById("contact-nav-link").onclick = function () {
    console.log("change to contact page");
    window.location.href = "../pages/contact.html";
  };
};