<template lang="pug">
  .tabs-components
    ul.list
      li.item(
        v-for="tab in tabs" :key="tab.id"
        :class="{'active' : activeTabId === tab.id}"
      )
        button.btn(
          type="button"
          @click="handleChange(tab)"
        ) {{tab.title}}
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
  .tabs-component {
    display: flex;
  }

  .list {
    display: flex;
  }

  .item {
    position: relative;

    &.active {
      &:before {
        position: absolute;
        content: " ";
        display: block;
        left: 0;
        right: 0;
        bottom: 0;
        height: 3px;
        background: red;
      }
    }
  }

  .btn {
    padding: 20px;
  }
</style>