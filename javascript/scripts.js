
const Fader = doument.querySelector(".Title");
Fader.classList.remove("animation");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      Fader.target.classList.add("animation");
      return;
    }
    Fader.target.classList.remove("animation");
  });
});
observer.observe(document.querySelector(".wrapper"));

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

var preloader = document.getElementById("loading");
function Loader() {
  preloader.style.display = "none";

  $(window).scroll(function () {
    $(".FadeInOutAnimation").css("opacity", 1 - $(window.scrollTop() / 250));
  });

  var fade = document.getElementsByClassName("FadeInOutAnimation");
  function Fader() {
    fade.style.opacity = "0.5";
  }

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".nav__link");

  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
    });
  });

  var preloader = document.getElementById("loading2");
  function Loader() {
    preloader.style.display = "none";
  }
  function sendEmail() {
    var addr = document.getElementById("address").value;
    var sub = document.getElementById("subject").value;
    var msg = document.getElementById("message").value;
    var url = "mailto:utkarshluthra@gmail.com?subject=" + sub + "&body=" + msg;
    location.href = url;
  }
}
