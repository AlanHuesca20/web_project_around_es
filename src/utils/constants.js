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

export const config = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inputErrorClass: "popup__input_type_error",
};
export const profileImage = document.querySelector(".profile__image");
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description",
);

export const profileEditButton = document.querySelector(
  ".profile__edit-button",
);
export const profileAddButton = document.querySelector(".profile__add-button");

export const editPopup = document.querySelector("#edit-popup");
export const newCardPopup = document.querySelector("#new-card-popup");
export const imagePopup = document.querySelector("#image-popup");

export const editProfileForm = document.querySelector("#edit-profile-form");
export const newCardForm = document.querySelector("#new-card-form");

export const popupImage = document.querySelector(".popup__image");
export const popupCaption = document.querySelector(".popup__caption");
