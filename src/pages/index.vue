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
            <!-- <picker bindchange="bindPickerChange" value="{{index}}" range="{{array}}">
                <view class="picker">
                {{array[index] || '普通选择器'}}
                </view>
            </picker> -->
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

    <view wx:if="{{right}}" class="wallets-password">
        <view class="input-content-wrap">
            <view class="top">
                <view catchtap="close_wallets_password" class="close">×</view>
                <view class="txt">你说是就是啊</view>
            </view>
            <view class="actual_fee">
                <text>{{text}}</text>
            </view>
            <view catchtap="set_Focus" class="input-password-wrap">
                <view class="password_dot">
                    <i wx:if="{{password.length>=1}}"></i>
                </view>
                <view class="password_dot">
                    <i wx:if="{{password.length>=2}}"></i>
                </view>
                <view class="password_dot">
                    <i wx:if="{{password.length>=3}}"></i>
                </view>
                <view class="password_dot">
                    <i wx:if="{{password.length>=4}}"></i>
                </view>
                <view class="password_dot">
                    <i wx:if="{{password.length>=5}}"></i>
                </view>
                <view class="password_dot">
                    <i wx:if="{{password.length>=6}}"></i>
                </view>
            </view>
        </view>
    </view>
    <input bindinput="set_wallets_password" class="input-content" password type="number" focus="{{isFocus}}" maxlength="6" />

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
  const innerAudioContext = wx.createInnerAudioContext()
  innerAudioContext.src = 'http://other.web.rd01.sycdn.kuwo.cn/resource/n1/34/41/3763016369.mp3'
  innerAudioContext.onPlay(() => {
      console.log('开始播放')
  })
  innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
  })
  export default class Index extends wepy.page {
      config = {
          navigationBarTitleText: '八字合婚',
          enablePullDownRefresh: true
      }

      data = {
           // array: ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'],
        // index: null
          isDev: false,
          color: '',
          cando: false,
          show: false,
          right: true,
          isFocus: false,
          text: '框架为开发者提供了一系列基础组件，开发者可以通过组合这些基础组件进行快速开发。',
          password: '',
          code: 'butten',
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

      close_wallets_password () { // 关闭钱包输入密码遮罩
          this.isFocus = false// 失去焦点
          this.right = false
      }
      set_Focus() {
          this.isFocus = true
      }
      set_wallets_password(e) { // 获取钱包密码
          this.password = e.detail.value
          console.log(e.detail.value)
          if (this.password.length == 6) { // 密码长度6位时，自动验证钱包支付结果
              if (this.password == this.code) {
                  console.log('yeah!!!')
              }
          }
      }
      bindPickerChange(e) {
          console.log('picker发送选择改变，携带值为', e.detail.value)
          this.index = e.detail.value
      }

      audioPlay() {
          console.log('?')
          if (!innerAudioContext.paused) {
              console.log('pause')
              innerAudioContext.pause()
          } else {
              console.log('play')
              innerAudioContext.play()
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
page .wallets-password {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
page .wallets-password .input-content-wrap {
  position: absolute;
  top: 200rpx;
  left: 50%;
  display: flex;
  flex-direction: column;
  width: 600rpx;
  margin-left: -300rpx;
  background: #fff;
  border-radius: 20rpx;
}

page .wallets-password .input-content-wrap .top {
  display: flex;
  align-items: center;
  height: 90rpx;
  border-bottom: 2rpx solid #ddd;
  justify-content: space-around;
  text-align: center;
}

page .wallets-password .input-content-wrap .top .close {
  font-size: 44rpx;
  color: #999;
  font-weight: 100;
  width: 66rpx;
}

page .wallets-password .input-content-wrap .top .txt {
  flex: 1;
}

page .wallets-password .input-content-wrap .actual_fee {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  margin: 0 23rpx;
}

page .wallets-password .input-content-wrap .actual_fee text {
  font-size: 36rpx;
}

page .wallets-password .input-content-wrap .input-password-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150rpx;
}

page .wallets-password .input-content-wrap .input-password-wrap .password_dot {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #000;
  box-sizing: border-box;
  width: 90rpx;
  height: 90rpx;
  border: 2rpx solid #ddd;
  border-left: none 0;
}

page .wallets-password .input-content-wrap .input-password-wrap .password_dot:nth-child(1) {
  border-left: 2rpx solid #ddd;
}

page .wallets-password .input-content-wrap .input-password-wrap .password_dot i {
  background: #000;
  border-radius: 50%;
  width: 20rpx;
  height: 20rpx;
}

page .wallets-password .input-content {
  position: absolute;
  opacity: 0;
  left: -100%;
  top: 600rpx;
  background: #f56;
  z-index: -999;
}

page .wallets-password .input-content.active {
  z-index: -99;
}
</style>
