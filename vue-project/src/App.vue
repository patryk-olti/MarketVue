<template>
  <body>
    <div id="nav">
        <router-link to="/" class="link">Home</router-link>
        <router-link to="/news" class="link" >News</router-link>
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
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 100;
}

.link{
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: green;
  font-size: 1.4rem;
  padding: 0 0.2rem;
  margin: 0.2rem 0.5rem;

  z-index: 3;
  overflow: hidden;
}

.link::after{
  content: " ";
  position: absolute;
  top: 0;
  right: 0;

  transform: translateX(35%);

  width: 35%;
  height: 100%;
  background-color: rgb(255, 66, 66);
  transition: 0.5s;
  z-index: -1;
}

.link:hover.link::after{
  transform: translateX(0);
}

body{
  width: 100vw;
  height: 100vh;
}

</style>
