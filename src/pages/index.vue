<template>
<view class="page">
    <view class="page__hd">
        <view class="page__title">你好啊，{{user}}</view>
        <view class="page__desc">欢迎来到xx传说</view>
    </view>
    <view class="page__bd page__bd_spacing">
        <button class="weui-btn" type="primary" @tap='drawcard'>抽卡</button>
        <button class="weui-btn" type="default" @tap='cardlib'>我的卡包</button>
        <!-- <view class="button-sp-area">
            <button class="weui-btn" type="primary" plain="true">按钮</button>
            <button class="weui-btn" type="default" plain="true">按钮</button>
            <button class="weui-btn" type="default" disabled="true" plain="true">按钮</button>
            <button class="weui-btn mini-btn" type="primary" size="mini">按钮</button>
            <button class="weui-btn mini-btn" type="default" size="mini">按钮</button>
            <button class="weui-btn mini-btn" type="warn" size="mini">按钮</button>
        </view> -->
    </view>
    <view class="weui-footer weui-footer_fixed-bottom">
        <view class="weui-footer__links">
            <navigator url="about" class="weui-footer__link">关于</navigator>
        </view>
        <view class="weui-footer__text">Copyright © 2016-2018 butten42.github.io</view>
    </view>
</view>
</template>

<script>
  import wepy from 'wepy'
  import cards from '../cards'

  export default class Index extends wepy.page {
      config = {
          navigationBarTitleText: '无限抽卡'
      }

      data = {
          userInfo: {
              nickName: '加载中...'
          }
      }

      cardlib() {
          wx.navigateTo({
              url: 'cardlib'
          })
      }

      drawcard() {
          wx.navigateTo({
              url: 'drawcard'
          })
      }

      onLoad() {
          console.log(cards)
      }
}
</script>
