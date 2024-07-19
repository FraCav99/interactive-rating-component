const ratingForm = document.getElementById("rating-form");
const ratingComponent = document.getElementById("rating");
const thanksComponent = document.getElementById("thanks");

ratingForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const rating = document.querySelector('input[type="radio"]:checked');

  // User didn't checked any radio button.
  if (!rating) {
    return;
  }

  ratingComponent.style.display = "none";
  thanksComponent.style.display = "block";
  const ratingValue = thanksComponent.querySelector("#rating-value");
  ratingValue.textContent = rating.value;
});
