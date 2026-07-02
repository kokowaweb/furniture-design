// グローバルナビ ハンバーガーメニュー
// --------------------------------------------------------------

const hamburgerBtn = document.querySelector("#js_hamburgerBtn");
const hamburgerBg = document.querySelector("#js_hamburgerBg");
const headerNav = document.querySelector("#js_headerNav");
const headerBlock = document.querySelector(".header_block");

hamburgerBtn.addEventListener("click", function () {
  this.classList.toggle("is_active");
  headerNav.classList.toggle("is_active");
  hamburgerBg.classList.toggle("is_active");
  headerBlock.classList.toggle("is_active");
});

hamburgerBg.addEventListener("click", function () {
  hamburgerBtn.classList.remove("is_active");
  headerNav.classList.remove("is_active");
  hamburgerBg.classList.remove("is_active");
  headerBlock.classList.remove("is_active");
});

// スクロールイベントで表示するJS
// --------------------------------------------------------------

// Intersection Observer callback function
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is_active");
      // Once the element is active, we can disconnect the observer to stop monitoring it.
      observer.unobserve(entry.target);
    }
  });
}

// Intersection Observer setup
const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px",
  threshold: 0.1, // Percentage of element visibility required to trigger the callback
};

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".js_scroll_event");
  const observer = new IntersectionObserver(handleIntersection, options);

  elements.forEach((element) => {
    observer.observe(element);
  });
});

// 360px 未満は JS で viewport を固定する
// --------------------------------------------------------------
!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 360
        ? "width=device-width,initial-scale=1"
        : "width=360";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();
