<template>
  <div class="container">
    <div>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>



<script>

  export default{
  }
</script>

<style lang="css">
  @import '../src/assets/templates/css/bootstrap.min.css';
  @import '../src/assets/templates/css/style.css';
</style>