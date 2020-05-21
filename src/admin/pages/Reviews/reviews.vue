<template lang="pug">
  section.works
    .page__container
      .page__header
        .page__columns
          h1.page-title.works__title Блок «Отзывы»
      .page__contents
        .reviews__content-header
            .reviews-title Добавить отзыв
        .reviews__content-body
          .reviews-left
            .reviews__left-content
              .reviews-left_photo 
              button.load-photo(type="submit") Добавить фото
          .reviews-right
            .reviews__right-desc
              .reviews-right__item
                .reviews__right-name Имя автора
                input.reviews__item
              .reviews-right__item
                .reviews__right-name Титул автора
                input.reviews-field
            .reviews-right__items
              .reviews__right-reviews Отзыв
              textarea.comment-field
            .reviews-right__btn
              button.cancel(type="submit") Отмена
              button.load(type="submit") Загрузить 
      .reviews__content-footer
        .footer__reviews-add
          button(type="button").btn.btn--add.btn--xbig 
          .reviews-add__text Добавить отзыв
        .footer__reviews-new
          .footer__reviews-top
            .footer__reviews-avatar
              img(src="https://picsum.photos/50/50").review-avatar
            .reviews__tags-list
              .reviews__tags-items
                .reviews__tags-item Имя
                .reviews__tags-item Фамилия 
              .reviews__tag-item Программист
          .footer-content__list-reviews
            .footer-name__reviews.footer-content__reviews Текс отзыва
            
            .footer-change__reviews.footer-content__reviews
              button.footer-edit Править
                .pen &#9998;
              button.footer-delete Удалить
                .no
</template>

<style lang="postcss" scoped>
.page__contents {
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 5px rgba(0,0,0,0.5);
}

.reviews__content-header {
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #414c63;
  width: 95%;
  margin-bottom: 40px;
}

.reviews-title {
  font-size: 20px;
  font-weight: 700;
}

.reviews__content-body {
  display: flex;
  width: 90%;
}

.reviews-left {
  width: 25%;
}

.reviews__left-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.reviews-left_photo {
  width: 200px;
  height: 200px;
  border: none;
  border-radius: 50%;
  background-image: svg-load("user-full.svg", fill=#fff);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 50%;
  background-color: #dfe0e3;
  margin-bottom: 20px;
}

button {
  background: transparent;
  border: none;
}

.load-photo {
  color: #4b6fd7;
  font-weight: 700;
  font-size: 18px;
}

.reviews-right {
  display: flex;
  flex-direction: column;
  width: 75%;
}

.reviews__right-desc {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 40px;
}

.reviews-right__item {
  width: 45%;
  border-bottom: 1px solid #414c63;
}

input {
  border: none;
  background: transparent;
}

.reviews__right-name {
  font-weight: 700;
  opacity: .5;
}

.reviews__item {
  padding: 10px 0;
  width: 100%;
}

.reviews-field {
  padding: 10px 0;
  width: 100%;
}

.reviews-right__items{
  margin-bottom: 40px;
}

.reviews__right-reviews {
  font-weight: 700;
  opacity: .5;
  padding-bottom: 10px;
}

.comment-field {
  width: 100%;
  resize: none;
  height: 160px;
  padding: 5px 10px;
}

.reviews-right__btn {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 40px;
}

.load {
  width: 181px;
  height: 50px;
  border-radius: 25px;
  color: #ffffff;
  font-weight: 700;
  line-height: 48px;
  text-transform: uppercase;
  background-color: #fff;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
}

.cancel {
  margin-right: 60px;
  font-weight: 700;
  font-size: 18px;
  color: #006aed;
}

.reviews__content-footer {
  width: 100%;
  display: flex;
}

.footer__reviews-add {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  padding: 0;
  background-color: #3f35cb;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  width: calc(100% / 3 -30px);
  height: 450px;
  margin-right: 20px;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  cursor: pointer;
  &--add {
    font-size: 0;
    display: flex;
    align-items: center;

    &:before {
      content: '+';
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      border-radius: 50%;
      font-size: 15px;
      width: 21px;
      height: 21px;
      color: #fff;
      background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    }
    &.btn--xbig {
      color: #fff;
      display: flex;
      justify-content: center;
      width: 150px;
      height: 150px;
      border: 2px solid currentColor;
      border-radius: 50%;

      &:before {
        font-size: 72px;
        font-weight: 300;
        line-height: 30px;
        background-image: none;
      }
    }
  }
}

.reviews-add__text {
  color: #fff;
  font-weight: 700;
  padding-top: 20px;
}

.footer__reviews-new {
  width: calc(100% / 3 -30px);
  box-shadow: 0 0 5px rgba(0,0,0,0.5);
}
.review-avatar {
  border-radius: 50%;
  margin-right: 20px;
}

.footer__reviews-top {
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 30px 20px;
  border-bottom: 1px solid #414c63;
  margin-bottom: 40px;
}

.reviews__tags-items {
  display: flex;
  font-size: 18px;
  font-weight: 700;
}

.reviews__tags-item {
  padding-right: 10px;
}

.reviews__tag-item {
  font-weight: 700;
  opacity: .4;
}

.footer-content__list-reviews {
  width: 90%;
  height: 65%;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
}

.footer-name__reviews {
  font-weight: 700;
  opacity: .5;
} 

.footer-change__reviews {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
}

.footer-edit {
  display: flex;
  align-items: center;
  color: #a1a1a1;
  font-weight: 700;
}

.footer-delete {
  display: flex;
  align-items: center;
  color: #a1a1a1;
  font-weight: 700;
}

.no {
  background-image: svg-load("cross.svg", fill=#bf2929);
  background-repeat: no-repeat;
  width: 14px;
  height: 12px;
  margin-left: 20px;
}

.pen {
  transform: rotate(90deg);
  margin-left: 20px;
  color: #006aed;
  font-weight: 100;
}
</style>