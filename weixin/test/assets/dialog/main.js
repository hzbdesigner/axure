(function (window, document) {

    "use strict";

    $(function () {

        $('button').bind('click', function (e) {
            (new Function('e', $(this).prev('textarea').val())(e));
        });

        var wrap = $('<div class="catel"/>');

        $('.cater').each(function (j) {

            $('h2', this).clone().appendTo(wrap);

            var menu = $('<ul/>');

            $('dl', this).each(function (i) {
                var id = 'e' + j + '-' + i,
                    text = $(this).attr('id', id).children('dt').text();
                $('<li/>').append($('<a href="#' + id + '"/>').text(text))
                    .appendTo(menu);
            });

            menu.appendTo(wrap);
        });

        wrap.prependTo('#menu');

        if (window.location.hash)
            window.location.href = window.location.hash;

    });

    if (!window.console) {
        window.console = {
            log: function () {
                var n = arguments.length,
                    i;
                for (i = 0; i < n; i++)
                    window.alert(arguments[i]);
            }
        };
    }
}(window, document));