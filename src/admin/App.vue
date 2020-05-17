<template lang="pug">
  //- div.root-wrapper-container
  //-   div.root-container
  //-     template  
        //- header.header-container
        //-   headline
        //-     user(
        //-       userpic=":src="../images/content/user.png"
        //-       username="Туркин Михаил"
        //-     )
        //- section.tab-container
        //-   tabs
        //- main.content-container
</template>
<script>
import headline from "./components/headline";
import tab from "./components/tabs";
import user from "./components/user";

export default {
  components: {
    headline, 
    tab, 
    user
  }
};
</script>