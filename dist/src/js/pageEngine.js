var pageEngine = {
    // 参数： 创建分页，背景颜色
    init: function (selector, colorsArray) {
        this.$W = $(selector);
        this.colorsArray = colorsArray || '';
        // 判断是在垂直页还是横向页调用addComponent方法的变量
        this.slideFlag = false;
        return this;
    },
    // 垂直页
    addSection: function (className) {
        this.slideFlag = false;
        this.$Page = $('<div class="section"></div>').addClass(className);
        this.$Page.appendTo(this.$W);
        return this;
    },
    // 横向页
    addSlide: function (className) {
        this.slideFlag = true;
        this.$Slide = $('<div class = "slide"/>').addClass(className);
        this.$Slide.appendTo(this.$Page);
        return this;
    },
    // 生成定制化结构
    addComponent: function (config) {
        // 定制化的内容不能满足需求会更改，因此进行区分一下，用何种方法进行创建定制化的结构
        // 根据type的属性，无限的扩展定制的结构
        // var oCp = ComponentFactory(config);
        var oCp;
        switch(config.type) {
            case "base" : 
                oCp = ComponentFactory(config);
                break;
            // case "super" :
            //     ComponentSuperFactory(config);
        }
        this.slideFlag ? this.$Slide.append(oCp) : this.$Page.append(oCp);
        return this;
    },
    // 给section绑定自定义事件
    bindEvent: function (){
        this.$W.find('.section').on({
            _leave : function () {
                $(this).find('.component').trigger('cpLeave');;
            },
            _load : function () {
                $(this).find('.component').trigger('cpLoad');;
            }
        });
    },
    // 动画执行
    load: function () {
        var self = this;
        this.bindEvent();
        this.$W.myFullPage({
            backgroundImageArray : ['../img/1.jpg', '../img/2.jpg', '../img/3.jpg', '../img/4.jpg'],        
            colorsArray: this.colorsArray,
            onLeave : function (index) {
                self.$W.find('.section').eq(index).trigger('_leave');
            },
            afterLoad: function (index) {
                self.$W.find('.section').eq(index).trigger('_load');
            }
        });
        // 主动触发，不然一开始没有
        this.$W.find('.section').eq(0).trigger('_load');
    }
}


