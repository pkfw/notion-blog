<template>
  <div class="side-menu-container blur-background">
    <div v-for="menu in menus" :key="menu.name">
      <v-tooltip :text="menu.name">
        <template v-slot:activator="{ props }">
          <img v-bind="props" :src="menu.img" :alt="menu.name">
        </template>
      </v-tooltip>
    </div>
  </div>
</template>

<script setup>
const menus = [
  {
    name: "blog",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/200px-Notion-logo.svg.png",
    router: "",
  },
  {
    name: "profile",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Siri_new_logo.png/240px-Siri_new_logo.png",
    router: "",
  },
  {
    name: "tips",
    img: "https://i.namu.wiki/i/ilU0kPT0un20wdI43eIxgxjBA2wDIsxe29XNf2fkRmt45KvZ1m-vM1rCFZ-QotIFDbjU5Qp5huuYyw2SEgsu0Q1gFnPCQvT0G9w72NxEHSdOxEGlXaVkibXAi0RWDoVqBXLgnUdvs1IXxMn-YDfiyQ.svg",
    router: "",
  },
  {
    name: "setting",
    img: "https://i.namu.wiki/i/pknk2zAU7l58Zt80CMbagbecwFNrW40hV1kenxfd8drfrFBeSzS4dvCNZ-iI7StrPYM6Vazd2lR7x3mS8mR9ug.svg",
    router: "",
  },
]
</script>

<style scoped>
.side-menu-container {
  display: block;
  position: absolute;
  top: 50%;
  left: 1%;
  transform: translateY(-50%);

  padding: 10px;
  border: solid whitesmoke 1px;
  border-radius: 15px;
}

.blur-background {
  background-color: rgba(155, 155, 155, 0.5); /* 백색 배경에 50% 투명도 */
  backdrop-filter: blur(6px); /* 배경 흐림 효과 */
}

.side-menu-container img {
  width: 50px;
  height: 50px;
}
</style>
