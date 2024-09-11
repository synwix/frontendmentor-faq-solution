document.querySelectorAll(".small-heading").forEach((header) => {
  header.addEventListener("click", function () {
    const content = this.nextElementSibling;
    // console.log(content);
    const icon = this.querySelector(".toggle-icon");

    if (content.style.display === "block") {
      content.style.display = "none";
      icon.src = "./assets/images/icon-plus.svg";
      this.classList.remove("open");
    } else {
      content.style.display = "block";
      icon.src = "./assets/images/icon-minus.svg";
      this.classList.add("open");
    }
  });
});
document.querySelectorAll(".faq-section").forEach((section) => {
  const header = section.querySelector("h2");
  const content = section.querySelector("p");
  const icon = section.querySelector(".toggle-icon");

  header.addEventListener("click", () => {
    section.classList.toggle("active");
  });
});
