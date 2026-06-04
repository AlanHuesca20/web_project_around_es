const initialCards = [
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

export class Card {
  constructor(
    data,
    templateSelector,
    handleImageClick,
    handleLikeClick,
    handleDeleteClick
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._isLiked = data.isLiked;

    this._ownerId = data.owner;
    this._userId = data.userId;

    this._templateSelector = templateSelector;
    this._handleImageClick = handleImageClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  _setEventListeners() {
    this._likeBtn.addEventListener("click", () => {
      this._handleLikeClick(this._id, this._isLiked);
    });

    this._deleteBtn.addEventListener("click", () => {
      this._handleDeleteClick(this._id);
    });

    this._image.addEventListener("click", () => {
      this._handleImageClick(this._name, this._link);
    });
  }

  setLikeState(isLiked) {
    this._isLiked = isLiked;
    this._likeBtn.classList.toggle("card__like-button_is-active", isLiked);
  }

  getView() {
    this._element = this._getTemplate();

    this._title = this._element.querySelector(".card__title");
    this._image = this._element.querySelector(".card__image");
    this._likeBtn = this._element.querySelector(".card__like-button");
    this._deleteBtn = this._element.querySelector(".card__delete-button");

    this._title.textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;

    if (this._ownerId !== this._userId) {
      this._deleteBtn.remove();
      this._deleteBtn = null;
    }

    if (this._isLiked) {
      this._likeBtn.classList.add("card__like-button_is-active");
    }

    this._setEventListeners();

    return this._element;
  }
  remove() {
    this._element.remove();
    this._element = null;
  }
}

initialCards.forEach((item) => {
  const card = new Card(item, "#cards-template");
  const cardElement = card.renderCard();

  document.body.append(cardElement);
});
