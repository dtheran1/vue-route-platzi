<script setup>
  // import TheWelcome from '../components/TheWelcome.vue'
  import { ref } from 'vue';
  const username = ref('');
  const ingresar = () => {
    console.log(username.value);
    $router.push('/chats');
  };
</script>

<template>
  <main>
    <h3>Introduce tu nombre de usuario</h3>
    <input type="text" placeholder="Username" v-model="username" />
    <router-link to="/chats">
      <button>Ingresar</button>
    </router-link>
  </main>
</template>
