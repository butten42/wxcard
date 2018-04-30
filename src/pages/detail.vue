<template>
<view class="page">
    <view class="header">
        <view>{{relation}}</view>
    </view>

    <view class="poem">
    <view>
        谢公最小偏怜女，自嫁黔娄百事乖。
        顾我无衣搜荩箧，泥他沽酒拔金钗。
        野蔬充膳甘长藿，落叶添薪仰古槐。
        今日俸钱过十万，与君营奠复营斋。
    </view>
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

    let relation= ['有缘无分','情深缘浅','无疾而终']
    export default class About extends wepy.page {
        config = {
            navigationBarTitleText: '解连环'
        }
        data = {
           
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
        computed= {
            relation(){
                let n= Math.floor(Math.random()*relation.length)
                return relation[n]
            }
        }
    }
</script>
