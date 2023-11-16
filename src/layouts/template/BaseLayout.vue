<template>
  <v-app>
    <!-- Header Slot -->
    <div ref="headerSlot" v-if="$slots.header">
      <slot name="header"></slot>
    </div>

    <!-- Main Content Area -->
    <v-main :style="containerStyle">
      <v-container fluid fill-height>
        <v-row no-gutters v-if="$slots.upperMenu">
          <v-col cols="12" class="upper-menu">
            <div ref="upperMenuSlot">
              <slot name="upperMenu"></slot>
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters fill-height>
          <v-col v-if="$slots.sideMenu" cols="2" sm="2" md="1" class="side-menu">
            <slot name="sideMenu"></slot>
          </v-col>
          <v-col class="content-sheet" :style="sheetStyle">
            <v-sheet class="router-view-container">
              <slot></slot>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Footer Slot -->
    <div ref="footerSlot" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </v-app>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';

const headerSlot = ref(null);
const footerSlot = ref(null);
const upperMenuSlot = ref(null);

const containerStyle = ref({});
const sheetStyle = ref({});

const observers = new Map();

const updateStyles = () => {
  const headerHeight = headerSlot.value?.offsetHeight || 0;
  const footerHeight = footerSlot.value?.offsetHeight || 0;
  const upperMenuHeight = upperMenuSlot.value?.offsetHeight || 0;

  containerStyle.value = {
    top: `${headerHeight}px`,
    bottom: `${footerHeight}px`
  };

  sheetStyle.value = {
    maxHeight: `calc(100vh - ${headerHeight + footerHeight + upperMenuHeight}px)`
  };
};

const resizeObserver = (elementRef) => {
  const observer = new ResizeObserver(updateStyles);

  if (elementRef.value) {
    observer.observe(elementRef.value);
    observers.set(elementRef, observer);
  }
};

onMounted(() => {
  [headerSlot, footerSlot, upperMenuSlot].forEach(slot => resizeObserver(slot));
  updateStyles();
});

onUnmounted(() => {
  observers.forEach((observer, ref) => {
    if (ref.value) observer.unobserve(ref.value);
  });
});

watch([headerSlot, footerSlot, upperMenuSlot], () => {
  updateStyles();
}, { immediate: true });
</script>

<style scoped>
.v-container {
  position: absolute;
  padding: 0;
}

.upper-menu {
  border-bottom: 1px solid #d9d9d9;
  max-height: 50px;
}

.side-menu {
  border-right: 1px solid #d9d9d9;
  min-width: 50px;
}

.content-sheet {
  overflow-y: auto;
}

.router-view-container {
  height: 100%;
  overflow-y: auto;
}
</style>
