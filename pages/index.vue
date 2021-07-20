<template>
  <div id="landingPage">
    <div class="grid grid-cols-3 justify-items-center grid-rows-4 min-h-screen">
      <NuxtLink 
        to="/projects"
        class="
          row-start-4
          col-start-2
          text-white
          text-xl
          md:text-3xl
          2xl:text-6xl
          hover:text-red-500
        "
        style=""
        >
          Start Here
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  #landingPage { 
    background: url(../static/backgrounds/spaceBackground.gif) no-repeat center center fixed; 
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