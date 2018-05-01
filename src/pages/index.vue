<template>
    <view wx:if='{{show}}' class="dev">已进入开发模式</view>
   <view class="page page__bd_spacing">
      <view class="sex">
          <view class="image line blue" @tap='choose' data-type='male'>
            <view wx:if="{{!male}}">这里放你的头像</view>
            <image src="{{male}}" wx:if="{{male}}"></image>
          </view>
      </view>
      <view class="sex">
          <view class="image line red" @tap='choose' data-type='female'>
            <view wx:if="{{!female}}">这里放ta的头像</view>
            <image src="{{female}}" wx:if="{{female}}"></image>
          </view>
      </view>

      <view class="weui-footer weui-footer_fixed-bottom">
         <view class="weui-footer__links">
            <view class="weui-footer__link" @tap="develop">我是开发者</view>
         </view>
         <view class="weui-footer__text">Copyright ©butten42 2016-2018 </view>
      </view>
   </view>
</template>
<script>
   import wepy from 'wepy'

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

        develop() {
            if(this.show){
                this.male='../images/me.jpg'
                wepy.setStorageSync('male', '../images/me.jpg')
                let n= Math.floor(Math.random()*4+1)
                let gf = `../images/gf${n}.jpg`
                this.female = gf
                wepy.setStorageSync('female', gf)
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
            wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                var tempFilePaths = res.tempFilePaths
                self[mode.currentTarget.dataset.type]=tempFilePaths[0]
                wepy.setStorageSync(mode.currentTarget.dataset.type, tempFilePaths[0])
                self.$apply()
            }
            })
        }
        computed={
            next(){
                if(this.male && this.female){
                    wx.showToast({
                    title: 'Do not go gentle into that good night',
                    icon: 'none',
                    duration: 2000
                    })
                    
                    setTimeout(() => {
                        this.go()
                    }, 3000);
                }
            }
        }

        onLoad(){
            console.log(1)
            wx.showModal({
            content: '这是一个模拟缘分测试的程序。需要你和ta的各一张图片，然后程序会得出你们的缘分评级',
                showCancel: false,
                success: function (res) {
                    if (res.confirm) {
                        console.log('用户点击确定')
                    }
                }
            });
        }
   
        onPullDownRefresh() {
           this.show = !this.show
           console.log(this.show)
           wx.stopPullDownRefresh()
        }
   }
</script>
<style lang="scss">
.dev{
    color: white;
    background: lightgreen;
    text-align: center;
}
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