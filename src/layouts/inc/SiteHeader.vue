<template>
  <v-system-bar color="grey-darken-4">
    <img :src="require('@/assets/logo.png')" alt="site logo">
    <div class="ms-2 text-button">{{ currentUse }}</div>
    <v-spacer></v-spacer>
    <div class="time-viewer">{{ formattedDate }}</div>
  </v-system-bar>
</template>

<script setup>
import { ref, computed } from "vue";

const currentDate = ref(new Date());

const formattedDate = computed(() => {
  const date = currentDate.value;
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

  let month = date.getMonth() + 1;
  let day = date.getDate();
  let weekday = weekdays[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let ampm = hours >= 12 ? '오후' : '오전';
  hours = hours % 12;
  hours = hours ? hours : 12;

  minutes = minutes < 10 ? '0' + minutes : minutes;

  return `${month}월 ${day}일 (${weekday}) ${ampm} ${hours}:${minutes}`;
});

const currentUse = ref("soboti");
</script>

<style scoped>
img {
  width: 15px;
  height: 15px;
}
</style>