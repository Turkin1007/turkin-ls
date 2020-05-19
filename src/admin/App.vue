<template lang="pug">
  .root-wrapper
    vc-header
    vc-tabs
    .page__wrapper(:class="{ 'page__wrapper--dark': $router.path === '/login' }")
      router-view
      
</template>

<script>
import Header from "./components/header/header";
import Tabs from "./components/tabs/tabs";



export default {
  components: {
    vcHeader: Header,
    vcTabs: Tabs,
  }
};
</script>

<style lang="postcss" src="./styles/main.pcss"></style>
