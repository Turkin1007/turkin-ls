import tabs from "./tabs";
import { action } from "@storybook/addon-actions";

const methods = {
  onTabChanged: action("onTabChanged")
};

export default {
  title: "Tabs"
};

export const defaultView = () => ({
  components: {tabs},
  methods,
  template: `
    <tabs
      @tabChanged="onTabChanged"
    />
  `
})