<script setup>
  // import TheWelcome from '../components/TheWelcome.vue'
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const username = ref('');
  const ingresar = () => {
    router.replace('/chats'); // Reemplaza la ruta de navegacion y no deja puntos en el historial del navegador.
    router.push('/chats'); // este si deja un punto en el historial de navegacion
    router.push({
      path: '/chats',
      query: {
        variable1: 1, //Aqui podemos definir las diferentes queries
      },
      replace: true, // podemos agregar la propiedad para que funcione como sin dejar puntos de navegacion.
    });
  };
</script>

<template>
  <main>
    <h3>Introduce tu nombre de usuario</h3>
    <input type="text" placeholder="Username" v-model="username" />
    <button @click="ingresar">Iniciar Sesion</button>
  </main>
</template>
