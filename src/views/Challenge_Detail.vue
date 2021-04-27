<template>
<div>
    <Navbar/>
      <div class="main-content" id="panel">

    <!-- Header -->
    <div class="header pb-6" style="background-image: linear-gradient(#e38928, #121212);">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
          </div>
<div>
<h1 class="display-2 text-white text-center mt-6 mb-3 opensansfont" style="font-size: 2.75rem;font-weight: 600;line-height: 1.5;"><b>{{challenge.title}}</b></h1>
<p class="text-white text-center opensansfont"><i class="fa fa-bullhorn"></i>Targeted Audience: <b v-for="aud in challenge.targetedAudience" :key="aud.id">{{aud.name}}</b></p>
<p class="text-white text-center opensansfont"><i class="fa fa-phone"></i>Point of Contact: <b>{{challenge.pointOfContact}}</b></p>
<p class="text-white text-center opensansfont"><i class="fa fa-trophy"></i>Award: <b>{{challenge.prize}}</b></p>
<p class="text-white text-center opensansfont"><i class="fa fa-clock"></i> Duration: <a class="btn btn-sm btn-neutral"><span style="color:black!important">{{challenge.openUntil}} left</span></a></p>
<div class="row align-items-center justify-content-xl-between">
  <div class="col-xl-12">
    <div class="text-center text-xl-right" style="text-align: right !important;">
      <p class="text-white pt-5"><span class="pt-3 pr-3 pl-3 pb-3" style="background-color:rgba(0,0,0,0.5)"><span class="small opensansfont">Share this post now </span>
      &nbsp;&nbsp;&nbsp; <a href="whatsapp://send?text=https://beeline-challenges.com/" target="_blank"><i class="fab fa-whatsapp icon icon-sm icon-success" style="color:#05A677!important;"></i></a>
      &nbsp;&nbsp;&nbsp; <a href="https://www.facebook.com/sharer/sharer.php?u=https://beeline-challenges.com/" target="_blank"><i class="fab fa-facebook-f icon icon-sm icon-light"></i></a>
      &nbsp;&nbsp;&nbsp; <a href="https://twitter.com/share?url=https://beeline-challenges.com/" target="_blank"><i class="fab fa-twitter icon icon-sm icon-info" style="color:#11cdef!important;"></i></a></span></p>
    </div>
  </div>
</div>


</div>
<br>
<br>
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--6" style="margin-top: -4.5rem !important;">
      <div class="row">
        <div class="col-xl-8">
          <div class="card">
            <div class="card-header border-0">

            </div>
            <div class="pr-4 pl-4 pt-3">
            <p class="opensansfont alaa">Description</p>
            <p v-html="challenge.description"></p>
            </div>
            <hr class="my-4" />
            <div class="pr-4 pl-4 pt-4">
            <p class="opensansfont alaa">Who can Participate</p>
            <p v-html="challenge.whoCanParticipate"></p>
            </div>
            <hr class="my-4" />
            <div class="pr-4 pl-4 pt-4">
            <p class="opensansfont alaa">How to Participate</p>
            <p v-html="challenge.howToParticipate"></p>
            </div>
            <hr class="my-4" />
            <div class="pr-4 pl-4 pt-4">
            <p class="opensansfont alaa">Additional Information</p>
            <p v-html="challenge.additionalInformation"></p>
            </div>
            <br>
            <div class="col text-center mt-4 mb-6">
            <a :href="challenge.externalWebsiteUrl" class="btn btn-success">Visit Original Site</a>
            <a :href="challenge.participateLink" class="btn btn-primary">Participate</a>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="card">
            <div class="card-header border-0">
              <div class="row align-items-center">
                <div class="col">
                  <p class="mb-0 opensansfont" style="font-size:17px; line-height: 26px; color:#32325d; font-weight:400">Related Challenges</p>
                </div>
                <div class="col text-right">
                  <a href="#!" class="btn btn-sm btn-primary opensansfont">See all</a>
                </div>
              </div>
            </div>
            <div class="">
              <ul class="list-group list-group-flush list pr-4 pl-4 pb-4" >
                <li v-for="(otherchallenge, itemObjKey) in challenges" :key="otherchallenge.id" class="list-group-item px-0">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <!-- Avatar -->
                      <a href="#" class="avatar rounded-circle" style="background-color:white!important;">
                        <p style="margin-top:16px;font-size:30px; color:rgba(0,0,0,.15) !important;"><b>{{itemObjKey + 1}}</b></p>
                      </a>
                    </div>
                    <div class="col">
                      <h3>{{otherchallenge.title}}</h3>
                      <div>
                        <p class="small text-muted" v-html="otherchallenge.description"></p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br>
    <!-- <Footer/> -->
    </div>
  </div>
</div>
    
</template>

<script>
import gql from 'graphql-tag'
import Navbar from '../components/Navbar'
import { CHALLENGE_QUERY, OTHER_CHALLENGES_QUERY } from '../constants/graphql'
// import Footer from '../components/Footer'
export default {
    name: 'Challenge_Detail',
    components: {
        Navbar,
    },
    data() {
      return {
        challenge: '',
        id: parseInt(this.$route.params.id),
        challenges:''
      }
    },
    apollo: {
    challenge: {
      query: CHALLENGE_QUERY,
      variables() {
        return {
          id: this.id
        }
      }
    },
    challenges: {
      query: OTHER_CHALLENGES_QUERY,
    }
  },
}
</script>
<style>
.nunitofont {
    font-family: 'Nunito Sans', sans-serif;
}
.opensansfont {
    font-family: 'Open Sans', sans-serif;
}
.alaa{
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 600;
    line-height: 1.5;
    color: #32325d;
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