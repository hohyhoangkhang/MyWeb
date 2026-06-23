const siteName = "MyWeb";
let topic = "Chủ đề website cá nhân của em";
let imageCount = 5;
let isReady = true;

console.log("Website:", siteName);
console.log("Chủ đề:", topic);
console.log("Số ảnh:", imageCount);
console.log("Đã sẵn sàng dùng JS?", isReady);
console.log("Kiểu dữ liệu topic:", typeof topic);
const mainTitle = document.getElementById("mainTitle");
const welcomeText = document.getElementById("welcomeText");
if (mainTitle && welcomeText) {
  mainTitle.textContent = "MyWeb đã có JavaScript!";
  welcomeText.textContent = "Nội dung này được cập nhật bằng file js/script.js.";
}
const helloBtn = document.getElementById("helloBtn");
const helloResult = document.getElementById("helloResult");

if (helloBtn && helloResult) {
  helloBtn.addEventListener("click", function () {
    helloResult.textContent = "Cảm ơn bạn đã ghé thăm MyWeb!";
  });
}
const toggleAboutBtn = document.getElementById("toggleAboutBtn");
const aboutContent = document.getElementById("aboutContent");
if (toggleAboutBtn && aboutContent) {
  toggleAboutBtn.addEventListener("click", function () {
    aboutContent.classList.toggle("hidden");
  });
}
const menuToggle = document.getElementById("menuToggle");
const mainMenu = document.getElementById("mainMenu");
if (menuToggle && mainMenu) {
  menuToggle.addEventListener("click", function () {
    mainMenu.classList.toggle("active");
  });
}
