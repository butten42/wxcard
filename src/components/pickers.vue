<template>
    <view>
        <view class="dialog_mask" @tap="hidePicker"></view>
        <view class="dialog_container">
            <view class="dialog_header">
                <view class="dialog_button" @tap="hidePicker">取消</view>
                <view class="dialog_title">{{ propsData.title }}{{ index }}{{ propsData.type }}{{ propsData.index }}</view>
                <view class="dialog_button" @tap="sure">确定</view>
            </view>
            <picker-view indicator-style="height: 50px;" style="width: 100%; height: 280rpx;" value="{{propsData.index}}" bindchange="bindChange">
                <picker-view-column wx:for="{{propsData.pickerArr}}" wx:for-item="item">
                    <view wx:for="{{item.value}}" wx:for-item="val" style="line-height: 50px;text-align:center;">{{val}} {{item.key ? item.key : ''}}</view>
                </picker-view-column>
            </picker-view>
        </view>
    </view>
</template>
<script>
    import wepy from 'wepy'

    export default class pickers extends wepy.component {
        data = {
            index: []
        }
        props = {
            propsData: Object
//            pickerArr: Array,
//            defaultIndex: Array,
//            defaultType: String,
//            pickerTitle: String
        }
        methods = {
            bindChange: function(e) {
                /* //直接选中即赋值
                const val = e.detail.value
                const type = this.defaultType
                this.$emit('childFn', val, type) */
                console.log(e)
                this.index = e.detail.value
            },
            sure() {
                /* 默认时自动获取传入的初始值 */
                console.log(this.propsData)
                if (!this.index.length) {
                    this.index = this.propsData.index
                }
                this.$emit('childFn', this.index, this.propsData.type)
                this.$emit('hidePicker')
                this.index = []
                console.log(this.index)
            },
            hidePicker() {
                this.$emit('hidePicker')
                this.index = []
                console.log(this.index)
            }
        }

        onLoad () {
        }
    }
</script>
<style lang="scss">
    // @import '../styles/vars.scss';
    .dialog_mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        background: rgba(0, 0, 0, 0.7);
        display: none;
    }
    // .dialog_container {
    //     position: fixed;
    //     left: 0;
    //     bottom: 0;
    //     width: 750rpx;
    //     background: white;
    //     transform: translateY(150%);
    //     transition: all 0.4s ease;
    //     z-index: 11;
    //     font-size: 32rpx;
    //     .dialog_header{
    //         width: 100%;
    //         background: #EDEDED;
    //         display: flex;
    //         justify-content:space-between;
    //         align-items: center;
    //         .dialog_title{
    //             color: $text-default
    //         }
    //         .dialog_button{
    //             display: inline-block;
    //             text-align: center;
    //             font-size: 32rpx;
    //             color: $main-color;
    //             padding: 30rpx;
    //         }
    //     }
    // }
    // .dialog_show .dialog_container {
    //     transform: translateY(0);
    // }
    // .dialog_show .dialog_mask {
    //     display: block;
    // }
</style>
