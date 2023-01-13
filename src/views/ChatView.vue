<script setup>
  import { computed, ref, defineProps, watchEffect } from 'vue';
  import { useRoute } from 'vue-router';
  const props = defineProps({
    chatId: {
      type: String,
      default: '',
    },
  });
  const route = useRoute();

  const messages = ref([
    {
      id: 1,
      text: 'Mensaje 1',
      author: 1,
    },
    {
      id: 2,
      text: 'Mensaje 2',
      author: 2,
    },
    {
      id: 3,
      text: 'Mensaje 3',
      author: 3,
    },
  ]);

  const msgFiltered = computed(() => {
    return messages.value.filter((msg) => msg.author === parseInt(props.chatId));
  });

  watchEffect(()=> {
    console.log(route.params);
  })
</script>

<template>
  <div v-for="msg in msgFiltered" :key="msg.id">
    {{ msg.text }}
  </div>
</template>
