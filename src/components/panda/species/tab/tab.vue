<template>
	<div class="species_right1">
		<h2><span></span>{{title}}<span></span></h2>
		<ul>
			<li v-for="obj in dataset">
				<router-link to=""><img :src="obj.img" alt="" />{{obj.type}}</router-link>
			</li>
		</ul>

	</div>
</template>

<script>

	import http from '../../../../utils/httpclient'
	export default {
		data() {
			return {
				ss: 'http://img1.lukou.com/static/p/commodity/img/20171116-150904.jpeg',
				dataset: [],
				title:''
			}
		},
		methods: {
			changetab(tabname){
				http.post('tabs', {tabname:tabname}).then((res) => {
					this.title = res.data[0].title
					 this.dataset =res.data[0].data;
				})
			}
		}
		
		
	}
</script>

<style>
	.species_right1 h2 {
		height: 60px;
		font-size: 28px;
		color: #7D7978;
		text-align: center;
		line-height: 60px;
		font-weight: normal;
	}
	
	.species_right1 h2 span {
		display: inline-block;
		width: 83px;
		margin: 0 25px 15px 25px;
		height: 1px;
		background-color: gray;
	}
	
	.species_right1 ul {
		overflow: inherit;
	}
	
	.species_right1 li {
		text-align: center;
		float: left;
		height: 250px;
		width: 33.3%;
	}
	
	.species_right1 li a {
		display: inline-block;
		color: #7D7978;
	}
</style>