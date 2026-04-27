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
const cardsTemplate = document
  .querySelector("#cards-template")
  .content.querySelector(".card");

const addButton = document.querySelector(".profile__add-button");
const addModal = document.querySelector("#new-card-popup");
const addCloseBtn = addModal.querySelector(".popup__close");
const imageModal = document.querySelector("#image-popup");
const imageCloseBtn = imageModal.querySelector(".popup__close");

function openModal() {
  editModal.classList.add("popup_is-opened");
}

function closeModal() {
  editModal.classList.remove("popup_is-opened");
}

function openModal1() {
  addModal.classList.add("popup_is-opened");
}

function closeModal1() {
  addModal.classList.remove("popup_is-opened");
}

editButton.addEventListener("click", openModal);
editCloseBtn.addEventListener("click", closeModal);
addButton.addEventListener("click", openModal1);
addCloseBtn.addEventListener("click", closeModal1);

function handleProfileFormSubmit(event) {
  event.preventDefault();
  nameInput.textContent = nameInput.value;
  jobInput.textContent = jobInput.value;
  closeModal();
  titleProfile.textContent = nameInput.value;
  descriptionProfile.textContent = jobInput.value;
}

formElement.addEventListener("submit", handleProfileFormSubmit);

function handleCardFormSubmit(evt) {
  evt.preventDefault();
}

function getCardElement(name, link) {
  const cardElement = cardsTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");

  cardTitle.textContent = name;
  cardImage.textContent = link;

  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  cardLikeBtn.addEventListener("click", function (evt) {
    evt.target.classList.toggle("card__like-button_is-active");
  });

  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  cardDeleteBtn.addEventListener("click", function () {
    cardElement.remove();
  });

  return cardElement;
}

function renderCard(name, link) {
  const cardEl = getCardElement(name, link);
}
