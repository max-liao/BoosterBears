<template>
  <div class="home_page">
    <h1>{{ msg }}</h1>
    <div>
      <p class="lead">This is the homepage</p>
    </div>
    <img src="../assets/logo.png" alt="Vue.js PWA">
    
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'home_page',
  data () {
    return {
      msg: 'Boost Yo Bears'
    }
  },
  components: {
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  margin: 10px;
  font-weight: normal;
}

.hero {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero .lead {
  font-weight: 200;
  font-size: 1.5rem;
}

.lead {
  margin: 10px;
}

.text {
  margin: 10px;
  font-family: Verdana,sans-serif; 
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

#links{
  margin: 10px;
  position: absolute;
  bottom: 0;
}
</style>
