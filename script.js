document.addEventListener("DOMContentLoaded", () => {
  const radioButtons = document.querySelectorAll(".units input[type='radio']");

  radioButtons.forEach((radio) => {
    radio.addEventListener("click", () => {
      const box = radio.closest(".box");

      box.classList.toggle("active");

      document.querySelectorAll(".box").forEach((otherBox) => {
        if (otherBox !== box) {
          otherBox.classList.remove("active");
        }
      });
    });
  });
});
