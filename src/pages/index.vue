<template>
   <view class="page page__bd_spacing">
      <view class="sex">
          <view class="image line blue" @tap='choose()' data-type='male'>
            <view wx:if="{{!male}}">点击放置头像</view>
            <image src="{{male}}" wx:if="{{male}}"></image>
          </view>
      </view>
      <view class="sex">
          <view class="image line red" @tap='choose(female)'>
            <view wx:if="{{!female}}">点击放置头像</view>
            <image src="{{female}}" wx:if="{{female}}"></image>
          </view>
      </view>

      <view class="weui-footer weui-footer_fixed-bottom">
         <view class="weui-footer__links">
            <view class="weui-footer__link" @tap="develop">我是开发者</view>
         </view>
         <view class="weui-footer__text">Copyright © 2016-2018 butten42.github.io</view>
      </view>
   </view>
</template>
<script>
   import wepy from 'wepy'
   let n =0

   export default class Index extends wepy.page {
        config = {
           navigationBarTitleText: '解连环',
           enablePullDownRefresh: true
        }
   
        data = {
            male:'',
            female:'',
            show: false
        }

        move(e){
            console.log(e.touches[0].clientX-60)
            this.left=e.touches[0].clientX-60
            this.top=e.touches[0].clientY-60
        }
        develop() {
            this.male='../images/me.jpg'
            this.female = '../images/gf1.jpg'
            if(this.show){
                 n++
                if(n==3){
                    console.log(n)
                }
            }
        }
        go() {
            this.male=''
            this.female = ''
            wx.navigateTo({
                url: 'detail'
            })
        }

        choose(mode){
            let self= this
            let mod=mode.currentTarget.dataset.type
            wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths
                console.log(mod)
                self.setData({  
                    mod: tempFilePaths[0],  
                }) 
            }
            })
        }
        computed={
            next(){
                if(this.male && this.female){
                    wx.showToast({
                    title: '分析中...',
                    icon: 'none',
                    duration: 2000
                    })
                    
                    setTimeout(() => {
                        this.go()
                    }, 2000);
                }
            }
        }
        watch={
            male(val){
                console.log(val)
            }
        }
   
        onPullDownRefresh() {
           this.show = !this.show
           console.log('startPull')
           wx.stopPullDownRefresh()
        }
   }
</script>
<style lang="scss">
    .line{
        line-height: 12rem;
        text-align: center;
        margin: 0 auto;
    }

   button {
   margin-top: .5rem; 
   }
   .btn {
   height: 2.5rem;
   line-height: 2.5rem;
   text-align: center;
   }
   .sex {
       padding-top:50rpx;
   text-align: center;
   background-color: #F8F8F8;
   }
   image,.image{
    width:12rem;
    border-radius:50%;
    height:12rem;
   }
   .orange {
   background: #0366d6;
   color: paleturquoise;
   }
   .red {
        border:1px solid red;
   }
   .blue {
        border:1px solid blue;
   }
   .block {
   margin-top: .8rem;
   background-color: white;
   }
   .weui-flex {
   text-align: center;
   }
</style>