<script setup>
import { ref } from 'vue';
import FreeTextTm from '../components/input/FreeTextTm.vue';
import ButtonTM from '../components/ButtonTM.vue';

const username = ref('')
const password = ref('')

function usernameChanged(_val) {
    username.value = _val;
}
function passwordChanged(_val) {
    password.value = _val;
}

function login() {
    console.log(username.value)
    console.log(password.value)
}
</script>

<template>
    <FreeTextTm placeholder="username" @value-changed="(val) => usernameChanged(val)" />
    <FreeTextTm placeholder="password" @value-changed="(val) => passwordChanged(val)" type="password" />
    <ButtonTM text="Login" v-on:clicked-event="login" />
</template>