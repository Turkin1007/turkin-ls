<template lang="pug">
  include ../../../mixins.pug

  header.header
    .page__container
      .header__container
        .header__info
          .user.user--admin-header
            .user__column
              +avatarVue("content/user.jpg", 45)
            .user__column
              .user__row.user__name Туркин Михаил
          .header__title Панель администрирования
        .header__btn
          button(type="button").btn--exit Выйти
</template>

<script>
export default {
  
}
</script>


<style lang="postcss" scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #3e3e59;
  background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
  padding: 15px 0;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__info {
    display: flex;
    align-items: center;
  }

  &__title {
    color: rgba(#ffffff, .5);
    font-size: 14px;
    line-height: 1.5;
    margin-left: 28px;
  }

  &__btn {
    display: block;
  }
}

.btn--exit {
  color: rgba(#ffffff, .7);
  font-size: 16px;
  line-height: 1;
  text-decoration: none;
  border-bottom: 1px solid;
  transition: .3s;
}
</style>