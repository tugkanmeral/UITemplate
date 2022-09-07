<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router'

import NavTM from './components/NavTM.vue';
import SideBarTM from './components/SideBarTM.vue';

const sideBarCollapsed = ref(true);

function changeCollapseState() {
  sideBarCollapsed.value = !(sideBarCollapsed.value);
}
</script>

<template>
  <NavTM @sideBarButtonClicked="() => changeCollapseState()" />

  <div id="mid-body">
    <SideBarTM :collapsed=sideBarCollapsed />
    <main>
      <RouterView />
    </main>
  </div>

</template>
