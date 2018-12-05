<template>
  <!--Card-->
  <div class="card m-5">
    <!--Card image-->
    <div class="view overlay">
      <img v-bind:src="imageSrc">
      <a href="#">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>
    <!--Card content-->
    <div class="card-body">
      <!--Title-->
      <h4 class="card-title">{{title}}</h4>
      <!--Text-->
      <p class="card-text">{{text}}</p>
      <a href="#" class="btn btn-primary">Button</a>
    </div>
  </div>
  <!--/.Card-->
</template>

<script>
export default {
  name: 'mdbfooter',
  props: ['title', 'text', 'imageSrc'],
  data () {
    return {}
  }
}
</script>

<style>
.card {
  width: 300px;
  height: 500px;
  object-fit: contain;
}
</style>