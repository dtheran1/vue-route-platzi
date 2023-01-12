<script setup>
  import { computed, ref } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  console.log(route.params);

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
    return messages.value.filter((msg) => msg.author == route.params.chatId);
  });
</script>

<template>
  <div v-for="msg in msgFiltered" :key="msg.id">
    {{ msg.text }}
  </div>
</template>
