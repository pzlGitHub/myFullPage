// 添加实例方法
$.fn.extend({
    // 写插件  考虑性能 和 兼容能力
    myFullPage: function (config) {
        // 技巧：频繁使用的值或函数都变成变量  提高性能
        // $(this); 频繁使用多次，就是函数执行多次，会创建多次执行上下文(作用域)，耗性能
        var colorsArray = config.colorsArray;
        var ImagesArray = config.backgroundImageArray;
        var $W = $(this);
        var $Section = $W.find('.section');
        //共同样式
        var commonStyle = {
            width: '100%',
            height: '100%'
        }
        // client可视区宽高
        var clientWidth = $(window).outerWidth();
        var clientHeight = $(window).outerHeight();
        // 记录当前显示的页面
        var curIndex = 0;
        var lrIndex = 0;
        // 快速点击会出现问题，需要一把锁去锁住切换的效果，如果还在切换则不管怎么样按都无效果
        var lock = true;

        // 初始化样式
        // 相同样式
        $('html')
            .add('body')
            .css({
                position: 'relative',
                overflow: 'hidden',
                margin: 0
            })
            .add($W)
            .add($Section)
            .css(commonStyle);
        // wrapper样式
        $W.css({
            position: 'absolute',
            left: 0,
            top: 0
        });
        // section样式  slide样式   让section下的一堆slide给一个div包裹住
        $Section.each(function (index, ele) {
            $(ele).css({
                backgroundImage: 'url(' + ImagesArray[index] + ')',
                position: 'relative'
            }).find('.slide')
                .css({
                    float: 'left',
                    width: clientWidth,
                    height: clientHeight,
                    position: 'relative'
                })
                .wrapAll('<div class="slideWrapper"></div>');
        });
        console.log(clientWidth);

        // slideWrapper样式  因为不能确定slideWrapper结构里面slide的数量，因此宽度样式需要动态设置
        $Section.find('.slideWrapper').each(function (index, ele) {
            $(ele).css({
                width: $(ele).find('.slide').length * clientWidth,
                height: clientHeight
            });
        });

        // js控制垂直和横向移动  
        // 先给第一个section  active 类名   标志着垂直的第一页
        // 给每一个section 下面的第一个slide  innerActive 类名   标志着横向的第一页
        // 类名初始化
        $Section.eq(0)
            .addClass('active')
            .end().find('.slideWrapper')
            .css({ position: 'absolute', left: 0, top: 0 })
            .each(function (index, ele) {
                $(ele).find('.slide').eq(0).addClass('innerActive');
            });
        // 控制移动
        $(document).on('keydown', function (e) {
            // e.which  记录键盘上的ASCII码  left 37 top 38 right 39 bottom 40
            // 垂直移动 $W
            if (e.which == 38 || e.which == 40) {
                // 执行上一页操作，当前页不能是第一页，否则无效
                // 执行下一页操作，当前页不能是最后一页，否则无效
                if (lock) {
                    lock = false;
                    // $W距离文档的top值
                    var newTop = $W.offset().top;
                    // 记录移动的方向
                    var direction = '';
                    // 判断按键上还是按键下触发
                    if (e.which == 38 && curIndex != 0) {
                        direction = 'top';
                        config.onLeave(curIndex, direction);
                        // curIndex 当前页面的索引
                        curIndex--;
                        // 获得改变页面垂直移动多少的值 按上则加，按下则减
                        newTop += clientHeight;
                    } else if (e.which == 40 && curIndex != $Section.length - 1) {
                        direction = 'bottom';
                        config.onLeave(curIndex, direction);
                        curIndex++;
                        newTop -= clientHeight;
                    }
                    // 垂直移动的动画 
                    $W.animate({
                        top: newTop
                    }, 350, 'swing', function () {
                        lock = true;
                        $Section.eq(curIndex).addClass('active');
                        // 干掉上一个页面的class类名为active
                        if (direction == 'top') {
                            $Section.eq(curIndex + 1).removeClass('active');
                        } else if (direction == 'bottom'){
                            $Section.eq(curIndex - 1).removeClass('active');
                        }
                        config.afterLoad(curIndex, direction);
                    });
                }
            }
            // 横向移动 $slideWrapper
            if (e.which == 37 || e.which == 39) {
                if (lock) {
                    lock = false;
                    var $SW = $('.active').find('.slideWrapper');
                    var curShowDom = $SW.find('.innerActive');
                    // 获得横向移动的值
                    var newLeft = 0;
                    $('.active').find('.slideWrapper').length != 0 ? newLeft = $SW.offset().left : lock = true;
                    // 存放数据，判断按下的是左按键还是右按键
                    var direction = null;
                    // 执行左移动操作，当前页不能是第一页，否则无效
                    // 执行右移动操作，当前页不能是最后一页，否则无效
                    // 判断左按键还是右按键 
                    if (e.which == 37 && curShowDom.index() != 0) {
                        newLeft += clientWidth;
                        direction = 'left';
                    } else if (e.which == 39 && curShowDom.index() != $SW.find('.slide').length - 1) {
                        newLeft -= clientWidth;
                        direction = 'right';
                    }
                    // 水平移动
                    $SW.animate({
                        left: newLeft
                    }, 200, 'swing', function () {
                        lock = true;
                        // 左右按键没有动的时候，不能清除该class类名为innerActive
                        direction != null ? curShowDom.removeClass('innerActive') : '';
                        if (direction == 'left') {
                            curShowDom.prev().addClass('innerActive');
                        } else if (direction == 'right') {
                            curShowDom.next().addClass('innerActive');
                        }
                    });
                }
            }

        });



    }
});
