<style lang="less">
.weui-search-bar{position:relative;padding:8px 10px;display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;background-color:#efeff4;border-top:1rpx solid #d7d6dc;border-bottom:1rpx solid #d7d6dc}.weui-icon-search{margin-right:8px;font-size:inherit}.weui-icon-search_in-box{position:absolute;left:10px;top:7px}.weui-search-bar__text{display:inline-block;font-size:14px;vertical-align:middle}.weui-search-bar__form{position:relative;-webkit-box-flex:1;-webkit-flex:auto;flex:auto;border-radius:5px;background:#fff;border:1rpx solid #e6e6ea}.weui-search-bar__box{position:relative;padding-left:30px;padding-right:30px;width:100%;box-sizing:border-box;z-index:1}.weui-search-bar__input{height:28px;line-height:28px;font-size:14px}.weui-icon-clear{position:absolute;top:0;right:0;padding:7px 8px;font-size:0}.weui-search-bar__label{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;border-radius:3px;text-align:center;color:#9b9b9b;background:#fff;line-height:28px}.weui-search-bar__cancel-btn{margin-left:10px;line-height:28px;color:#09bb07;white-space:nowrap}
.searchbar-result{
    margin-top: 0;
    font-size: 14px;
}
.searchbar-result:before{
    display: none;
}
.weui-cell{
    padding: 12px 15px 12px 35px;
}
.hl {
  background: yellow;
}
</style>
<template>
  
<view class="userinfo" @tap="handleViewTap">
<image class="userinfo-avatar" src="{{ userInfo.avatarUrl }}" background-size="cover"/>
<view class="userinfo-nickname">{{ userInfo.nickName }}</view>
</view>


</template>

<script>
  import wepy from 'wepy'
  // import List from '../components/list'

  const endpoint = 'https://api.douban.com/v2/book/search?q='
  const search = 'http://www.smallge.com/api.php?action=top10news'

  export default class Index extends wepy.page {
    config = {
      navigationBarTitleText: 'test'
    }

    data = {
      userInfo: {
        nickName: '加载中...'
      },
      inputShowed: false,
      inputVal: "",
      box: [],
      matches: []
    }

    computed = {
      now () {
        return +new Date()
      }
    }

    methods = {
    tap () {
      console.log('taped')
    },
     showInput: function () {
        this.inputShowed=true
    },
    hideInput: function () {
        this.inputVal="",
        this.inputShowed= false
    },
    clearInput: function () {
        this.inputVal= ''
    },
    inputTyping: function (e) {
        let self = this
        this.inputVal= e.detail.value
        this.matches=this.findMatches(this.inputVal,this.box)
    },
    }

    findMatches(wordToMatch, box) {
      return box.filter(poet => {
      const regex = new RegExp(wordToMatch, 'gi');
      const title = poet.title;
//      console.log(author);
      return poet.title.match(regex)
    });
  }

    onLoad() {
      let self = this
      this.$parent.getUserInfo(function (userInfo) {
        if (userInfo) {
          self.userInfo = userInfo
        }
        self.$apply()
      })

    //   wepy.request({
    //     url: search, //仅为示例，并非真实的接口地址
  
    //     fail: function(res) {
    //       console.log('error!')
    //       self.$apply()
    //     },
    //     success: function(res) {
    //       self.box=[]
    //       self.box.push(...res.data)
    //       self.$apply()
    //     },
    //   })
    // }
  }
</script>
