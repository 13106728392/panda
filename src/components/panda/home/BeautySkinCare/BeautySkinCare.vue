<template>
    <div class="home_BeautySkinCare">
        <div class="BeautySkinCare_header">
            <div class="top">
                <span class="line"></span>
                <span class="center"><i class="before"></i>潮流精选<i class="after"></i></span>
                <span class="line"></span>
            </div>
            <div class="center">
                <ul class="list1">
                    <router-link to="" ><img src="http://img1.lukou.com/static/coupon/p/misc/20170830-150038.jpeg" /><span>面膜</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/coupon/p/misc/20170830-150048.jpeg" /><span>洁面</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20171116-175205.jpeg" /><span>防晒隔离</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/coupon/p/misc/20170830-150025.jpeg" /><span>口红</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/coupon/p/misc/20170829-005746.jpeg" /><span>基础护肤</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20171110-182657.jpeg" /><span>美甲</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20171112-002121.jpeg" /><span>眼妆</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/coupon/p/misc/20171012-203615.jpeg" /><span>套装</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/coupon/p/misc/20170829-005822.jpeg" /><span>底妆</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20171112-002131.jpeg" /><span>男士护肤</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20180329-221207.jpeg" /><span>品牌特卖</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/coupon/p/misc/20170830-150057.jpeg" /><span>美瞳</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20171112-002141.jpeg" /><span>美容工具</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20171112-002152.jpeg" /><span>眼部护理</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20180316-175347.png" /><span>香水</span></router-link>
                </ul>
            </div>
            <div class="bottom">
                <span class="line"></span>
                <span class="center"><i class="before"></i>大家都在逛<i class="after"></i></span>
                <span class="line"></span>
            </div>
        </div>
        <div class="BeautySkinCare_main">
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
    import './BeautySkinCare.scss';
    export default {
        data(){
            return {
                dataset:[{img:'//img1.lukou.com/static/p/commodity/img/20027668.jpeg',content:'欧诗漫套装旗舰店专柜正品水乳补水保湿美白淡斑学生化妆护肤品女',sale:49.0},{img:'//img.alicdn.com/imgextra/i3/TB1QBDQQFXXXXXEaXXXXXXXXXXX_!!0-item_pic.jpg',content:'买2送1 欧丽丝女士淡香水50ml 持久清新甜美诱惑香氛桂花茉莉玫瑰',sale:6.9},{img:'//gd3.alicdn.com/imgextra/i1/95460045/TB2ZCabgBHH8KJjy0FbXXcqlpXa_!!95460045.jpg',content:'按压口红持久保湿不脱色咬唇学生豆沙色补水正品唇膏防水不易掉色',sale:5.9},{img:'//img1.lukou.com/static/p/commodity/img/20027668.jpeg',content:'欧诗漫套装旗舰店专柜正品水乳补水保湿美白淡斑学生化妆护肤品女',sale:49.0},{img:'//img.alicdn.com/imgextra/i3/TB1QBDQQFXXXXXEaXXXXXXXXXXX_!!0-item_pic.jpg',content:'买2送1 欧丽丝女士淡香水50ml 持久清新甜美诱惑香氛桂花茉莉玫瑰',sale:6.9},{img:'//gd3.alicdn.com/imgextra/i1/95460045/TB2ZCabgBHH8KJjy0FbXXcqlpXa_!!95460045.jpg',content:'按压口红持久保湿不脱色咬唇学生豆沙色补水正品唇膏防水不易掉色',sale:5.9},{img:'//img1.lukou.com/static/p/commodity/img/20027668.jpeg',content:'欧诗漫套装旗舰店专柜正品水乳补水保湿美白淡斑学生化妆护肤品女',sale:49.0},{img:'//img.alicdn.com/imgextra/i3/TB1QBDQQFXXXXXEaXXXXXXXXXXX_!!0-item_pic.jpg',content:'买2送1 欧丽丝女士淡香水50ml 持久清新甜美诱惑香氛桂花茉莉玫瑰',sale:6.9},{img:'//gd3.alicdn.com/imgextra/i1/95460045/TB2ZCabgBHH8KJjy0FbXXcqlpXa_!!95460045.jpg',content:'按压口红持久保湿不脱色咬唇学生豆沙色补水正品唇膏防水不易掉色',sale:5.9}]
            }
        },
    }
</script>