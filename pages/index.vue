<template>
  <div id="landingPage">
    <div class="grid grid-cols-6 grid-rows-5 justify-items-center items-center text-center min-h-screen">
      <h1 class="row-start-2 col-start-3 col-end-5 text-center text-6xl text-blue-300">RICO'S ADVETURES</h1>
      <h2 class="row-start-4 col-start-3 col-end-5 text-center text-3xl text-indigo-500">Choose a planet</h2>
      <a class="transition duration-300 transform hover:-translate-y-2 row-start-1 col-start-1" href="/about">
        <img src="../static/planets/swamp.gif" />
        <h5 class="text-indigo-300 text-lg pt-2"> About </h5>
      </a>
      <a class="transition duration-300 transform hover:-translate-y-2 row-start-2 col-start-6" href="/education">
        <img src="../static/planets/fire.gif" />
        <h5 class="text-indigo-300 text-lg pt-2"> Education </h5>
      </a>
      <a class="transition duration-300 transform hover:-translate-y-2 row-start-1 col-start-4" href="/experience">
        <img class="pl-3" src="../static/planets/moon.gif" />
        <h5 class="text-indigo-300 text-lg pt-2"> Experience </h5>
      </a>
      <a class="transition duration-300 transform hover:-translate-y-2 row-start-3 col-start-2" href="/skills">
        <img src="../static/planets/sea.gif" />
        <h5 class="text-indigo-300 text-lg pt-2"> Skills </h5>
      </a>
      <a class="transition duration-300 transform hover:-translate-y-2 row-start-4 col-start-5" href="/projects">
        <img class="pl-1" src="../static/planets/ice.gif" />
        <h5 class="text-indigo-300 text-lg pt-2"> Projects </h5>
      </a>
      <a class="transition duration-300 transform hover:-translate-y-2 row-start-5 col-start-3" href="/summary">
        <img src="../static/planets/earth.gif" />
        <h5 class="text-indigo-300 text-lg pt-2"> Summary </h5>
      </a>
    </div>
  </div>
</template>

<script>
</script>

<style>
  #landingPage { 
    background: url(../static/backgrounds/spaceBackground.png); 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>