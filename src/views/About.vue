<template>
  <div>
    <Navbar/>
    <section class="section section-lg pt-7 " style="background-color:#f4f6fc !important">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-sm-12">
          <img src="../assets/feature-illustration-2.svg">
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="icon-box mt-2 mt-lg-0">
              <i class="bx bx-receipt"></i>
              <h4 class="nunitofont custom-6">About Beeline Challenges</h4>
              <p class="pt-3 nunitofont custom-7">The idea of providing a platform that enables innovators in Africa and LMICs 
                contribute to solving major societal issues has been inspired by the COVID-19 pandemic as we 
                see organizations and governments urgently hunting for ideas and contributions from minds all 
                across the globe. </p>
              <p class="nunitofont custom-7">We have come up with a way of consolidating this information so that it becomes 
                easy for innovators to connect with the required funding, fellow innovators and sponsors. This is 
                a platform designed for innovators, the industry and academia in Africa and LMICs to participate 
                and contribute in generation of solutions and knowledge that impacts the entire globe. We curate 
                opportunities offered by innovation hubs, government and other entities from across the world and 
                you are now able to receive this information from one source.</p>
              <p class="nunitofont custom-7">From the platform, you can also meet 
                innovators with similar interests away from your organization or even country and you can 
                contact them to partner with you. The platform is provided to you by Research Beeline Ltd, a social 
                enterprise based in Juja, Kenya which also runs a funding platform for researchers in <a href="https://www.fundsbeeline.org">www.fundsbeeline.org</a> 
                and for NGOs and non-profits in Africa <a href="https://www.fundsbeeline.org">www.fundsbeeline.org</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'About',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
.nunitofont {
    font-family: 'Nunito Sans';
}
.custom-6{
  font-size:24px;
  line-height: 31px;
  color:#24262b;
  font-weight:600;
}
.custom-7{
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  color:#4a5073;
}
</style>