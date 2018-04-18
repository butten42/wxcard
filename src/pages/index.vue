<template>
<view class="page page__bd_spacing">
    <view>
        <view class="sex">
            <image src="{{male.src}}" wx:if="{{male.src}}"></image>
            <view class="blue"> 男方信息</view>
        </view>
        <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
                <view class="weui-label">姓名</view>
            </view>
            <view class="weui-cell__bd">
                <input class="weui-input" placeholder="请输入姓名" type="number" maxlength="11" value="{{male.name}}" bindinput="maleName"/>
            </view>
        </view>
        <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
                <view class="weui-label">生日</view>
            </view>
            <view class="weui-cell__bd">
                <picker mode="date" value="{{date}}" start="2015-09-01" end="2017-09-01" bindchange="maleDate">
                        <view class="weui-input">{{male.date}}</view>
                </picker>
            </view>
        </view>
        <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
                <view class="weui-label">出生地</view>
            </view>
            <view class="weui-cell__bd">
                <picker mode="region" bindchange="maleRegion" value="{{region}}" custom-item="{{customItem}}">
                    <view class="picker">
                    当前选择：{{region[0]}}，{{region[1]}}，{{region[2]}}
                    </view>
                </picker>
            </view>
        </view>
    </view>

    <view>
        <view class="sex">
            <image src="{{female.src}}" wx:if="{{ female.src }}"></image>
            <view class="pink">女方信息</view>
        </view>
        <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
                <view class="weui-label">姓名</view>
            </view>
            <view class="weui-cell__bd">
                <input class="weui-input" placeholder="请输入姓名" type="number" maxlength="11" value="{{female.name}}" bindinput="femaleName"/>
            </view>
        </view>
        <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
                <view class="weui-label">生日</view>
            </view>
            <view class="weui-cell__bd">
                <picker mode="date" value="{{date}}" start="2015-09-01" end="2017-09-01" bindchange="femaleDate">
                        <view class="weui-input">{{female.date}}</view>
                </picker>
            </view>
        </view>
        <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
                <view class="weui-label">出生地</view>
            </view>
            <view class="weui-cell__bd">
                <picker mode="region" bindchange="femaleRegion" value="{{region}}" custom-item="{{customItem}}">
                    <view class="picker">
                    当前选择：{{region[0]}}，{{region[1]}}，{{region[2]}}
                    </view>
                </picker>
            </view>
        </view>
    </view>

    <view class="page__bd">
        <button class="weui-btn" type="primary" @tap='pick'>求姻缘</button>
        <button class="weui-btn" type="warn" @tap='developer' wx:if="{{ show }}">我是开发者</button>
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
          code: 343100,
          show: false,
          male: {},
          female: {}
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
      maleName(e) {
          this.maile.name = e.detail.value
      }

      femaleName(e) {
          this.femaile.name = e.detail.value
      }

      maleDate (e) {
          this.maile.date = e.detail.value
      }

      femaleDate (e) {
          this.femaile.date = e.detail.value
      }

      maleRegion(e) {
          this.maile.region = e.detail.value
      }

      femaleRegion (e) {
          this.femaile.region = e.detail.value
      }

      developer() {
          this.isDev = true
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
.sex {
    text-align: center;
}
.blue {
    color: royalblue;
}
.pink {
    color: pink;
}
</style>
