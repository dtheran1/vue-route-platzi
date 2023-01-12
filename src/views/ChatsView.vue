<script setup>
  import { ref } from 'vue';
  const chats = ref([
    {
      id: 1,
      name: 'Eberlin Caro',
    },
    {
      id: 2,
      name: 'Daniel Theran',
    },
  ]);

</script>
<template>
  <div>
    <aside>
      <div v-for="chat in chats" :key="chat.id">
        <router-link :to="`/chats/${chat.id}`"> {{ chat.name }} </router-link>
      </div>
    </aside>
    <article>
      <div>
        {{ $route.params.chatId }}
      </div>
    </article>
  </div>
</template>
