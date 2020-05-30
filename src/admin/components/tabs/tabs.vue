<template lang="pug">
.tabs
  .page__container
    .tabs__container
      ul.tabs__list
        li.tabs__item
          router-link(class="tabs__link" active-class="tabs__link--active" exact to="/") Обо мне
        li.tabs__item
          router-link(class="tabs__link" active-class="tabs__link--active" exact to="/works") Работы
        li.tabs__item
          router-link(class="tabs__link" active-class="tabs__link--active" exact to="/reviews") Отзывы
</template>

<!--STYLE-->

<style lang="postcss">
.tabs {
  background-color: #fff;

  &__list {
    display: flex;
    height: 77px;
  }

  &__item {
    margin-right: 30px;
    height: 100%;
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 125px;
    height: 100%;
    color: #414c63;
    line-height: 2;
    border-bottom: 3px solid transparent;
    text-decoration: none;
    transition: all .3s ease-in;

    &--active,
    &:hover {
      color: $links-active;
      font-weight: 600;
      border-color: currentColor;
    }
  }
}
</style>