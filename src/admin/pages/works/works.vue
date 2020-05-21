<template lang="pug">
  section.works
    .page__container
      .page__header
        .page__columns
          h1.page-title.works__title Блок «Работы»
      .page__contents
        .page__content-header
          .page-title Добавление работы
        .page__content-body
          .page-left
            .page__left-content
              .left-text Перетащите либо загрузите изображение
              button.load(type="submit") ЗАГРУЗИТЬ
          .page-right
            .page-right__item
              .right-name Название
              input.name-field
            .page-right__item
              .right-name Ссылка
              input.name-field
            .page-right__item
              .right-name Описание
              textarea.comment-field
            .page-right__item
              .right-name Добавление тэга
              input.name-field
            .page-right__btn
              button.cancel(type="submit") Отмена
              button.load(type="submit") Загрузить 
      .page__content-footer
        .footer__page-add
          button(type="button").btn.btn--add.btn--xbig 
          .page-add__text Добавить работу
        .footer__page-new
          .footer-top
            img(src="https://picsum.photos/350/200")
            ul.tags-list
              li.tags-item HTML
              li.tags-item CSS
              li.tags-item JavaScript
          .footer-content__list
            .footer-name.footer-content Новая работа
            .footer-description.footer-content Описание этой работы
            a.footer-link.footer-content http://google.com
            .footer-change.footer-content
              button.footer-edit Править
                .pen &#9998;
              button.footer-delete Удалить
                .no
</template>

<script>
export default {
  
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

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

.page__content-header {
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #414c63;
  width: 95%;
  margin-bottom: 40px;
}

.page__content-body {
  display: flex;
  width: 90%;
}

.page__content-footer {
  display: flex;
}

.page-left {
  width: 50%;
}

.page__left-content {
  background-color: #dee4ed;
  border: 1px dashed #a1a1a1;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  text-align: center;
}

.left-text {
  font-weight: 700;
  opacity: .4;
  line-height: 2;
  margin-bottom: 20px;
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

.page-right {
  width: 50%;
}

.page-right__item {
  width: 90%;
  border-bottom: 1px solid #414c63;
  margin-bottom: 20px;
  &:nth-child(3) {
    border-bottom: 0;
  }
}

.right-name {
  font-weight: 700;
  opacity: .4;
  margin-bottom: 20px;
}

.name-field {
  padding: 10px 0;
}

.comment-field {
  width: 100%;
  min-height: 100px;
  resize: none;
}

.page-right__btn {
  width: 90%;
  padding-top: 20px;
  padding-bottom: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.cancel {
  margin-right: 60px;
  font-weight: 700;
  font-size: 18px;
}

button {
  background: transparent;
  border: none;
  color: #006aed;
}

.add-works {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  cursor: pointer;
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

input {
  background: transparent;
  border: none;
}

.footer__page-add {
  width: 100%;
  height: 100%;
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
 
.footer__page-add {
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
}

.footer__page-new {
  width: calc(100% / 3 -30px);
  margin-left: 20px;
  box-shadow: ;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  height: 450px;
}

.page-add__text {
  color: #fff;
  padding-top: 20px;
}

.footer-top {
  width: 100%;
  position: relative;
}

.tags-list {
  display: flex;
  position: absolute;
  bottom: 10px;
  right: 20px;
}

.tags-item {
  margin-right: 10px;
  padding: 5px 12px;
  background: #fff;
  border-radius: 25px;
  &:last-child {
    margin-right: 0;
  }
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

.footer-content__list {
  width: 80%;
  padding-top: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  justify-content: space-between;
}

.footer-content {
  margin-top: 20px;
}

.footer-description {
  opacity: .4;
}

.footer-link {
  color: #006aed;
}

.footer-change {
  display: flex;
  justify-content: space-between;
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


</style>