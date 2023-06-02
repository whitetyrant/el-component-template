<template>
  <menu-pages :menu-data="menuData"></menu-pages>
</template>

<script>
import MenuPages from "@/package/menu-pages/MenuPages.vue";

export default {
  name: "testMenuPages",
  components: { MenuPages },
  data() {
    return {
      menuData: [
        {
          parentName: "做忘道",
          icon: "Edit",
          childrenList: [
            { name: "红中", index: 0, component: "components/SubComponent1" },
            { name: "西风", index: 1, component: "components/SubComponent1" },
          ],
        },
        {
          parentName: "做忘道",
          icon: "Edit",
          childrenList: [
            { name: "红中", index: 0, component: "components/SubComponent1" },
            { name: "西风", index: 1, component: "components/SubComponent1" },
          ],
        },
        {
          parentName: "做忘道",
          icon: "Edit",
          childrenList: [
            { name: "红中", index: 0, component: "components/SubComponent1" },
            { name: "西风", index: 1, component: "components/SubComponent1" },
            { name: "西风", index: 1, component: "components/SubComponent1" },
            { name: "西风", index: 1, component: "components/SubComponent1" },
            { name: "西风", index: 1, component: "components/SubComponent1" },
            { name: "西风", index: 1, component: "components/SubComponent1" },
            { name: "西风", index: 1, component: "components/SubComponent1" },
            { name: "西风", index: 1, component: "components/SubComponent1" },
            { name: "西风", index: 1, component: "components/SubComponent1" },
            { name: "西风", index: 1, component: "components/SubComponent1" },
            { name: "西风", index: 1, component: "components/SubComponent1" },
            { name: "西风", index: 1, component: "components/SubComponent1" },
            { name: "西风", index: 1, component: "components/SubComponent1" },
            { name: "西风", index: 1, component: "components/SubComponent1" },
            { name: "西风", index: 1, component: "components/SubComponent1" },
            { name: "西风", index: 1, component: "components/SubComponent1" },
            { name: "西风", index: 1, component: "components/SubComponent1" },
            { name: "西风", index: 1, component: "components/SubComponent1" },
            { name: "西风", index: 1, component: "components/SubComponent1" },
          ],
        },
      ],
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
