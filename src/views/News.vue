<template>
    <div>
        <Navbar/>
        <section class="section-header pb-4 pb-lg-3 mb-0 mb-lg-2 text-white" style="background-image:linear-gradient(to top, #134e5e, #dde0e2, #ffffff)">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8 text-center">
                        <p class="opensansfont dis-2 mb-2">LATEST NEWS</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg">
            <div class="container">
                <div class="row">
                    <div class="card-deck">
                        <div class="card animate-up-3 shadow-soft">
                            <a href="">
                            <img src="http://localhost:8000/static/assets/img/img-1-1000x600.jpg" class="card-img-top">
                            </a>
                            <div class="card-body">
                                <h5 class="card-title"><a href=""></a></h5>
                                <p class="card-text"></p>
                                <h4 class="card-text"></h4>
                            </div>
                            <div class="card-footer">
                                <p class="text-muted"><a class="badge badge-primary" href="">Read More</a></p>
                            </div>
                        </div>
                        <div class="card animate-up-3 shadow-soft">
                            <a href="">
                                <img src="http://localhost:8000/static/assets/img/img-1-1000x600.jpg" class="card-img-top">
                            </a>
                            <div class="card-body">
                                <h5 class="card-title"><a href="" target="_blank"></a></h5>
                                <h4 class="card-text"></h4>
                            </div>
                            <div class="card-footer">
                                <p class="text-muted"><a class="badge badge-primary" href="" target="_blank">Read More</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br><br>
            <nav aria-label="Page navigation example">
                <ul class="pagination circle-pagination justify-content-center">
                
                    <li class="page-item">
                        <a class="page-link" tabindex="-1" href=""><i class="fas fa-angle-double-left"></i></a>
                    </li>
                        <li class="active page-item">
                            <a class="page-link" href="">1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="">2</a>
                        </li>
                    <li class="page-item">
                        <a class="page-link" href=""><i class="fas fa-angle-double-right"></i></a>
                    </li>
                </ul>
            </nav>
        </section>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
    name: 'News',
    components: {
        Navbar
    }
}
</script>

<style>
.nunitofont {
    font-family: 'Nunito Sans', sans-serif;
}
.opensansfont {
    font-family: 'Open Sans', sans-serif;
}

.dis-2 {
    font-size: 56px;
    font-weight: 700;
    line-height: 73px;
}
</style>