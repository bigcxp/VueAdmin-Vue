<template>
	<div class="main">
		<h1>欢迎来到VueAdmin管理系统</h1>
		<div class="box">
			<el-image :src="require('@/assets/code.jpg')" style="height: 180px; width: 180px;"></el-image>
		</div>
	</div>
		
</template>

<script>
	export default {
		name: "Index",
	}
</script>

<style scoped>
.main>h1 {
	text-align: center;
}
.main {
	width: 100%;
	height: 500px;
	position: relative;
}
.box{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	
}

</style>