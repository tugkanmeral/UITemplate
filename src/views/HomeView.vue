<script setup>
import { ref } from 'vue';
import ButtonTM from '../components/ButtonTM.vue';
function test() {
  console.log('test')
}

const textColor = ref('#e7e7e7')
const buttonWidth = ref('fit-content')
</script>

<template>
  <ButtonTM @clickedEvent="() => test()" :textColor="textColor" :width="buttonWidth">Test</ButtonTM>
</template>
