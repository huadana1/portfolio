import Theme from "vitepress/theme";
import "./style.css";
import HomeLayout from "./HomeLayout.vue";

export default {
    extends: Theme,
    Layout: HomeLayout,
};
