<template lang="pug">
.tabs
  .page__container
    .tabs__container
      ul.tabs__list
        li.tabs__item
          router-link(class="tabs__link" active-class="tabs__link--active" exact to="/skills") Обо мне
        li.tabs__item
          router-link(class="tabs__link" active-class="tabs__link--active" exact to="/works") Работы
        li.tabs__item
          router-link(class="tabs__link" active-class="tabs__link--active" exact to="/reviews") Отзывы
</template>

<script>

const tabs = [
  {id: 0, title: "Обо мне"},
  {id: 1, title: "Работы"},
  {id: 2, title: "Отзывы"},
]

export default {
  data() {
    return{
      tabs,
      activeTabId: 0,
    }
  },
  methods: {
    handleChange(tab) {
      this.activeTabId = tab.id
      this.$emit("tabChanged", tab)
    }
  }
}
</script>

<style lang="postcss">
.tabs {
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
      color: #5500f2;
      font-weight: 600;
      border-color: currentColor;
    }
  }
}
</style>