<template>
  <div id="landingPage">
    <div class="grid grid-cols-6 grid-rows-5 justify-items-center items-center min-h-screen">
      <h1 class="row-start-2 col-start-3 col-end-5 upheaval text-center text-5xl text-indigo-200">RICO'S ADVETURES</h1>
      <h3 class="row-start-4 col-start-3 col-end-5 upheaval text-center text-2xl text-indigo-500">Choose a planet</h3>
      <a class="row-start-1 col-start-1 hover:" href="/about">
        <img src="../static/planets/swamp.gif" />
      </a>
      <a class="row-start-2 col-start-6" href="/education">
        <img src="../static/planets/fire.gif" />
      </a>
      <a class="row-start-1 col-start-4" href="/experience">
        <img src="../static/planets/moon.gif" />
      </a>
      <a class="row-start-3 col-start-2" href="/skills">
        <img src="../static/planets/sea.gif" />
      </a>
      <a class="row-start-4 col-start-5" href="/projects">
        <img src="../static/planets/ice.gif" />
      </a>
      <a class="row-start-5 col-start-3" href="/summary">
        <img src="../static/planets/earth.gif" />
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
    font-family: upheaval;
  }
  @font-face {
    font-family: "upheaval";
    src: local("upheaval"),
      url(../static/fonts/upheavtt.ttf) format("truetype");
  }
</style>