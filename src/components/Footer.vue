 <template>
  <!-- Footer -->
  <footer class="page-footer font-small pt-4">
    <div class="container text-center text-md-left">
      <div class="row text-center text-md-left mt-3 pb-3">
        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">{{company}}</h6>
          <p>
            Nothing but love
          </p>
        </div>

        <hr class="w-100 clearfix d-md-none">
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
          <p>
            <a href="#!">Bears</a>
          </p>
          <p>
            <a href="#!">Worms</a>
          </p>
          <p>
            <a href="#!">Penises</a>
          </p>
        </div>

        <hr class="w-100 clearfix d-md-none">
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
          <p>
            <a href="#!">Your Account</a>
          </p>
          <p>
            <a href="#!">Become an Affiliate</a>
          </p>
          <p>
            <a href="#!">Shipping Rates</a>
          </p>
        </div>

        <hr class="w-100 clearfix d-md-none">
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
          <p>
            <i class="fa fa-home mr-3"></i> Atlanta, GA 30345, US
          </p>
          <p>
            <i class="fa fa-envelope mr-3"></i> max.liao@gmail.com
          </p>
          <p>
            <i class="fa fa-phone mr-3"></i> + 404 314 7825
          </p>
        </div>
      </div>
      <hr>
      <!-- Grid row -->
      <div class="row d-flex align-items-center">
        <!-- Grid column -->
        <div class="col-md-6 col-lg-8">
          <!--Copyright-->
          <p class="text-center text-md-left">
            © 2018 Copyright:
            <a href="www.google.com">
              <strong>Max Liao</strong>
            </a>
          </p>
        </div>
        <!-- Grid column -->
        <div class="col-md-6 col-lg-4 ml-lg-0">
          <!-- Social buttons -->
          <div class="text-center text-md-right">
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item">
                <a
                  href="http://www.facebook.com"
                  class="btn-floating btn-sm rgba-white-slight mx-1"
                >
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="http://www.twitter.com" class="btn-floating btn-sm rgba-white-slight mx-1">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="http://www.google.com" class="btn-floating btn-sm rgba-white-slight mx-1">
                  <i class="fa fa-google-plus"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="http://www.linkedin.com/liao-max"
                  class="btn-floating btn-sm rgba-white-slight mx-1"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="http://www.github.com/max-liao"
                  class="btn-floating btn-sm rgba-white-slight mx-1"
                >
                  <i class="fa fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
    <!-- Footer Links -->
  </footer>
</template>

<script>
export default {
  name: 'mdbfooter',
  data () {
    return {
      company: 'Booster Bears'
    }
  }
}
</script>

<style>
.page-footer {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #212121;
}
</style>
