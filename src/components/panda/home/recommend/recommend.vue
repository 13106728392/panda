<template>
    <div class="home_recommend">
        <div class="recommend_banner">
            <ul>
                <li v-for="obj in banner_data">
                    <router-link :to="obj.link" >
                        <img :src="obj.img"/>
                    </router-link> 
                </li>

            </ul>
            <div class="page"></div>
        </div>
        <div class="recommend_main">
            <div class="main1">
                <div class="left" @click="$router.push({name:main_data.main1.left.link})">
                    <span>9块9包邮</span>
                    <span>保你不亏</span>
                    <img :src="main_data.main1.left.img"/>
                </div>
                <div class="right">
                    <div class="same" @click="$router.push({name:main_data.main1.right.link1})">
                        <span>大额卷专区</span>
                        <span>秒杀一折起</span> 
                        <img :src="main_data.main1.right.img1"/>                       
                    </div>
                    <div class="same" @click="$router.push({name:main_data.main1.right.link2})">
                        <span>特价春款</span>
                        <span>低至9块9</span>  
                        <img :src="main_data.main1.right.img2"/>                      
                    </div>
                </div>
            </div>
            <div class="main2">
                <div class="head">
                    <span>每日排行榜</span>
                    <router-link to="">查看全部 ></router-link> 
                </div>
                <div class="bottom">
                    <div class="content">
                        <router-link to="" v-for="obj in main_data.main2">
                            <img :src="obj.img" />
                            <p>{{obj.content}}</p>
                            <p>￥<span>{{parseInt(obj.price)}}</span><span>.{{parseInt(obj.price*10%10)}}</span><span>{{obj.buies}}人已买</span></p>
                        </router-link>
                        <router-link to="">
                            <div class="more">
                                <p><span>更多商品</span></p>
                                <span>see-more</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="main3">
                <span class="line"></span>
                <span class="center"><i class="before"></i>更多优惠更新中 (ง •̀_•́)ง<i class="after"></i></span>
                <span class="line"></span>
            </div>
            <div class="main4">
                <ul>
                    <li v-for="obj in main_data.main4">
                        <router-link to="" v-if="obj.type" class="ncot">
                            <img :src="obj.img"/>
                            <p><img src="//img6.lukou.com/js/img/baoyou.20f74bf.png"/>{{obj.content}}</p>
                            <div class="price">￥<span>{{parseInt(obj.sale)}}</span><span>.{{parseInt(obj.sale*10%10)}}</span></div><del><span>￥{{obj.price}}</span></del>
                        </router-link>
                         <router-link to="" v-else class="cot">
                            <img :src="obj.img"/>
                        </router-link>                       
                    </li>
                </ul>
            </div>
        </div>         
    </div>
</template>

<script type="text/javascript">
    import './recommend.scss';
    export default {
        data:function(){
            return{
                banner_data:[{link:'',img:'//img1.lukou.com/static/p/commodity/img/20180429-112115.jpeg'},{link:'',img:'//img1.lukou.com/static/p/commodity/img/20180423-162110.jpeg'},{link:'',img:'//img1.lukou.com/static/p/commodity/img/20180417-192602.jpeg'},{link:'',img:'//img1.lukou.com/static/p/commodity/img/20180409-160905.jpeg'}],
                main_data:{
                    main1:{
                        left:{link:'women',img:'//img1.lukou.com/static/p/commodity/img/20180226-162136.jpeg'},
                        right:{link1:'women',img1:'//img1.lukou.com/static/p/commodity/img/20180226-162153.jpeg',link2:'men',img2:'//img1.lukou.com/static/p/commodity/img/20180226-162210.jpeg'}
                    },
                    main2:[{img:'//img1.lukou.com/static/p/commodity/img/20027534.jpeg',content:'脸部去角质面部女',price:3.8,buies:17540},{img:'//img1.lukou.com/static/p/commodity/img/20027498.jpeg',content:'卡奈资小羊皮口红',price:9.9,buies:27537},{img:'//img1.lukou.com/static/p/commodity/img/20027368.jpeg',content:'瘦脸神器脸部滑轮',price:9.9,buies:12435},{img:'//img1.lukou.com/static/p/commodity/img/20026961.jpeg',content:'2支装 眼线笔持久',price:7.9,buies:56157},{img:'//img1.lukou.com/static/p/commodity/img/20024349.jpeg',content:'洗脸发带女发绳',price:2.8, buies:82212}],
                    main4:[{img:'//img.alicdn.com/imgextra/i1/50144062/TB201iDXuUXBuNjt_a0XXcysXXa_!!50144062.jpg',type:true,content:'简约爱心蓝光VIVO x20手机壳x9防摔x21挂绳x9s硅胶套女款潮x9plus',sale:9.8,price:19.8},{img:'//img.alicdn.com/imgextra/i1/50144062/TB201iDXuUXBuNjt_a0XXcysXXa_!!50144062.jpg',type:true,content:'简约爱心蓝光VIVO x20手机壳x9防摔x21挂绳x9s硅胶套女款潮x9plus',sale:9.8,price:19.8},{img:'//img1.lukou.com/static/p/commodity/img/20180501-120723.png',type:false},{img:'//img.alicdn.com/imgextra/i1/50144062/TB201iDXuUXBuNjt_a0XXcysXXa_!!50144062.jpg',type:true,content:'简约爱心蓝光VIVO x20手机壳x9防摔x21挂绳x9s硅胶套女款潮x9plus',sale:9.8,price:19.8},{img:'//img.alicdn.com/imgextra/i1/50144062/TB201iDXuUXBuNjt_a0XXcysXXa_!!50144062.jpg',type:true,content:'简约爱心蓝光VIVO x20手机壳x9防摔x21挂绳x9s硅胶套女款潮x9plus',sale:9.8,price:19.8},{img:'//img1.lukou.com/static/p/commodity/img/20180501-120723.png',type:false},{img:'//img.alicdn.com/imgextra/i1/50144062/TB201iDXuUXBuNjt_a0XXcysXXa_!!50144062.jpg',type:true,content:'简约爱心蓝光VIVO x20手机壳x9防摔x21挂绳x9s硅胶套女款潮x9plus',sale:9.8,price:19.8},{img:'//img.alicdn.com/imgextra/i1/50144062/TB201iDXuUXBuNjt_a0XXcysXXa_!!50144062.jpg',type:true,content:'简约爱心蓝光VIVO x20手机壳x9防摔x21挂绳x9s硅胶套女款潮x9plus',sale:9.8,price:19.8},{img:'//img1.lukou.com/static/p/commodity/img/20180501-120723.png',type:false}]
                },
            }
        },
        mounted:function(){
            var $banner = $('#panda_home .recommend_banner');
            var $banner_ul = $banner.find('ul');
            var $banner_lis = $banner_ul.find('li');
            var $main2 = $('#panda_home .recommend_main .main2 .bottom');
            var $main2_content = $main2.children();
            var $main2_lis = $main2_content.find('a');
            //轮播图
            ;(function(){
                var len = $banner_lis.width();

                var $li_first = $banner_lis.eq(0).clone();
                var $li_last = $banner_lis.eq($banner_lis.length-1).clone();
                $banner_ul.append($li_first);
                $banner_ul.prepend($li_last);

                $banner_lis = $banner_ul.find('li');

                $banner_ul.width($banner_lis.length * len);
                        // 分页
                for(var i=0; i<$banner_lis.length - 2; i++){
                    var $span = $('<span/>');

                    $banner.find('.page').append($span);

                    if(i==0){
                        $span.addClass('active');
                    } 
                }
                        //动画
                $banner_ul.css('left',- $banner_lis.width())
                var idx = 2;
                var timer = setInterval(banner_move,3000);
                        //移入移出
                $banner.on('touchstart', function(event){
                    clearInterval(timer);
                    var ox = event.touches[0].pageX;
                    var left = $banner_ul.position().left;
                    $banner.on('touchmove',function(event){
                        $banner_ul.css('left', event.touches[0].pageX - ox + left)
                    })
                })
                .on('touchend', function(event){
                    timer = setInterval(banner_move,3000)
                    var remainder = Math.round($banner_ul.position().left / $banner_lis.width());
                    if((-remainder) < idx){
                        idx--;
                        $banner_ul.animate({left: -idx * len},300)
                        if(idx==0){
                            idx=$banner_lis.length-2;
                        }
                    }else{
                        idx++;
                        $banner_ul.animate({left: -idx * len},300)
                    }

                    
                    if(idx==$banner_lis.length -1){
                        $banner.find('.page span').eq(0).addClass('active').siblings().removeClass('active');
                    } else {
                        $banner.find('.page span').eq(idx-1).addClass('active').siblings().removeClass('active');
                    }

                })
                    //封装banner移动
                function banner_move(){
                    if(idx==$banner_lis.length -1){
                        $banner.find('.page span').eq(0).addClass('active').siblings().removeClass('active');
                    } else {
                        $banner.find('.page span').eq(idx-1).addClass('active').siblings().removeClass('active');
                    }
                    
                    if(idx>$banner_lis.length - 1){
                        idx=1;
                        $banner_ul.css('left',- $banner_lis.width())
                    }
                    $banner_ul.animate({left: -idx * len},700)

                    idx++;
                }               
            })();

            //main2滑动
            ;(function(){
                $main2_content.width(($main2_lis.width()+40)*$main2_lis.length)

                var main2_len = $main2_content.width();
                var a_len = $main2_lis.width();

                $main2.on('touchstart',function(event){
                    var ox = event.touches[0].pageX;
                    var left = $main2_content.position().left;
                    $main2.on('touchmove',function(event){
                        $main2_content.css('left', event.touches[0].pageX - ox + left)
                    })
                })
                .on('touchend',function(){
                    if($main2_content.position().left > 0){
                        $main2_content.animate({left:0},300)
                    }
                    if($main2_content.position().left < -main2_len+a_len*3){
                        $main2_content.animate({left:-main2_len+a_len*3},300)
                    }
                })

            })();


        }
    };
</script>