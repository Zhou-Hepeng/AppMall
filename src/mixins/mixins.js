let modal = weex.requireModule('modal')
let stream = weex.requireModule('stream')
export default {
    methods: {
        alert(text) {
            modal.alert({
                message: text
            })
        },
        //请求地址
        ajaxUrl(){
            let url = 'https://product.360che.com'
            let devUrl = 'https://product.360che.com'
            return url
        },
        getData(url, callback){
            return stream.fetch({
              method: 'GET',
              type: 'json',
              url: this.ajaxUrl() + url
            }, callback)
        }
    },
    created() {
        // //iconFont字体
        // dom.addRule('fontFace', {
        //     'fontFamily': 'detail',
        //     'src': "url(\'https://at.alicdn.com/t/font_9uxuxvowyib5ipb9.woff\')"
        // });
    },
}