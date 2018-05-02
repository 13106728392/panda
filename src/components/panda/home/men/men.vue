<template>
    <div class="home_men">
        <div class="men_header">
            <div class="top">
                <span class="line"></span>
                <span class="center"><i class="before"></i>潮流精选<i class="after"></i></span>
                <span class="line"></span>
            </div>
            <div class="center">
                <ul class="list1">
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20180313-215143.jpeg" /><span>T恤</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20180226-172215.jpeg" /><span>卫衣</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20180313-215019.jpeg" /><span>裤装</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/coupon/p/misc/20171016-191907.jpeg" /><span>衬衫</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20180119-145734.jpeg" /><span>牛仔裤</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20171112-002356.jpeg" /><span>休闲裤</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20180118-162418.jpeg" /><span>情侣装</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20180313-215340.jpeg" /><span>外套</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/coupon/p/misc/20171012-200157.jpeg" /><span>毛衣</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20180313-215325.jpeg" /><span>棒球服</span></router-link>
                </ul>
            </div>
            <div class="bottom">
                <span class="line"></span>
                <span class="center"><i class="before"></i>大家都在逛<i class="after"></i></span>
                <span class="line"></span>
            </div>
        </div>
        <div class="men_main">
            <ul class="list">
                <li v-for="obj in dataset">
                    <router-link to="">
                        <img :src="obj.img"/>
                        <p><img src="//img6.lukou.com/js/img/baoyou.20f74bf.png"/>{{obj.content}}</p>
                        <div class="price">￥<span>{{parseInt(obj.sale)}}</span><span>.{{parseInt(obj.sale*10%10)}}</span></div>
                    </router-link>                     
                </li>                
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    import './men.scss';
    export default {
        data(){
            return {
                dataset:[{img:'//gd3.alicdn.com/imgextra/i1/1849977214/TB2sRLJevfM8KJjSZPfXXbklXXa_!!1849977214.jpg',content:'春夏季运动男士卫衣男连帽带帽衫薄款韩版宽松潮流学生外套上衣服',sale:28.0},{img:'//gd1.alicdn.com/imgextra/i3/2358123483/TB2XDpwc6JTMKJjSZFPXXbHUFXa_!!2358123483.jpg',content:'春秋季日系潮牌男连帽卫衣薄款 女休闲长袖帽衫情侣款外套嘻哈风',sale:15.0},{img:'//gd4.alicdn.com/imgextra/i1/1719093662/TB2H8mediC9MuFjSZFoXXbUzFXa_!!1719093662.jpg',content:'夏季潮流新款日韩版宽松七分袖T恤男士5分短袖上衣服情侣学生中袖',sale:19.8},{img:'//gd3.alicdn.com/imgextra/i1/1849977214/TB2sRLJevfM8KJjSZPfXXbklXXa_!!1849977214.jpg',content:'春夏季运动男士卫衣男连帽带帽衫薄款韩版宽松潮流学生外套上衣服',sale:28.0},{img:'//gd1.alicdn.com/imgextra/i3/2358123483/TB2XDpwc6JTMKJjSZFPXXbHUFXa_!!2358123483.jpg',content:'春秋季日系潮牌男连帽卫衣薄款 女休闲长袖帽衫情侣款外套嘻哈风',sale:15.0},{img:'//gd4.alicdn.com/imgextra/i1/1719093662/TB2H8mediC9MuFjSZFoXXbUzFXa_!!1719093662.jpg',content:'夏季潮流新款日韩版宽松七分袖T恤男士5分短袖上衣服情侣学生中袖',sale:19.8},{img:'//gd3.alicdn.com/imgextra/i1/1849977214/TB2sRLJevfM8KJjSZPfXXbklXXa_!!1849977214.jpg',content:'春夏季运动男士卫衣男连帽带帽衫薄款韩版宽松潮流学生外套上衣服',sale:28.0},{img:'//gd1.alicdn.com/imgextra/i3/2358123483/TB2XDpwc6JTMKJjSZFPXXbHUFXa_!!2358123483.jpg',content:'春秋季日系潮牌男连帽卫衣薄款 女休闲长袖帽衫情侣款外套嘻哈风',sale:15.0},{img:'//gd4.alicdn.com/imgextra/i1/1719093662/TB2H8mediC9MuFjSZFoXXbUzFXa_!!1719093662.jpg',content:'夏季潮流新款日韩版宽松七分袖T恤男士5分短袖上衣服情侣学生中袖',sale:19.8}]
            }
        },
    }
</script>