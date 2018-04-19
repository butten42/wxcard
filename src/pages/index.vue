<template>
<view class="page page__bd_spacing">
    <view class="block">
        <view class="sex">
            <image src="{{male.src}}" wx:if="{{male.src}}"></image>
            <view class="blue"> 男方信息</view>
        </view>
        <view class="weui-flex">
            <view class="weui-cell__hd">
                <view class="weui-label">姓名</view>
            </view>
            <view class="weui-cell__bd">
                <input class="weui-input" placeholder="请输入姓名" type="number" maxlength="11" value="{{male.name}}" bindinput="maleName"/>
            </view>
        </view>
        <view class="weui-flex">
            <view class="weui-cell__hd">
                <view class="weui-label">生日</view>
            </view>
            <view class="weui-cell__bd">
                <picker mode="date" value="{{date}}" start="2015-09-01" end="2017-09-01" bindchange="maleDate">
                        <view class="weui-input">{{male.date}}</view>
                </picker>
            </view>
        </view>
        <view class="weui-flex">
            <view class="weui-cell__hd">
                <view class="weui-label">出生地</view>
            </view>
            <view class="weui-cell__bd">
                <picker mode="region" bindchange="maleRegion" value="{{male.region}}" custom-item="{{customItem}}">
                    <view class="picker">
                    {{region[0]}} {{region[1]}} {{region[2]}}
                    </view>
                </picker>
            </view>
        </view>
    </view>

    <view class="block">
        <view class="sex">
            <image src="{{female.src}}" wx:if="{{ female.src }}"></image>
            <view class="pink">女方信息</view>
        </view>
        <view class="weui-flex">
            <view class="weui-cell__hd">
                <view class="weui-label">姓名</view>
            </view>
            <view class="weui-cell__bd">
                <input class="weui-input" placeholder="请输入姓名" type="number" maxlength="11" value="{{female.name}}" bindinput="femaleName"/>
            </view>
        </view>
        <view class="weui-flex">
            <view class="weui-cell__hd">
                <view class="weui-label">生日</view>
            </view>
            <view class="weui-cell__bd">
                <picker mode="date" value="{{date}}" start="2015-09-01" end="2017-09-01" bindchange="femaleDate">
                        <view class="weui-input">{{female.date}}</view>
                </picker>
            </view>
        </view>
        <view class="weui-flex">
            <view class="weui-cell__hd">
                <view class="weui-label">出生地</view>
            </view>
            <view class="weui-cell__bd">
                <picker mode="region" bindchange="femaleRegion" value="{{region}}" custom-item="{{customItem}}">
                    <view class="picker">
                    {{female.region[0]}} {{female.region[1]}} {{female.region[2]}}
                    </view>
                </picker>
            </view>
        </view>
    </view>

    <view class="page__bd">
        <button class="btn" type="primary" @tap='pick' disabled="{{!cando}}">求姻缘</button>
        <button class="btn" @tap='developer' wx:if="{{ show }}" :class=" {'orange' : isDev }">我是开发者</button>
    </view>
    <view class="weui-footer weui-footer_fixed-bottom">
        <view class="weui-footer__links">
            <navigator class="weui-footer__link">关于</navigator>
        </view>
        <view class="weui-footer__text">Copyright © 2016-2018 butten42.github.io</view>
    </view>
</view>
</template>

<script>
  import wepy from 'wepy'

  export default class Index extends wepy.page {
      config = {
          navigationBarTitleText: '八字合婚',
          enablePullDownRefresh: true
      }

      data = {
          isDev: false,
          color: '',
          cando: false,
          show: false,
          code: 343100,
          region: ['广东省', '广州市', '海珠区'],
          male: {},
          female: {
              region: ['广东省', '广州市', '海珠区']
          }
      }

      cardlib() {
          wx.navigateTo({
              url: 'cardlib'
          })
      }

      pick() {
          wx.navigateTo({
              url: 'detail'
          })
      }

      bindRegionChange (e) {
          console.log('picker发送选择改变，携带值为', e.detail.value)
          this.setData({
              region: e.detail.value
          })
      }
      maleName(e) {
          this.male.name = e.detail.value
      }

      femaleName(e) {
          this.female.name = e.detail.value
      }

      maleDate (e) {
          this.male.date = e.detail.value
      }

      femaleDate (e) {
          this.female.date = e.detail.value
      }

      maleRegion(e) {
          this.male.region = e.detail.value
          console.log('picker发送选择改变，携带值为' + this.male.region)
      }

      femaleRegion (e) {
          this.female.region = e.detail.value
          console.log((this.female.region)[0])
      }

      developer() {
          this.isDev = true
          this.setData({
              color: 'orange'
          })
          console.log(this.isDev)
          console.log(this.color)
      }

      password(e) { // 获取钱包密码
          this.setData({
              wallets_password: e.detail.value
          })
          if (this.data.wallets_password.length == 6) { // 密码长度6位时，自动验证钱包支付结果
            //   wallet_pay(this)
          }
      }

      onLoad() {

      }

      onPullDownRefresh() {
          this.show = true
          console.log('startPull')
          wx.stopPullDownRefresh()
      }
}
</script>
<style lang="scss">
button {
    margin-top: .5rem; 
}
.btn {
    height: 2.5rem;
    line-height: 2.5rem;
    width: 85%;
    text-align: center;
}
.sex {
    text-align: center;
    font-size: .8rem;
}
.orange {
    background: #0366d6;
    color: paleturquoise;
}
.blue {
    color: #0366d6;
}
.pink {
    color: pink;
}
.block {
    margin-top: .8rem;
    background-color: white;
}
.weui-flex {
    text-align: center;
}
</style>
