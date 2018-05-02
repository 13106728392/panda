<template>
    <div id="panda_home">
        <div class="home_header">
            <div class="top">
                <div class="sex">
                    <span>男</span>
                    <span class="active">女</span>
                </div>
                <div class="home_search">
                    <input type="text" class="search" id="search" :placeholder="search"/>
                    <i class="zoom"></i>                  
                </div>
            </div>
            <div class="bottom">
                <div class="b_left">
                    <span class="active" @click="$router.push({name:'recommend'})">今日推荐</span>
                    <i class="line">|</i>
                </div>
                <div class="b_center">
                    <ul class="list">
                        <li><span @click="$router.push({name:'women'})">女装</span></li>
                        <li><span @click="$router.push({name:'BeautySkinCare'})">美妆护肤</span></li>
                        <li><span @click="$router.push({name:'men'})">男装</span></li>
                        <li><span @click="$router.push({name:'women'})">配饰</span></li>
                        <li><span @click="$router.push({name:'men'})">女鞋</span></li>
                        <li><span @click="$router.push({name:'BeautySkinCare'})">零食王国</span></li>
                        <li><span @click="$router.push({name:'women'})">箱包</span></li>
                        <li><span @click="$router.push({name:'men'})">个人洗护</span></li>
                        <li><span @click="$router.push({name:'BeautySkinCare'})">男鞋</span></li>
                        <li><span @click="$router.push({name:'women'})">手机周边</span></li>
                        <li><span @click="$router.push({name:'men'})">数码家电</span></li>
                        <li><span @click="$router.push({name:'BeautySkinCare'})">内衣袜子</span></li>
                        <li><span @click="$router.push({name:'women'})">成人用品</span></li>
                        <li><span @click="$router.push({name:'men'})">日用家居</span></li>
                        <li><span @click="$router.push({name:'BeautySkinCare'})">文体娱乐</span></li>
                    </ul>
                </div>
                <div class="b_right" @click="showMenu">
                    <i class="menu"></i>
                </div>
                <div class="menu" v-show="menu">
                    <p>全部分类<i class="del" @click="showMenu"><img src="//img6.lukou.com/js/img/float-close.1eb21c0.png"/></i></p>
                    <ul class="list1">
                        <router-link to="/" ><img @click="showMenu" src="http://img1.lukou.com/static/p/fb/tab/1.png" /><span>今日推荐</span></router-link>
                        <router-link to="women" ><img @click="showMenu" src="http://img1.lukou.com/static/p/fb/tab/2.jpeg" /><span>女装</span></router-link>
                        <router-link to="BeautySkinCare" ><img @click="showMenu" src="http://img1.lukou.com/static/img/category/category_3.jpg" /><span>美妆护肤</span></router-link>
                        <router-link to="men" ><img @click="showMenu" src="http://img1.lukou.com/static/p/fb/tab/5.png" /><span>男装</span></router-link>
                        <router-link to="" ><img @click="showMenu" src="http://img1.lukou.com/static/img/category/category_4.jpg" /><span>配饰</span></router-link>
                        <router-link to="" ><img @click="showMenu" src="http://img1.lukou.com/static/p/fb/tab/13.jpeg" /><span>女鞋</span></router-link>
                        <router-link to="" ><img @click="showMenu" src="http://img1.lukou.com/static/img/category/category_12.jpg" /><span>零食王国</span></router-link>
                        <router-link to="" ><img @click="showMenu" src="http://img1.lukou.com/static/img/category/category_7.jpg" /><span>箱包</span></router-link>
                        <router-link to="" ><img @click="showMenu" src="http://img1.lukou.com/static/img/category/category_8.jpg" /><span>个人洗护</span></router-link>
                        <router-link to="" ><img @click="showMenu" src="http://img1.lukou.com/static/p/commodity/img/20171229-225348.png" /><span>男鞋</span></router-link>
                        <router-link to="" ><img @click="showMenu" src="http://img1.lukou.com/static/p/fb/tab/6.png" /><span>手机周边</span></router-link>
                        <router-link to="" ><img @click="showMenu" src="http://img1.lukou.com/static/img/category/category_10.jpg" /><span>数码家电</span></router-link>
                        <router-link to="" ><img @click="showMenu" src="http://img1.lukou.com/static/img/category/category_11.jpg" /><span>内衣袜子</span></router-link>
                        <router-link to="" ><img @click="showMenu" src="http://img1.lukou.com/static/img/category/category_15.jpg" /><span>成人用品</span></router-link>
                        <router-link to="" ><img @click="showMenu" src="http://img1.lukou.com/static/img/category/category_13.jpg" /><span>日用家居</span></router-link>
                        <router-link to="" ><img @click="showMenu" src="http://img1.lukou.com/static/img/category/category_14.jpg" /><span>文体娱乐</span></router-link>
                    </ul>
                </div>
            </div>
        </div>
        <div class="home_main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script type="text/javascript">
    import './home.scss';

    export default {
        data(){
            return {
                search: "短袖",
                menu:false
            }
        },
        methods:{
            showMenu:function(){
                this.menu = !this.menu
            }
        },
        mounted:function(){
            var $bottom = $('#panda_home .home_header .bottom');
            var $list = $('#panda_home .b_center .list');

            //菜单滑动
            $('#panda_home .b_center').on('touchstart', function(event){
                var ox = event.touches[0].pageX;
                var left = $list.position().left;
                $('#panda_home .b_center').on('touchmove', function(event){
                    $list.css('left', (event.touches[0].pageX - ox + left))
                })
            })
            .on('touchend',function(){
                if($list.position().left > 0){
                    $list.animate({left:0}, 200);
                }
                if($list.position().left < -($list.width()-$list.parent().width())){
                    $list.animate({left:-($list.width()-$list.parent().width())}, 200);
                }                
            })

            //点击菜单
            $bottom.on('click','span',function(){
                $bottom.find('span').removeClass('active');
                $(this).addClass('active');
            })

            
        }


    }
</script>