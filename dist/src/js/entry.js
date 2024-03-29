pageEngine.init('.box')
                .addSection('oneSection')
                    .addComponent(
                        {
                            type: 'base',
                            width: 30,
                            height: 170,
                            text: '没有谁能击垮你',
                            center: true,  // 是否居中
                            css: {
                                position: 'absolute',
                                opacity: 0,
                                top: 0,
                                // border: '1px solid #000',
                                fontSize: '30px',
                                fontWeight: '900',
                                padding: '2px'
                            },
                            animateIn: {
                                opacity: 1,
                                top: 80
                            },
                            animateOut: {
                                opacity: 0,
                                top: 0
                            },
                            delay: 100,
                            // event: {click: function () {  } }
                        }
                    )
                    .addComponent(
                        {
                            type: 'base',
                            width: 30,
                            height: 360,
                            text: '除非你自甘堕落',
                            center: true,  // 是否居中
                            css: {
                                position: 'absolute',
                                opacity: 0,
                                top: 0,
                                // border: '1px solid #000',
                                fontSize: '30px',
                                fontWeight: '900',
                                padding: '2px',
                                marginLeft: '42px'
                            },
                            animateIn: {
                                opacity: 1,
                                top: 190
                            },
                            animateOut: {
                                opacity: 0,
                                top: 0
                            },
                            delay: 100,
                        }
                    )
                    .addSection('twoSection')
                    .addComponent(
                        {
                            type: 'base',
                            width: 30,
                            height: 170,
                            text: '余生很贵',
                            center: true,  // 是否居中
                            css: {
                                position: 'absolute',
                                opacity: 0,
                                bottom: 0,
                                // border: '1px solid #000',
                                fontSize: '30px',
                                fontWeight: '900',
                                padding: '2px'
                            },
                            animateIn: {
                                opacity: 1,
                                bottom: 390
                            },
                            animateOut: {
                                opacity: 0,
                                bottom: 0
                            },
                            delay: 100,
                            // event: {click: function () { alert($(this).text()) } }
                        }
                    )
                    .addComponent(
                        {
                            type: 'base',
                            width: 30,
                            height: 360,
                            text: '努力活成自己想要的样子',
                            center: true,  // 是否居中
                            css: {
                                position: 'absolute',
                                opacity: 0,
                                bottom: 0,
                                // border: '1px solid #000',
                                fontSize: '30px',
                                fontWeight: '900',
                                padding: '2px',
                                marginLeft: '42px'
                            },
                            animateIn: {
                                opacity: 1,
                                bottom: 100
                            },
                            animateOut: {
                                opacity: 0,
                                bottom: 0
                            },
                            delay: 100,
                        }
                    )
                        .addSection('threeSection')
                            .addSlide('3-slide-1')
                                .addComponent(
                                    {
                                        type: 'base',
                                        width: 30,
                                        height: 170,
                                        text: '一无所有就是我坚强',
                                        center: true,  // 是否居中
                                        css: {
                                            position: 'absolute',
                                            opacity: 0,
                                            left: 0,
                                            top: '150px',
                                            // border: '1px solid #000',
                                            fontSize: '18px',
                                            fontWeight: '900',
                                            padding: '2px'
                                        },
                                        animateIn: {
                                            opacity: 1,
                                            top: 150,
                                            left: '50%'
                                        },
                                        animateOut: {
                                            opacity: 0,
                                            top: '150px',
                                            left: 0
                                        },
                                        delay: 100,
                                        // event: {click: function () { alert($(this).text()) } }
                                    }
                                )
                                .addComponent(
                                    {
                                        type: 'base',
                                        width: 30,
                                        height: 360,
                                        text: '拼搏的唯一选择',
                                        center: true,  // 是否居中
                                        css: {
                                            position: 'absolute',
                                            opacity: 0,
                                            top: '150px',
                                            // border: '1px solid #000',
                                            fontSize: '18px',
                                            fontWeight: '900',
                                            padding: '2px',
                                            marginLeft: '142px'
                                        },
                                        animateIn: {
                                            opacity: 1,
                                            top: 150,
                                            marginLeft: '42px'
                                        },
                                        animateOut: {
                                            opacity: 0,
                                            top: '150px',
                                            marginLeft: '142px'
                                        },
                                        delay: 100,
                                        // event: {click: function () { alert($(this).text()) } }
                                    }
                                )
                            .addSlide('3-slide-2')
                                .addComponent(
                                    {
                                        type: 'base',
                                        width: 30,
                                        height: 170,
                                        text: '努力的人生才是最好的',
                                        center: true,  // 是否居中
                                        css: {
                                            position: 'absolute',
                                            opacity: 0,
                                            left: 0,
                                            top: '150px',
                                            // border: '1px solid #000',
                                            fontSize: '18px',
                                            fontWeight: '900',
                                            padding: '2px'
                                        },
                                        animateIn: {
                                            opacity: 1,
                                            top: 150,
                                            left: '50%'
                                        },
                                        animateOut: {
                                            opacity: 0,
                                            top: '150px',
                                            left: 0
                                        },
                                        delay: 60,
                                        // event: {click: function () { alert($(this).text()) } }
                                    }
                                )
                                .addComponent(
                                    {
                                        type: 'base',
                                        width: 30,
                                        height: 360,
                                        text: '不要在花一样的年纪荒废了青春',
                                        center: true,  // 是否居中
                                        css: {
                                            position: 'absolute',
                                            opacity: 0,
                                            top: '150px',
                                            // border: '1px solid #000',
                                            fontSize: '18px',
                                            fontWeight: '900',
                                            padding: '2px',
                                            marginLeft: '142px'
                                        },
                                        animateIn: {
                                            opacity: 1,
                                            top: 100,
                                            marginLeft: '42px'
                                        },
                                        animateOut: {
                                            opacity: 0,
                                            top: '150px',
                                            marginLeft: '142px'
                                        },
                                        delay: 100,
                                        // event: {click: function () { alert($(this).text()) } }
                                    }
                                )
                                .addSlide('3-slide-3')
                                    .addComponent(
                                        {
                                            type: 'base',
                                            width: 30,
                                            height: 170,
                                            text: '世界上唯一可以不劳而获的就是贫穷',
                                            center: true,  // 是否居中
                                            css: {
                                                position: 'absolute',
                                                opacity: 0,
                                                left: 0,
                                                top: '150px',
                                                // border: '1px solid #000',
                                                fontSize: '18px',
                                                fontWeight: '900',
                                                padding: '2px'
                                            },
                                            animateIn: {
                                                opacity: 1,
                                                top: 150,
                                                left: '50%'
                                            },
                                            animateOut: {
                                                opacity: 0,
                                                top: '150px',
                                                left: 0
                                            },
                                            delay: 100,
                                            // event: {click: function () { alert($(this).text()) } }
                                        }
                                    )
                                    .addComponent(
                                        {
                                            type: 'base',
                                            width: 30,
                                            height: 360,
                                            text: '唯一可以无中生有的是梦想',
                                            center: true,  // 是否居中
                                            css: {
                                                position: 'absolute',
                                                opacity: 0,
                                                top: '150px',
                                                // border: '1px solid #000',
                                                fontSize: '18px',
                                                fontWeight: '900',
                                                padding: '2px',
                                                marginLeft: '142px'
                                            },
                                            animateIn: {
                                                opacity: 1,
                                                marginLeft: '42px'
                                            },
                                            animateOut: {
                                                opacity: 0,
                                                marginLeft: '142px'
                                            },
                                            delay: 100,
                                            // event: {click: function () { alert($(this).text()) } }
                                        }
                                    )
                                        .addSection('fourSection')
                                            .addSlide('4-slide-1')
                                            .addComponent(
                                                {
                                                    type: 'base',
                                                    width: 30,
                                                    height: 170,
                                                    text: '你那么怕输',
                                                    center: true,  // 是否居中
                                                    css: {
                                                        position: 'absolute',
                                                        opacity: 0,
                                                        top: 150,
                                                        // border: '1px solid #000',
                                                        fontSize: '60px',
                                                        fontWeight: '900',
                                                        padding: '2px'
                                                    },
                                                    animateIn: {
                                                        opacity: 1,
                                                        fontSize: 30
                                                    },
                                                    animateOut: {
                                                        opacity: 0,
                                                        fontSize: 60
                                                    },
                                                    delay: 100,
                                                    // event: {click: function () { alert($(this).text()) } }
                                                }
                                            )
                                            .addComponent(
                                                {
                                                    type: 'base',
                                                    width: 30,
                                                    height: 360,
                                                    text: '又怎么可能赢',
                                                    center: true,  // 是否居中
                                                    css: {
                                                        position: 'absolute',
                                                        opacity: 0,
                                                        top: '150px',
                                                        // border: '1px solid #000',
                                                        fontSize: '60px',
                                                        fontWeight: '900',
                                                        padding: '2px',
                                                        marginLeft: '42px'
                                                    },
                                                    animateIn: {
                                                        opacity: 1,
                                                        fontSize: 30
                                                    },
                                                    animateOut: {
                                                        opacity: 0,
                                                        fontSize: 60
                                                    },
                                                    delay: 100,
                                                    // event: {click: function () { alert($(this).text()) } }
                                                }
                                            )
                                        .load();


