<template>
  <body>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/news">News</router-link>
    </div>
    <router-view />
  </body>
</template>

<script>

export default{
}

</script>

<style>
@import './assets/base.css';

#nav{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  border-bottom: 1px solid black;
  color: green;
}

body{
  width: 100vw;
  height: 100vh;
}

</style>
