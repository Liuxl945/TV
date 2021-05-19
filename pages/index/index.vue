<template>
	<view class="content">
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			console.log(window)
		},
		methods: {
			playVideo() {
				this.videoContext = uni.createVideoContext("video", this)
				// this.videoContext.requestFullScreen()
				this.videoContext.play()
			}
		}
	}
</script>

<style lang="scss">
	.controls-title{
		position: fixed;
		z-index: 100;
		left: 0;
		top: 0;
		width: 300rpx;
		background: rgba(111,255,111,0.8);
		
		color: #FFFFFF;
		
		// background: red;
		width: 15%;
		height: 100%;
		
		.left-nav{
			width: 100%;
			
			.list{
				color: #FFFFFF;
				width: 100%;
				height: 20rpx;
				margin-bottom: 10rpx;
			}
		}
	}
</style>
