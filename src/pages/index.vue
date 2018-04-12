<template>
<view class="page">
    <view class="page__hd">
        <imaage src="../images/icon_tabbar.png" >
    </view>
    <view class="page__bd page__bd_spacing">
        <button class="weui-btn" type="primary" @tap='drawcard'>求姻缘</button>
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
          navigationBarTitleText: '八字合婚'
      }

      data = {
  
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

      }
}
</script>
<style lang="scss">

</style>
