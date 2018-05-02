<template>
	<div class="car">
		<div class="car_top">
			购物车	
			<span>编辑</span>
		</div>
		<div class="car_main">
			<ul>
				<li v-for="obj,idx in goodslist">
					<input type="checkbox"  class="smallcheck" />
					<img :src="obj.src" alt="" />
					<p>{{obj.name}}</p>
					<h3>288</h3>
					<h4>￥{{obj.prices}}</h4>
					<span>x{{obj.qty}}</span>
				</li>
			<!--<li>
					<input type="checkbox"  />
					<img src="http://img.alicdn.com/imgextra/i2/3406346549/TB2XGvRg21TBuNjy0FjXXajyXXa_!!3406346549.jpg_400x400q90.jpg" alt="" />
					<p>夏季半身裙白色高腰格子欧根纱半身裙子蓬蓬裙百褶短裙纱裙A字裙</p>
					<h3>288</h3>
					<h4>￥40</h4>
					<span>x1</span>
				</li>
				<li></li>-->
			</ul>
			
			
			
			
			
		</div>
		
		<div class="car_bottom">
			<h2> 
			<input type="checkbox" v-model="checked"  v-on:click="allclick" />
			全选
			</h2>
			<div class="car_bottom_right">
				合计： <span>￥<i>0</i></span> 
				<router-link to="">结算</router-link>
			</div>
			
			
			
		</div>
		
		
		
		
	</div>
	
</template>

<script>
	import $ from 'jquery';
	export default{
		methods:{
			allclick(){
				//全选
				let $sm = $('.smallcheck').prop('checked',!this.checked)
			
				
			}
		},
		data(){
			return {
				checked:'false',
				goodslist:[{src:'http://img.alicdn.com/imgextra/i2/3406346549/TB2XGvRg21TBuNjy0FjXXajyXXa_!!3406346549.jpg_400x400q90.jpg',
				name:'夏季半身裙白色高腰格子纱裙A字裙',prices:40,qty:1},{src:'http://img.alicdn.com/imgextra/i2/3406346549/TB2XGvRg21TBuNjy0FjXXajyXXa_!!3406346549.jpg_400x400q90.jpg',
				name:'夏季半身裙白纱半身裙子蓬蓬裙叔叔裙A字裙',prices:80,qty:5},{src:'http://img.alicdn.com/imgextra/i2/3406346549/TB2XGvRg21TBuNjy0FjXXajyXXa_!!3406346549.jpg_400x400q90.jpg',
				name:'夏季半身裙白色高腰格子欧根纱半身裙子蓬蓬裙百褶短裙纱裙A字裙',prices:90,qty:2},
				{src:'http://img.alicdn.com/imgextra/i2/3406346549/TB2XGvRg21TBuNjy0FjXXajyXXa_!!3406346549.jpg_400x400q90.jpg',
				name:'夏季半身裙白色高腰格子欧根纱半身裙子蓬蓬裙百褶短裙纱裙A字裙',prices:90,qty:2},
				]
			}
		}
		
		
		
	}
</script>

<style lang="scss">
	@import'car.scss';
</style>