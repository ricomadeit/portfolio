<template>
  <div id="landingPage">
    <div class="grid grid-cols-6 grid-rows-5 justify-items-center items-center text-center min-h-screen">
      <h1 class="row-start-2 col-start-3 col-end-5 text-center text-4xl md:text-6xl text-blue-300">RICO'S ADVETURES</h1>
      <img class="scale-down row-start-3 col-start-3 col-end-5 text-center vert-move" src="../static/planets/astronaut.png" />
      <h2 class="row-start-4 col-start-3 col-end-5 text-center text-2xl md:text-3xl text-indigo-500">Choose a planet</h2>
      <a class="ml-2 transition duration-300 transform hover:-translate-y-2 row-start-1 col-start-1" href="/about">
        <img class="planets" src="../static/planets/swamp.gif" />
        <h5 class="text-green-300 text-base md:text-lg pt-2"> About Me </h5>
      </a>
      <a class="mr-6 transition duration-300 transform hover:-translate-y-2 row-start-3 col-start-2" href="/education">
        <img class="planets" src="../static/planets/fire.gif" />
        <h5 class="text-red-300 text-base md:text-lg pt-2"> Education </h5>
      </a>
      <a class="transition duration-300 transform hover:-translate-y-2 row-start-1 col-start-4" href="/experience">
        <img class="planets pl-2" src="../static/planets/moon.gif" />
        <h5 class="text-gray-300 text-base md:text-lg pt-2"> Experience </h5>
      </a>
      <a class="mr-2 transition duration-300 transform hover:-translate-y-2 row-start-2 col-start-6" href="/skills">
        <img class="planets" src="../static/planets/sea.gif" />
        <h5 class="text-blue-300 text-base md:text-lg pt-2"> Skills </h5>
      </a>
      <a class="mr-6 transition duration-300 transform hover:-translate-y-2 row-start-4 col-start-6" href="/projects">
        <img class="pl-1 planets" src="../static/planets/ice.gif" />
        <h5 class="text-white text-base md:text-lg pt-2"> Projects </h5>
      </a>
      <a class="transition duration-300 transform hover:-translate-y-2 row-start-5 col-start-3" href="/synopsis">
        <img class="planets" src="../static/planets/earth.gif" />
        <h5 class="text-indigo-300 text-base md:text-lg pt-2"> Synopsis </h5>
      </a>
    </div>
  </div>
</template>

<script>
</script>

<style>
  #landingPage { 
    background: url(../static/backgrounds/spaceBackground.png); 
    background-size: cover;
    overflow: hidden;
  }
  .planets {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
  img.vert-move {
    -webkit-animation: mover 1s infinite alternate;
    animation: mover 1s infinite alternate;
  }
  @keyframes mover {
      0% { transform: translateY(0); }
      100% { transform: translateY(-10px); }
  }
</style>