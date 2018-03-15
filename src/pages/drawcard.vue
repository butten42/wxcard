<template>
<view class="page">
    <view class="page__hd">
        <view class="page__desc">剩余卡包：{{ kabaos }}</view>
    </view>
    <view class="page__bd">
        {{card}}
    </view>
    <view class="page__bd page__bd_spacing">
        <button @tap='draw' disabled="{{disable}}" type="primary">抽卡</button>
        <slider show-value value="0"  bindchange="slider4change" min="0" max="200" />
        <button @tap='buy'>氪金</button>
    </view>
</view>
</template>

<script>
    import wepy from 'wepy'
    import cards from '../cards'

    export default class Drawcard extends wepy.page {
        config = {
            navigationBarTitleText: '无限抽卡'
        }
        data = {
            kabaos: 1,
            gold: 0,
            disable: false,
            card: {}
        }

        buy() {
            this.kabaos += this.gold
        }
        draw() {
            if (this.kabaos > 0) {
                let random = cards[Math.floor(Math.random() * cards.length)]
                this.kabaos -= 1
                this.card = random
                console.log(this.card)
            }
        }

        slider4change(e) {
            this.gold = e.detail.value
            console.log('slider' + 'index' + '发生 change 事件，携带值为', e.detail.value)
        }

        computed = {
            disable() {
                if (this.kabaos > 0) {
                    return false
                } return true
            }
        }
    }
</script>
