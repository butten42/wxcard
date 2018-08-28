<template>
<view class="page">
    <view wx:if='{{payed}}'>
        <view class="top">
            <image src="../images/wahaha.png"></image>
            <image src="../images/wahaha.png"></image>
        </view>
        <view class="toast">百年好合</view>
    </view>
    <view wx:else>
        <view class="header">
            <image src="{{male}}"></image>
            <image src="{{female}}"></image>
            <view>{{relation}}</view>
        </view>
        
        <view class="poem">
            <view class="title">诗曰：</view>
            <view wx:for='{{text}}'>{{item}}</view>
        </view>
    </view>
</view>
</template>

<script>
    import wepy from 'wepy'
    const innerAudioContext = wx.createInnerAudioContext()

    let relation= ['有缘无分','情深缘浅','无疾而终']
    let text = [
        ['谢公最小偏怜女，自嫁黔娄百事乖。','顾我无衣搜荩箧，泥他沽酒拔金钗。','野蔬充膳甘长藿，落叶添薪仰古槐。','今日俸钱过十万，与君营奠复营斋。'],
        ['昔日戏言身后意，今朝都到眼前来。','衣裳已施行看尽，针线犹存未忍开。','尚想旧情怜婢仆，也曾因梦送钱财。','诚知此恨人人有，贫贱夫妻百事哀。'],
        ['闲坐悲君亦自悲，百年都是几多时。','邓攸无子寻知命，潘岳悼亡犹费词。','同穴窅冥何所望，他生缘会更难期。','惟将终夜长开眼，报答平生未展眉。']
    ]
    export default class About extends wepy.page {
        config = {
            navigationBarTitleText: '解连环'
        }
        data = {
            // male:wepy.getStorageSync('male'),
            // female:wepy.getStorageSync('female')
        }

        computed= {
            relation(){
                let n= Math.floor(Math.random()*relation.length)
                return relation[n]
            },
            text(){
                let n= Math.floor(Math.random()*text.length)
                return text[n]
            }
        }

        onLoad() {
            this.setData({
                male:wepy.getStorageSync('male'),
                female:wepy.getStorageSync('female'),
                payed: wepy.getStorageSync('payed')
            })
            innerAudioContext.src = wepy.getStorageSync('payed') ? 'http://www.170mv.com/kw/other.web.nf01.sycdn.kuwo.cn/resource/n3/98/9/1838900507.mp3' : 'http://other.web.rd01.sycdn.kuwo.cn/resource/n1/34/41/3763016369.mp3'
            innerAudioContext.play()
        }

        onUnload(){
            innerAudioContext.stop()
        }

    }
</script>
<style lang="scss" scoped>
.top {
    margin-top: 5rem;
    text-align: center;
    image {
        width: 4.4rem;
        height: 4.4rem;
    }
}
.toast {
    font-size: 4.5rem;
    font-weight: bold;
    text-align: center;
    color: crimson;
}
.header{
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    background: white;
    view{
        padding: .5rem 0;
    }
}
    image{
    width:3.5rem;
    border-radius:50%;
    height:3.5rem;
   }
.poem {
    text-align: center;
    .title {
        padding: 1rem 0;
    }
}
</style>
