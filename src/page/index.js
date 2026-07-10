import {
  profileDescription,
  profileImage,
  profileTitle,
  initialCards,
  validationConfig,
  editProfileForm,
  newCardForm,
} from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

// ---------- User Info ----------
const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

// ---------- Popups ----------
const imagePopup = new PopupWithImage("#image-popup");
imagePopup.setEventListeners();

const editProfilePopup = new PopupWithForm("#edit-popup", (formData) => {
  userInfo.setUserInfo({
    name: formData.name,
    job: formData.description,
  });
  editProfilePopup.close();
});
editProfilePopup.setEventListeners();

const addCardPopup = new PopupWithForm("#new-card-popup", (formData) => {
  const cardElement = createCard(formData["place-name"], formData.link);
  cardsSection.addItem(cardElement);
  addCardPopup.close();
});
addCardPopup.setEventListeners();

// ---------- Crear Card ----------
function createCard(name, link) {
  const card = new Card(
    { name, link },
    "#card-template",
    (cardName, cardLink) => {
      imagePopup.open(cardName, cardLink);
    },
  );
  return card.getCardElement();
}

// ---------- Section ----------
const cardsSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item.name, item.link);
      cardsSection.addItem(cardElement);
    },
  },
  ".cards__list",
);

cardsSection.render();

// ---------- Listeners ----------
document
  .querySelector(".profile__edit-button")
  .addEventListener("click", () => {
    const currentUser = userInfo.getUserInfo();
    document.querySelector(".popup__input_type_name").value = currentUser.name;
    document.querySelector(".popup__input_type_description").value =
      currentUser.job;
    editProfilePopup.open();
  });

document.querySelector(".profile__add-button").addEventListener("click", () => {
  addCardPopup.open();
});

// Validación
const editValidator = new FormValidator(validationConfig, editProfileForm);
const newCardValidator = new FormValidator(validationConfig, newCardForm);

editValidator.setEventListeners();
newCardValidator.setEventListeners();
