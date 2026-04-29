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

const editButton = document.querySelector(".profile__edit-button");
const editModal = document.querySelector("#edit-popup");
const editCloseBtn = editModal.querySelector(".popup__close");
const formElement = editModal.querySelector("#edit-profile-form");
const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_description");
const titleProfile = document.querySelector(".profile__title");
const descriptionProfile = document.querySelector(".profile__description");
const cardsTemplate = document
  .querySelector("#cards-template")
  .content.querySelector(".card");

const addButton = document.querySelector(".profile__add-button");
const addModal = document.querySelector("#new-card-popup");
const addCloseBtn = addModal.querySelector(".popup__close");
const addInputName = addModal.querySelector(".popup__input_type_card-name");
const addInputLink = addModal.querySelector(".popup__input_type_url");
const formNewCardEl = addModal.querySelector("#new-card-form");
const imageModal = document.querySelector("#image-popup");
const imageCloseBtn = imageModal.querySelector(".popup__close");
const imagePopup = imageModal.querySelector(".popup__image");
const cardsContainer = document.querySelector(".cards__list");

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

editButton.addEventListener("click", () => openModal(editModal));
editCloseBtn.addEventListener("click", () => closeModal(editModal));
addButton.addEventListener("click", () => openModal(addModal));
addCloseBtn.addEventListener("click", () => closeModal(addModal));
imageCloseBtn.addEventListener("click", () => closeModal(imageModal));

function handleProfileFormSubmit(event) {
  event.preventDefault();
  titleProfile.textContent = nameInput.value;
  descriptionProfile.textContent = jobInput.value;
  closeModal(editModal);
}

formElement.addEventListener("submit", handleProfileFormSubmit);
formNewCardEl.addEventListener("submit", handleCardFormSubmit);

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderCard(addInputName.value, addInputLink.value);
  closeModal(addModal);
}

function handlePreviewPicture(name, link) {
  const imageCaption = imageModal.querySelector(".popup__caption");
  imagePopup.src = link;
  imagePopup.alt = name;
  imageCaption.textContent = name;
  openModal(imageModal);
}

function getCardElement(name, link) {
  const cardElement = cardsTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  cardLikeBtn.addEventListener("click", function (evt) {
    evt.target.classList.toggle("card__like-button_is-active");
  });

  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  cardDeleteBtn.addEventListener("click", function () {
    cardElement.remove();
  });

  cardImage.addEventListener("click", () => {
    handlePreviewPicture(name, link);
  });

  return cardElement;
}

function renderCard(name, link) {
  const cardEl = getCardElement(name, link);
  cardsContainer.prepend(cardEl);
}

initialCards.forEach(function (item) {
  renderCard(item.name, item.link);
});
