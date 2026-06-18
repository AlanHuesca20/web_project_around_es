import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { openModal, closeModal } from "../components/utils.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

// --- TARJETAS INICIALES --- //

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

// ---------------- CONFIG VALIDACIÓN ----------------
const validationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

// ---------------- DOM ----------------
const cardsContainer = document.querySelector(".cards__list");

// Popups
const editPopup = document.querySelector("#edit-popup");
const newCardPopup = document.querySelector("#new-card-popup");

// Botones
const editButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

// Formularios
const editProfileForm = document.querySelector("#edit-profile-form");
const newCardForm = document.querySelector("#new-card-form");

// Inputs perfil
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const nameInput = editPopup.querySelector(".popup__input_type_name");
const descriptionInput = editPopup.querySelector(
  ".popup__input_type_description",
);

// Inputs nueva tarjeta
const cardNameInput = newCardPopup.querySelector(
  ".popup__input_type_card-name",
);
const cardLinkInput = newCardPopup.querySelector(".popup__input_type_url");

// ---------------- FUNCIONES ----------------

// Render tarjeta
function renderCard(cardData) {
  const card = new Card(cardData, "#card-template");
  const cardElement = card.getCardElement();
  cardsContainer.prepend(cardElement);
}

// Llenar formulario perfil
function fillProfileForm() {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
}

// Abrir popup perfil
function handleOpenEditModal() {
  fillProfileForm();
  editValidator.resetValidation();
  openModal(editPopup);
}

// Submit perfil
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editPopup);
}

// Submit nueva tarjeta
function handleCardFormSubmit(evt) {
  evt.preventDefault();

  renderCard({
    name: cardNameInput.value,
    link: cardLinkInput.value,
  });

  newCardForm.reset();
  newCardValidator.resetValidation();

  closeModal(newCardPopup);
}

// ---------------- EVENTOS ----------------

// Abrir popups
editButton.addEventListener("click", handleOpenEditModal);

addCardButton.addEventListener("click", () => {
  newCardForm.reset();
  newCardValidator.resetValidation();
  openModal(newCardPopup);
});

// Cerrar popups
editPopup
  .querySelector(".popup__close")
  .addEventListener("click", () => closeModal(editPopup));
newCardPopup
  .querySelector(".popup__close")
  .addEventListener("click", () => closeModal(newCardPopup));

// Submit
editProfileForm.addEventListener("submit", handleProfileFormSubmit);
newCardForm.addEventListener("submit", handleCardFormSubmit);

// ---------------- INICIALIZACIÓN ----------------

// Render inicial
initialCards.forEach((cardData) => {
  renderCard(cardData);
});

// Validación
const editValidator = new FormValidator(validationConfig, editProfileForm);
const newCardValidator = new FormValidator(validationConfig, newCardForm);

editValidator.setEventListeners();
newCardValidator.setEventListeners();
