<template>
    <div id="panda">
        <div id="main">
            <router-view></router-view>
        </div>
        <footer id="footer">
            <ul>
                 <li>
                 	  <span class="iconfont icon-shouye"></span>
                     <router-link to="">首页</router-link>
                 </li>
                 <li>
                 	  <span class="iconfont icon-fenlei"></span>
                     <router-link to="/species">分类</router-link>
                 </li>
                 <li>
                 	  <span class="iconfont icon-gouwucheman"></span>
                     <router-link to="/car">购物车</router-link>
                 </li>
                 <li>
                 	   <span class="iconfont icon-ren"></span>
                     <router-link to="/owner">我的</router-link>
                 </li>
             </ul>            
        </footer>
    </div>
</template>

<script type="text/javascript">
    import '../../style/panda.scss';
</script>

