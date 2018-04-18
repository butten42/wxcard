<style lang="scss">
    @import './weui.scss';
</style>

<script>
    import wepy from 'wepy'
    import 'wepy-async-function'

    export default class extends wepy.app {
        config = {
            pages: [
                'pages/index',
                'pages/detail'
            ],
            window: {
                backgroundTextStyle: 'light',
                navigationBarBackgroundColor: '#fff',
                navigationBarTitleText: 'WeChat',
                navigationBarTextStyle: 'black'
            }
        }

        // globalData = {
        //     lib: []
        // }

        constructor() {
            super()
            this.use('requestfix')
        }
}
</script>
