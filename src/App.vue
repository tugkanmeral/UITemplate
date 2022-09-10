<script setup>
import { ref, watch } from 'vue';
import { RouterView } from 'vue-router'

import router from './router';
import { useUserStore } from './stores/user';

import NavTM from './components/NavTM.vue';
import SideBarTM from './components/SideBarTM.vue';

const sideBarCollapsed = ref(true);
const userState = useUserStore();

function changeCollapseState() {
  sideBarCollapsed.value = !(sideBarCollapsed.value);
}

watch(router.currentRoute, (val) => {
  if (!userState.isLoggedIn) {
    userState.removeToken();
    router.replace({ path: '/login' })
  }
})
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
