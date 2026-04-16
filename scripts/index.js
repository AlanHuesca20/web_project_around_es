let initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

initialCards.forEach(function (item) {
  console.log(item);
});

const editButton = document.querySelector(".profile__edit-button");
const editModal = document.querySelector("#edit-popup");
const editCloseBtn = editModal.querySelector(".popup__close");
const formElement = editModal.querySelector("#edit-profile-form");
const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_description");
const titleProfile = document.querySelector(".profile__title");
const descriptionProfile = document.querySelector(".profile__description");

function openModal() {
  editModal.classList.add("popup_is-opened");
}

function closeModal() {
  editModal.classList.remove("popup_is-opened");
}

editButton.addEventListener("click", openModal);
editCloseBtn.addEventListener("click", closeModal);

function handleProfileFormSubmit(event) {
  event.preventDefault();
  nameInput.textContent = nameInput.value;
  jobInput.textContent = jobInput.value;
  closeModal();
  titleProfile.textContent = nameInput.value;
  descriptionProfile.textContent = jobInput.value;
}

formElement.addEventListener("submit", handleProfileFormSubmit);
