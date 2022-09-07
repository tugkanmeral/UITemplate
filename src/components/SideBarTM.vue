<script setup>
import { RouterLink } from 'vue-router'
import ButtonTM from './ButtonTM.vue';
const props = defineProps({
    collapsed: Boolean
})
</script>

<template>
    <div id="side-bar" :class="props.collapsed ? 'collapsed' : null">

        <RouterLink to="/" class="route-link-button noselect">Home</RouterLink>
        <RouterLink to="/about" class="route-link-button noselect">About</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
        <div style="flex-grow: 1;">

        </div>
        <ButtonTM class="route-link-button noselect" :icon="'fa-solid fa-arrow-right-from-bracket'"
            :background-color="'darkred'">
            Logout
        </ButtonTM>
    </div>
</template>

<style scoped>
#side-bar {
    display: flex;
    flex-direction: column;
    width: 250px;
    background-color: var(--tm-backgroud-color-dark);
    align-items: stretch;
    padding: 10px;
    box-shadow: 2px 2px 2px grey;
}

.collapsed {
    display: none !important;
}

.route-link-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 8px;
    margin-bottom: 5px;
}

.router-link-active {
    background-color: rgba(225, 225, 225, 0.3);
    border: 1px solid rgba(225, 225, 225, 0.3);
}

.route-link-button:hover {
    cursor: pointer;
    background-color: rgba(225, 225, 225, 0.4);
}

.route-link-button:active {
    background-color: rgba(225, 225, 225, 0.2);
}

a {
    text-decoration: none;
    color: whitesmoke;

}

@media (max-width: 650px) {
    #side-bar {
        width: auto;
    }

    .collapsed {
        display: none;
    }
}
</style>