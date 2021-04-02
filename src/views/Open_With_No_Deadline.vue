<template>
    <div>
        <Navbar/>
        <section class="section-header pb-4 pb-lg-3 mb-0 mb-lg-2 text-white" style="background-image:linear-gradient(to top, #003973, #e4e5e6, #ffffff);">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8 text-center">
                        <p class="mb-5 opensansfont dis-2">CHALLENGES WITH NO DEADLINE</p>
                    </div>
                </div>
            </div>
        </section>
        <div class="container">
            <div class="row pt-5 pb-3">
                <div class="col-md-4">
                    <div class="navbar-search navbar-search-light form-inline mr-sm-3">
                        <div class="form-group mb-0">
                            <div class="input-group input-group-alternative input-group-merge">
                                <div class="input-group-prepend" style="border-radius: 2rem;">
                                <span class="input-group-text"><img src="https://img.icons8.com/android/18/000000/search.png"/></span>
                                </div>
                                <input class="form-control" placeholder="Search by Sponsor's Name" type="text" id="user-input" style="width:250px;">
                                <!-- <button class="btn btn-success my-2 my-sm-0 font-normal" type="submit">Search</button> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 form-inline">
                    <label class="form-control-label">Sort By&nbsp;&nbsp;</label>&nbsp;
                    <select class="select form-control-sm" name="" id="user-choice">
                        <option value="RecentlyAdded">Recently Added</option>
                        <option value="Alphabetically">Alphabetically A-Z</option>
                        <option value="MoreTimeLeft">More Time Left</option>
                        <option value="LessTimeLeft">Less Time Left</option>
                    </select>
                </div>
                <div class="col-md-4">
                    <!-- <p><a href="/advanced-search" class="badge badge-pill badge-primary badge-lg">Use Advanced Search</a></p> -->
                    <a href="/advanced-search"><button type="button" class="btn btn-primary">Use Advanced Search</button></a>
                </div>
            </div>
        </div>
        <section>
            <div class="container" style="max-width:1300px;">
                <br>
                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-header border-0">
                                <p class=" font-weight-bolder">AUDIENCES</p>
                            </div>
                            <div class="pr-4 pl-4 pb-5 mt--2">
                                <ul class="list-inline">
                                <li class="list-inline-item pb-2">
                                <a href="" class="small" style="background-color: #d1f2ff; padding: 4px 10px; border-radius:5px"></a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-header border-0">
                                <p class=" font-weight-bolder">TAGS</p>
                            </div>
                            <div class="pr-4 pl-4 pb-5 mt--2">
                                <ul class="list-inline">
                                
                                <li class ="list-inline-item pb-2">
                                <a href="" class="small text-white" style="background-color: #9461c1; padding: 4px 10px; border-radius:5px">#</a>
                                </li>
                                
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br>
                </div>
            </div>
        </section>
        <section>
            <div class="container" style="max-width:1300px;">
                <div class="row" id="replaceable-content">
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
                <br><br><br>
                <nav aria-label="Page navigation example">
                    <ul class="pagination circle-pagination justify-content-center">
                        <li class="active page-item">
                            <a class="page-link" href="?page=1">1</a>
                        </li>
                    
                        <li class="page-item">
                            <a class="page-link" href="?page=2">2</a>
                        </li>
                    
                        <li class="page-item">
                            <a class="page-link" href="?page=3">3</a>
                        </li>
                    
                        <li class="page-item">
                            <a class="page-link" href="?page=2"><i class="fas fa-angle-double-right"></i></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'Open_With_No_Deadline',
    components: {
        Navbar,
        Footer
    }
}
</script>

<style>
body {
    overflow-x: hidden;
}
.nunitofont {
    font-family: 'Nunito Sans';
}
.opensansfont {
    font-family: 'Open Sans', sans-serif;
}
.dis-2 {
    font-size: 56px;
    font-weight: 700;
    line-height: 73px;
}
section {
    margin-top:-20px;
}

.card-header {
    background-color:white !important;
}

@keyframes blinker {
from {opacity: 1.0;}
to {opacity: 0.0;}
}

.blink {
    text-decoration: blink;
    animation-name: blinker;
    animation-duration: 0.6s;
    animation-iteration-count:infinite;
    animation-timing-function:ease-in-out;
    animation-direction: alternate;
}
</style>