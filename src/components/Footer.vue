<template>
    <footer class="footer section pt-6 pt-md-8 pt-lg-10 pb-5  text-white overflow-hidden" style="background-image:linear-gradient(#2b5876, #4e4376)">
        <div class="pattern pattern-soft top"></div>
        <div class="container">
        <div class="row">
            <div class="col-lg-4 mb-4 mb-lg-0 pt-2">
                <a class="footer-brand mr-lg-5 d-flex" href="../../index.html">

                    <h2>Beeline Challenges</h2>
                </a>
                <p class="my-1">Location:<br>AICAD Complex, Block C, Suite 10, JKUAT Main Campus, Juja, Kenya</p>
                <p class="my-1">Phone:<br>+254 726 172 847, +254 722 840 993</p>
                <p class="my-1">Email:<br>info@fundsbeeline.com</p>
            </div>
            <div class="col-6 col-sm-4 col-lg-4 mb-4 mb-lg-0">
                <h6>Useful Links</h6>
                <ul class="links-vertical">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/news">News</a></li>
                    <li><a href="/privacy-policy">Privacy Policy</a>
                    </li>
                </ul>
                <div class="row align-items-center justify-content-xl-between">
                    <div class="col-xl-12">
                        <div class="text-center text-xl-left">
                        <p class="text-white pt-2"><span class="">Follow Us </span>
                        &nbsp;&nbsp;&nbsp; <i class="fa fa-whatsapp ml-2" aria-hidden="true"></i>
                        &nbsp;&nbsp;&nbsp; <i class="fa fa-facebook-f ml-1"></i>
                        &nbsp;&nbsp;&nbsp; <i class="fa fa-twitter ml-1"></i></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-4 col-lg-4">
                <h6>Subscribe</h6>
                <p class="font-small">The latest news, articles, and resources, sent straight to your inbox every month.</p>
                <form action="#">
                    <div class="form-row">
                        <div class="col-8">
                            <input type="email" class="form-control mb-2 disabled" placeholder="Email Address" name="email" required="" disabled>
                        </div>
                        <div class="col-4">
                            <button type="submit" class="btn btn-success btn-block disabled" disabled><span style="margin-left:-5px">Subscribe</span></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- <hr class="my-4 my-lg-5"> -->
        <!-- <div class="my-4"></div> -->
        <div class="row">
            <div class="col pt-4 pb-4 mb-md-0">
                <div class="d-flex text-center justify-content-center align-items-center">
                    <p class="font-weight-normal mb-0">© Research Beeline Limited <span class="current-year"></span>. All rights reserved.</p>
                </div>
            </div>
        </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
.section {
  padding: 120px 0;
}
footer {
    font-family: 'Nunito Sans'
}
footer a{
    color:white;
    text-decoration: none;
}
footer a:hover {
    text-decoration: none;
    color:white;
}
</style>