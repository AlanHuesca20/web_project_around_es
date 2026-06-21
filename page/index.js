import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { openModal, closeModal } from "../components/utils.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { initialCards } from "../utils/constants.js";

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
