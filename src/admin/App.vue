<template lang="pug">
  .root-wrapper
    router-view(name="header")
    vc-tabs
    .page__wrapper(:class="{ 'page__wrapper--dark': $route.path === '/login' }")
      router-view
      vc-skills
      vc-works
</template>

<script>
import Header from "./components/header/header";
import Tabs from "./components/tabs/tabs";
import Skills from "./pages/skills/skills";
import Works from "./pages/works/works";


export default {
  components: {
    vcHeader: Header,
    vcTabs: Tabs,
    vcSkills: Skills,
    vsWorks: Works,
  }
};
</script>

<style lang="postcss" src="./styles/main.pcss"></style>
