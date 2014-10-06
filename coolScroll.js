(function ($) {
                $.fn.coolScroll = function (options) {
                    
                    var settings = {
                        complete     : function(){},
                        Duration     : 1000,
                        MarginBottom : "0px",
                        Margin       : "20px",
                        Position     : "right",
                        scrollTop    : 100,
                        Text         : "Go to Top",
                        Font         : "arial",
                        Size         : "12px",
                        Background   : "#ccc",
                        hBackground  : null,
                        Opacity      : "1",
                        hOpacity     : null,
                        Padding      : "10px",
                        Color        : "black",
                        hColor       : null
                    };

                    var o = {};
                    $.extend(o, settings, options);

                    return this.each(function () {
                        var link = $(this);

                        if (o.Position == 'left')
                            link.css({"left": o.Margin});
                        else
                            link.css({"right": o.Margin});

                        if (o.Padding)
                            link.css({"padding": o.Padding});

                        link.text(o.Text);
                        link.css({
                            "position": "fixed",
                            "cursor": "pointer",
                            "font-family": o.Font,
                            "font-size": o.Size,
                            "backgroundColor": o.Background,
                            "bottom": o.MarginBottom,
                            "color": o.Color,
                            "opacity": o.Opacity
                        });

                        link.hover(function (e) {
                            $(this).animate({"paddingBottom": "15px"}, 100);

                            if (o.hBackground)
                                $(this).css("backgroundColor", o.hBackground);
                            if (o.hOpacity)
                                $(this).css("opacity", o.hOpacity);
                            if (o.hColor)
                                $(this).css("color", o.hColor);

                        }, function (e) {
                            $(this).animate({"paddingBottom": "10px"}, 100);
                            if (o.hBackground)
                                $(this).css("backgroundColor", o.Background);
                            if (o.hOpacity)
                                $(this).css("opacity", o.Opacity);
                            if (o.hColor)
                                $(this).css("color", o.Color);
                        })

                        link.click(function (event) {
                            $("html, body").animate({scrollTop: 0}, o.Duration);
                            event.preventDefault();
                        });

                        link.hide();

                        $(window).scroll(function () {
                            if ($(window).scrollTop() > o.scrollTop) {
                                link.fadeIn();
                            } else {
                                link.hide();
                            }
                            ;
                        });
                    if (typeof o.complete == 'function') { 
                        o.complete.call(this); // brings the scope to the callback
                    } 
                    });
                }
            })(jQuery)
