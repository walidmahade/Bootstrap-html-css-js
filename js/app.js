const dropdownEl = document.querySelectorAll(".navbar .dropdown");
console.log(dropdownEl);
// console.log([...dropdownEl]);

// add hover event to all dropdown elements
dropdownEl.forEach((dropdownParent) => {
  // open dropdown
  dropdownParent.addEventListener("mouseenter", () => {
    const dropdownTgl = dropdownParent.querySelector(".dropdown-toggle");
    // make the dropdown menu visible
    dropdownTgl.classList.add("show");
    dropdownTgl.setAttribute("aria-expanded", "true");
    dropdownTgl.nextElementSibling.classList.add("show");
  });

  // close dropdown
  dropdownParent.addEventListener("mouseleave", () => {
    const dropdownTgl = dropdownParent.querySelector(".dropdown-toggle");
    // make the dropdown menu visible
    dropdownTgl.classList.remove("show");
    dropdownTgl.setAttribute("aria-expanded", "false");
    dropdownTgl.nextElementSibling.classList.remove("show");
  });
});
