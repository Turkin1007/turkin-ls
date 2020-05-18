import header from "./header.vue";

export default {
  title: "header"
}

export const defaultView = () => ({
  components: {header},
  template: `
    <header/>
  `
})

export const withContent = () => ({
  components: {header},
  template: `
    <header>
      <h2>
        Содержимое
      </h2>  
    </header>  
  `
});

withContent.story = {
  name: "С содержанием"
};