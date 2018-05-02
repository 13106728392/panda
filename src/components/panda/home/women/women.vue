<template>
    <div class="home_women">
        <div class="women_header">
            <div class="top">
                <span class="line"></span>
                <span class="center"><i class="before"></i>潮流精选<i class="after"></i></span>
                <span class="line"></span>
            </div>
            <div class="center">
                <ul class="list1">
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20171116-150904.jpeg" /><span>T恤</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20180226-171743.jpeg" /><span>衬衫内搭</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20180226-163133.jpeg" /><span>卫衣</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/coupon/p/misc/20170830-145947.jpeg" /><span>外套</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/coupon/p/misc/20170831-181808.jpeg" /><span>裤装</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20180313-214608.jpeg" /><span>半身裙</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20180226-163048.jpeg" /><span>连衣裙</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20180118-162244.jpeg" /><span>情侣装</span></router-link>
                    <router-link to="" ><img src="http://img1.lukou.com/static/p/commodity/img/20180423-180233.jpeg" /><span>短裤</span></router-link>
                </ul>
            </div>
            <div class="bottom">
                <span class="line"></span>
                <span class="center"><i class="before"></i>大家都在逛<i class="after"></i></span>
                <span class="line"></span>
            </div>
        </div>
        <div class="women_main">
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
    import './women.scss';
    export default {
        data(){
            return {
                dataset:[{img:'//gd4.alicdn.com/imgextra/i2/91509902/TB2DHPjkUhnpuFjSZFEXXX0PFXa_!!91509902.jpg',content:'2018夏季新款学生丝带黑蓝内衬清新高腰短裙显瘦A字裙女半身裙子',sale:29.5},{img:'//img.alicdn.com/imgextra/i2/3191337305/TB1HgFyXuGSBuNjSspbXXciipXa_!!0-item_pic.jpg',content:'帛卡琪2018夏新款AA阔腿牛仔短裤女bf宽松可卷边高腰蓝色学生热裤',sale:44.0},{img:'//gd1.alicdn.com/imgextra/i1/0/TB1xLuffS_I8KJjy0FoXXaFnVXa_!!0-item_pic.jpg',content:'复古chic度假风宽松显瘦气质款一字露肩荷叶边吊带上衣女夏季',sale:33.9},{img:'//gd1.alicdn.com/imgextra/i1/2477263588/TB2T1djdBjTBKNjSZFNXXasFXXa_!!2477263588.jpg',content:'2018新款韩版chic树叶印花宽松薄款上衣连帽套头空调衫防晒衣女夏',sale:36.98},{img:'//gd4.alicdn.com/imgextra/i2/91509902/TB2DHPjkUhnpuFjSZFEXXX0PFXa_!!91509902.jpg',content:'2018夏季新款学生丝带黑蓝内衬清新高腰短裙显瘦A字裙女半身裙子',sale:29.5},{img:'//img.alicdn.com/imgextra/i2/3191337305/TB1HgFyXuGSBuNjSspbXXciipXa_!!0-item_pic.jpg',content:'帛卡琪2018夏新款AA阔腿牛仔短裤女bf宽松可卷边高腰蓝色学生热裤',sale:44.0},{img:'//gd1.alicdn.com/imgextra/i1/0/TB1xLuffS_I8KJjy0FoXXaFnVXa_!!0-item_pic.jpg',content:'复古chic度假风宽松显瘦气质款一字露肩荷叶边吊带上衣女夏季',sale:33.9},{img:'//gd1.alicdn.com/imgextra/i1/2477263588/TB2T1djdBjTBKNjSZFNXXasFXXa_!!2477263588.jpg',content:'2018新款韩版chic树叶印花宽松薄款上衣连帽套头空调衫防晒衣女夏',sale:36.98}]
            }
        },
    }
</script>