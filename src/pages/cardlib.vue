<template>
  <view class="page">
    <view class="page__hd">
        <view class="page__title">我的牌库</view>
        <view class="page__desc"></view>
    </view>
    <view class="page__bd">
        <view class="weui-grids">
            <block wx:for="{{grids}}" wx:key="*this">
                <navigator url="" class="weui-grid" hover-class="weui-grid_active">
                    <image class="weui-grid__icon" src="../images/icon_tabbar.png" />
                    <view class="weui-grid__label">Grid</view>
                </navigator>
            </block>
        </view>
    </view>
</view>
</template>

<script>
    import wepy from 'wepy'

    export default class Cardlib extends wepy.page {
        config = {
            navigationBarTitleText: '无限抽卡'
        }
        data = {
            grids: ['德鲁伊', '猎人', '牧师', '法师', '圣骑士', '潜行者', '萨满', '术士', '战士']
        }
    }
</script>
