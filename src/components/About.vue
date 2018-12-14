<template>
  <div class="About">
    <h1>{{ msg }}</h1>
    <div>
      <p class="lead">Max and JC gonna get some gummies</p>
      <p class="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed ante augue, rhoncus ac consequat at, tempus vel nulla. Nulla consectetur malesuada nulla, 
        non efficitur sapien luctus vitae. Proin non eleifend risus. Nam interdum purus at elit eleifend fermentum. 
        Duis elementum, ex id placerat commodo, sapien lacus pulvinar nibh, vitae laoreet libero massa ac tellus. 
        In sed sem mauris. Pellentesque est purus, efficitur vel risus a, ultricies vestibulum orci. <br /> <br />
        Mauris viverra tortor odio, ut venenatis augue faucibus egestas. Aenean feugiat, enim ut condimentum blandit, elit quam luctus magna, tempor sollicitudin leo urna quis odio. Aliquam ac scelerisque odio. Nulla nec libero tincidunt, congue est laoreet, pharetra quam. Aliquam elementum eros in porta congue. Fusce ac hendrerit quam.
        Nam sit amet nulla maximus, pharetra quam vestibulum, eleifend diam. Pellentesque sed dui sed justo egestas gravida. Nulla metus velit, rhoncus fringilla sagittis id, tempor nec elit. Quisque eu vestibulum risus. Fusce et sem consequat, gravida turpis lacinia, interdum nisi. Praesent hendrerit blandit sem non feugiat. Vivamus eget metus tincidunt, maximus lorem molestie, facilisis massa. Nunc rhoncus, ex vitae posuere vehicula, lectus ipsum lobortis lacus, a varius ex odio ut orci. Praesent venenatis quam et laoreet vehicula.
        Vestibulum elit purus, blandit consectetur iaculis ac, imperdiet mattis enim. Duis euismod lacinia dui et interdum. Vestibulum maximus hendrerit enim, sit amet vulputate ante finibus at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi ac euismod arcu. Nulla facilisi. Suspendisse semper lacus mauris, ut ornare magna elementum non. Nunc efficitur, eros accumsan blandit mattis, mi dui consectetur est, non laoreet purus odio sed arcu. Proin ornare vestibulum massa non egestas. Fusce vitae metus tempor, rutrum urna quis, ultricies risus. 
      </p>
    </div>
    <Footer></Footer>
  </div>
</template>


<script>
import Footer from './Footer'
export default {
  name: 'About_Us',
  data () {
    return {
      msg: 'We like candy and drugs'
    }
  },
  components: {
    Footer
  }
}
</script>

<style>
.About{
    margin: 10px;
}
</style>
