// --- TARJETAS INICIALES --- //

export let initialCards = [
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
export const validationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

// ---------------- DOM ----------------
export const cardsContainer = document.querySelector(".cards__list");

// Popups
export const editPopup = document.querySelector("#edit-popup");
export const newCardPopup = document.querySelector("#new-card-popup");

// Botones
export const editButton = document.querySelector(".profile__edit-button");
export const addCardButton = document.querySelector(".profile__add-button");

// Formularios
export const editProfileForm = document.querySelector("#edit-profile-form");
export const newCardForm = document.querySelector("#new-card-form");

// Inputs perfil
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description",
);
export const nameInput = editPopup.querySelector(".popup__input_type_name");
export const descriptionInput = editPopup.querySelector(
  ".popup__input_type_description",
);

// Inputs nueva tarjeta
export const cardNameInput = newCardPopup.querySelector(
  ".popup__input_type_card-name",
);
export const cardLinkInput = newCardPopup.querySelector(
  ".popup__input_type_url",
);
