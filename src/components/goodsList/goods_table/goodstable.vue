<template>
	<ul>
		<li v-for="obj in dataset" :key="obj._id">
			<router-link :to="{ path:'/goodDetail', query: { id: obj._id} }">
			<img :src="obj.product_imgurl" />
			<h5>{{obj.product_name}}</h5>
			<span><i>￥</i>{{obj.price}}</span>
			<h6>{{obj.qty_sold}}人已买</h6>
			</router-link>
		</li>
	</ul>
</template>

<script>
	import http from '../../../utils/httpclient'
	
	export default{
		data(){
			return{
				dataset:[]
			}
		},
		props:['config'],
		mounted(){
			http.post(this.config.api,{product_type:this.config.product_type}).then((res) => {
               	this.dataset = res.data
             
            })

		}
		
		
		
		
	}
	
</script>

<style>
</style>