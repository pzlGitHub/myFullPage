// 根据config生成定制的结构
function ComponentFactory(config){
    var $Div = $('<div class="component"></div>');
    config.className && $Div.addClass(config.className);
    config.width && $Div.css('width', config.width);
    config.height && $Div.css('height', config.height);
    config.text && $Div.text(config.text);
    config.center && $Div.css({position:'absolute', left: '50%', marginLeft: -config.width / 2});
    config.css && $Div.css(config.css);
    // 事件绑定
    if(config.event) {
        for(var prop in config.event) {
            $(this).on(prop, config.event[prop])
        }
    }
    // 自定义事件 
    $Div.on('cpLeave', function() {
        var self = this;
        setTimeout(function () {
            config.animateOut && $(self).animate( config.animateOut );
        }, config.delay || 0);
    })
    $Div.on('cpLoad', function() {
        var self = this;
        setTimeout(function () {
            config.animateIn && $(self).animate( config.animateIn );
        }, config.delay || 0);
    })
    return $Div;
}