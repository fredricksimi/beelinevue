<template>
  <div>
    <Navbar/>
    <div style="background-color:#f5f6fc">
      <section>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/hero.png" class="img-fluid"/>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-5 pt-5">
            <p class="nunitofont custom-1">Wecome to Beeline Challenges</p>
            <p class="lead custom-2 nunitofont">Welcome to our CHALLENGES platform</p>
            <p class="lead custom-2 nunitofont">Join forces with a global network of innovators, funders, academia and industries to solve tomorrow's problems today</p>
          </div>
        </div>
      </div>
      </section>
    </div>
    <section>
      <div class="container">
        <p class="custom-3 nunitofont text-center pb-5">Meet our intuitive platform</p>
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/feature-illustration-2.svg" class="img-fluid"/>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-5 pt-5">
            <p class="nunitofont custom-4">
              <i class="fa fa-check-circle-o" aria-hidden="true" style="color:#05A677;"></i> 
              Get a chance to be part of something bigger together.
            </p>
            <p class="nunitofont custom-4">
              <i class="fa fa-check-circle-o" aria-hidden="true" style="color:#05A677;"></i> 
              Get the most out of every resource available to tackle the challenges.
            </p>
            <p class="nunitofont custom-4">
              <i class="fa fa-check-circle-o" aria-hidden="true" style="color:#05A677;"></i> 
              Get support and solve most of the societal problems.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section style="background-color:#f5f6fc">
      <div class="container" style="max-width:1300px;">
        <p class="custom-3 nunitofont text-center pb-5">Our Challenges</p>
        <div class="row">
          <div class="col-xl-6">
            <div class="card">
              <div class="card-header border-0" style="background-color:white !important">
                  <p class=" font-weight-bolder nunitofont">AUDIENCE</p>
              </div>
              <div class="pr-4 pl-4 pb-5 mt--2">
                <ul class="list-inline">
                  <li class="list-inline-item pb-2">
                  <a href="/audiences/2" class="small" style="background-color: #d1f2ff; padding: 4px 10px; border-radius:5px">students</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="card">
              <div class="card-header border-0" style="background-color:white !important">
                  <p class=" font-weight-bolder nunitofont">TAGS</p>
              </div>
              <div class="pr-4 pl-4 pb-5 mt--2">
                  <ul class="list-inline">
                    <li class="list-inline-item pb-2">
                    <a href="/tags/2" class="small text-white" style="background-color: #9461c1; padding: 4px 10px; border-radius:5px">#Health</a>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 card-group">
            <!-- <div class="col-sm-4"> -->
            <div class="card animate-up-3 mt-5" style="border-radius:15px;">
                <div class="date" style="background-color:#EE5050; padding:2px 4px; border-radius:5px;position: absolute;top: 14px;left:16px;">
                    
                    <span class="day font-weight-bolder text-white">3&nbsp;months left</span>
                    
                </div>
                <ul class="menu-content" style="position: absolute;top: 14px;right: 16px;">
                    
                </ul>
                <a href="">
                    <img src="" class="card-img-top" style="height:200px;width:100%">
                </a>
                <div class="card-body bg-white" style="border-radius:0 0 15px 15px;box-shadow: 0 15px 12px rgba(0, 0, 0, 0.2)">
                    <p><span class="author text-black font-weight-bolder">China Shanghai International …</span>
                        <span class="text-black font-weight-bolder pr-2" style="float:right!important">Status 
                        <span class="badge badge-success badge">
                        Open
                        </span></span>
                    </p>
                    <h5 class="card-title"><a href="">The Golden Pinwheel Young Illustrators …</a></h5>
                    <p class="card-text">The Golden Pinwheel Young Illustrators Competition is an international illustration contest held annually with the support of the Shanghai Press and …</p>
                    <p class="text-black pt-3 font-weight-bolder"><i class="fas fa-trophy text-brown"></i>&nbsp;US$5,000</p>
                </div>
            </div>
          <!-- </div> -->
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center pt-5">
            <!-- Button Modal -->
            <a href="/challenges" class="btn btn-primary animate-up-2 nunitofont btn-lg">
            ALL CHALLENGES</a>
          </div>
        </div>
      </div>
    </section>
      <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Navbar,
    Footer
  }
}
</script>
<style>
.nunitofont {
    font-family: 'Nunito Sans', sans-serif;
}
.custom-1 {
  font-size: 40px; 
  font-weight: 700; 
  line-height: 52px;
  color: #24262b;
}
.custom-2 {
  color:#4a5073;
  font-size: 17px;
  line-height: 32px;
}
.custom-3 {
  font-size: 40px;
  line-height: 52px;
  font-weight: 700;
}
.custom-4{
  font-family: 16px;
  line-height: 26px;
  color:#4a5073;
}
section {
  padding: 120px 0;
}
</style>