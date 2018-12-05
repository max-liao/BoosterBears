<template>
  <div class="container-fluid mt-4">
    <div class="flex-center flex-column">
      <h1 class="animated fadeIn mb-2">MDBootstrap Practice</h1>
      <h5 class="animated fadeIn mb-1">This fades in</h5>
      <p class="animated fadeIn rubberBand text-muted">Rubber Band</p>
    </div>
    <div class="container text-center text-md-left">
      <div class="row text-center mt-3 pb-3 mx-auto">
        <div class="col-xl-4 mx-auto mt-3">
          <card
            imageSrc="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%287%29.jpg"
            title="Sky Sea"
            text="Hello"
          ></card>
        </div>
        <div class="col-xl-4 mx-auto mt-3">
          <card
            imageSrc="https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F502859%2Ffriendly-bear.jpg&w=700&op=resize"
            title="Bear"
            text="Grizz"
          ></card>
        </div>
        <div class="col-xl-4 mx-auto mt-3">
          <card imageSrc="../assets/RedGummyBear.jpg" title="Number3" text="3"></card>
        </div>
      </div>
    </div>

    <div id="links" class= "mt-3">
      <h6>Essential Links</h6>
      <ul>
        <li>
          <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
        </li>
        <li>
          <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
        </li>
        <li>
          <a href="http://chat.vuejs.org/" target="_blank" rel="noopener">Vue Community Chat</a>
        </li>
        <li>
          <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
        </li>
        <li>
          <a
            href="http://vuejs-templates.github.io/webpack/"
            target="_blank"
            rel="noopener"
          >Docs for This Template</a>
        </li>
      </ul>
      <h6>Ecosystem</h6>
      <ul>
        <li>
          <a href="http://router.vuejs.org/" target="_blank" rel="noopener">vue-router</a>
        </li>
        <li>
          <a href="http://vuex.vuejs.org/" target="_blank" rel="noopener">vuex</a>
        </li>
        <li>
          <a href="http://vue-loader.vuejs.org/" target="_blank" rel="noopener">vue-loader</a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Card from './Card'
export default {
  name: 'mdb',
  data () {
    return {}
  },
  components: {
    Card
  }
}
</script>

<style>

</style>
