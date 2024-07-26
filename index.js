const ratingForm = document.getElementById("rating-form");
const ratingComponent = document.getElementById("rating");
const thanksComponent = document.getElementById("thanks");

ratingForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const rating = new FormData(ratingForm).get("rating");

  // User didn't choose any rating value.
  if (rating === null) {
    return;
  }

  ratingComponent.addEventListener(
    "animationend",
    () => {
      ratingComponent.style.display = "none";

      thanksComponent.style.display = "block";
      thanksComponent.classList.add("slide-fade-in");

      thanksComponent.innerHTML = thanksComponent.innerHTML.replace(
        /{{ rating }}/g,
        rating
      );
    },
    { once: true }
  );

  ratingComponent.classList.add("slide-fade-out");
});
