(function ($) {

    "use strict";

    /**
     * CROSS
     */
    var obj2str = Object.prototype.toString,
        hasProp = Object.prototype.hasOwnProperty,
        arrayShift = Array.prototype.shift,
        arraySlice = Array.prototype.slice,

        Cross = function Cross() {};

    Cross.prototype.constructor = Cross;

    Cross.extend = function () {
        var deep,
            args = arraySlice.call(arguments, 0),
            obj = {},
            key,
            src;

        if (args.length === 0)
            return obj;

        if (typeof args[0] === 'boolean')
            deep = args.shift();
        else
            deep = false;

        if (args.length === 0)
            return obj;

        if (args.length > 1)
            obj = args.shift();

        while (src = args.shift()) {
            for (key in src) {
                if (hasProp.call(src, key)) {
                    if (obj === src[key])
                        continue;
                    if (deep && Cross.isPlainObject(src[key])) {
                        if (!Cross.isPlainObject(obj[key]))
                            obj[key] = {};
                        Cross.extend(deep, obj[key], src[key]);
                    } else {
                        obj[key] = src[key];
                    }
                }
            }
        }

        return obj;
    };

    Cross.Super = function () {};

    Cross.Super.prototype = {
        extend: function (src) {
            return Cross.extend(true, this, src);
        }
    };

    Cross.extend(Cross, {

        KEYMAP: {
            ESCAPE: 27,
            ENTER: 13,
            TAB: 9
        },

        browser: {
            language: function () {
                var lg = (window.navigator.language || window.navigator.userLanguage || window.navigator.systemLanguage || 'zh-CN').toLowerCase();
                this.language = function () {
                    return lg;
                };
                return lg;
            },
            
            msie: function () {
                var ua = window.navigator.userAgent.match(/MSIE (\d+)(?:\.\d+)?/);
                ua = !!ua && parseInt(ua[1], 10);
                this.msie = function () {
                    return ua;
                };
                return ua;
            }
        },

        typeOf: function () {
            if (arguments.length === 1)
                return Cross.typeOf.call(this) === arguments[0];

            return obj2str.call(this).match(/^\[object ([a-zA-Z]+)\]$/)[1];
        },

        isArray: function (o) {
            return Cross.typeOf.call(o, 'Array');
        },

        isBoolean: function (o) {
            return Cross.typeOf.call(o, 'Boolean');
        },

        isFunction: function (o) {
            return Cross.typeOf.call(o, 'Function');
        },

        isNull: function (o) {
            return Cross.typeOf.call(o, 'Null');
        },

        isNumber: function (o) {
            return Cross.typeOf.call(o, 'Number');
        },

        isObject: function (o) {
            return Cross.typeOf.call(o, 'Object');
        },

        isPlainObject: function (o) {
            return o && Cross.isObject(o) && !o.nodeType && !Cross.isWindow(o);
        },

        isEmptyObject: function(o) {
            var k;
            for (k in o)
                return false;
            return true;
        },

        isString: function (o) {
            return Cross.typeOf.call(o, 'String');
        },

        isUndefined: function (o) {
            return Cross.typeOf.call(o, 'Undefined');
        },

        isWindow: function (o) {
            return o !== null && o === o.window;
        },

        /*isDOMNode: function (o) {
            return (typeof o === 'object') && o.nodeType;
        },*/

        noop: function () {},

        inherit: (function () {
            var F = function () {};
            return function (C, P) {
                F.prototype = P.prototype;
                C.prototype = new F();
                C.uber = P.prototype;
                C.prototype.constructor = C;
            };
        }()),

        proxy: function (f, c) {
            if (Cross.isArray(f))
                return function () {
                    var r = [],
                        i = 0,
                        n = f.length;
                    for (; i < n; i++)
                        if (Cross.isFunction(f[i]))
                           r.push(f[i].apply(c, arguments));
                    return r;
                };
            else if (Cross.isFunction(f))
                return function () {
                    return f.apply(c, arguments);
                };
            else
                return Cross.noop;
        },

        timer: function (tm, cb, ms) {
            return function () {
                switch (cb(--tm)) {
                    case 1:
                        setTimeout(Cross.timer(tm, cb, ms), ms);
                        break;
                    case -1:
                        setTimeout(Cross.timer(++tm, cb, ms), ms);
                        break;
                    case 0:
                    default:
                        break;
                }
            };
        },

        Class: function () {

            var Child,
                Parent,
                Protos;

            Child = function () {
                if (Child.uber && hasProp.call(Child.uber, '__construct'))
                    Child.uber.__construct.apply(this, arguments);

                if (hasProp.call(Child.prototype, '__construct'))
                    Child.prototype.__construct.apply(this, arguments);
            };

            switch (arguments.length) {
                case 2:
                    if (Cross.isFunction(arguments[0]))
                        Parent = arguments[0];

                    if (Cross.isPlainObject(arguments[1]))
                        Protos = arguments[1];

                    break;
                case 1:
                    if (Cross.isFunction(arguments[0]))
                        Parent = arguments[0];
                    else if (Cross.isPlainObject(arguments[0]))
                        Protos = arguments[0];

                    break;
            }

            Cross.inherit(Child, Parent || Cross.Super);

            Cross.extend(Child.prototype, Protos);

            return Child;

        }
        
    });

    /**
     * BANKER
     */
    var Banker = new Cross.Class({
        __construct: function (pre, obj) {
            this.prefix = pre || 'BPF';
            this.hayStack = obj || {};
        },
        get: function (key) {
            if (key !== '') {
                key = this.prefix + '-' + key;
                if (this.hayStack.hasOwnProperty(key))
                    return this.hayStack[key];
            }
            return null;
        },
        set: function (key, obj) {
            this.hayStack[this.prefix + '-' + key] = obj;
        },
        remove: function (key) {
            if (key !== '') {
                key = this.prefix + '-' + key;
                if (this.hayStack.hasOwnProperty(key)) {
                    delete this.hayStack[key];
                }
            }
        }
    });

    /**
     * I18N
     */
    var i18n = function (k, d, l) {
        if (k !== '')
            if (l && typeof l === 'object' && l.hasOwnProperty(d))
                if (d = l[d])
                    if (typeof d === 'object' && d.hasOwnProperty(k))
                        return d[k];
        return k;
    };

    /**
     * I18N.DIALOG
     */
    var lang = {
            'en-us': {
                Submit: 'OK',
                Cancel: 'Cancel',
                'This dialog box will close in <em></em> seconds': 'This dialog box will close in <em></em> seconds'
            },
            'zh-cn': {
                Submit: '\u786e\u8ba4',
                Cancel: '\u53d6\u6d88',
                'This dialog box will close in <em></em> seconds': '\u6b64\u5bf9\u8bdd\u6846\u5c06\u5728 <em></em> \u79d2\u5185\u5173\u95ed'
            },
            'zh-tw': {
                Submit: '\u78ba\u8a8d',
                Cancel: '\u53d6\u6d88',
                'This dialog box will close in <em></em> seconds': '\u6b64\u5c0d\u8a71\u6846\u5c07\u5728 <em></em> \u79d2\u5167\u95dc\u9589'
            }
        },

        __ = function(k, d){
            return i18n(k, d, lang)
        };

    /**
     * DIALOG
     */
    if (document.compatMode === 'BackCompat')
        throw new Error('The dialog widget is NOT campitable with the backcompat mode.');

    var msie = Cross.browser.msie();
    if (msie)
        $(document.body).addClass('msie msie' + msie);

    var clearSelect = window.getSelection ? function () {
            window.getSelection().removeAllRanges();
        } : function () {
            try {
                document.selection.empty();
            } catch (e) {};
        },

        language = Cross.browser.language(),

        classes = {
            'blocker': 'ui-blocker',
            'dialog': 'ui-dialog',
            'dialogWrapper': 'ui-dialog-in',
            'dialogHead': 'ui-dialog-hd',
            'dialogBody': 'ui-dialog-bd',
            'dialogFoot': 'ui-dialog-ft',
            'dialogBtns': 'ui-dialog-btns',
            'dialogBtn': 'ui-dialog-btn',
            'dialogTout': 'ui-dialog-tout',
            'dialogClose': 'ui-dialog-close',
            'dialogDraggable': 'ui-dialog-draggable',
            'dialogLoading': 'ui-dialog-loading',
            'dialogActive': 'ui-dialog-active',
            'dialogTitle': 'ui-dialog-title',
            'dialogTitless': 'ui-dialog-titless'
        },

        options = {
            blocker: false,
            //buttonReverse: false,
            buttons: {},
            close: true,
            content: '',
            contentTpl: '',
            draggable: true,
            height: '',
            id: '',
            location: {
                x: .5,
                y: .5
            },
            lockLocation: false,
            maxHeight: '80%',
            maxWidth: '80%',
            minHeight: 90,
            minWidth: 160,
            on: {},
            onclose: '',
            parent: document.body,
            position: 'fixed',
            reverseButton: false,
            selector: '',
            showTimer: true,
            speed: 200,
            timeout: 0,
            title: '',
            width: ''
        },

        instanceBanker = new (new Cross.Class(Banker, {
            getHighest: function () {
                var max = 0,
                    obj = false,
                    inst,
                    hays = this.hayStack,
                    key;
                for (key in hays) {
                    if (hasProp.call(hays, key)) {
                        inst = hays[key];
                        if (inst.visible && inst.zIndex > max) {
                            max = inst.zIndex;
                            obj = inst;
                        }
                    }
                }
                return obj;
            }
        }))(),

        dZIndex = 10000,

        getDZIndex = function () {
            return ++dZIndex;
        },

        Dialog = new Cross.Class({
            classes: {

            },

            options: {

            },

            id: '',

            __construct: function () {
                this.extend({
                    callbacks: {},
                    dialog: null,
                    dialogBody: null,
                    dialogBlocker: null,
                    dialogClose: null,
                    dialogFoot: null,
                    dialogHead: null,
                    dialogParent: null,
                    dialogTitle: null,
                    dialogWrapper: null,
                    ie6frame: null,
                    instanceId: '',
                    position: '',
                    visible: false,
                    zIndex: 0
                });

                this.classes = Cross.extend(true, {}, classes, this.classes);
                this.options = Cross.extend(true, {}, options, this.options);

                this._Argu0.apply(this, arguments);
                this._Argus.apply(this, arguments);
                
                this.dialogParent = $(this.options.parent);

                this._Prepare()
                    ._Dialog()
                    ._Wrapper()
                    ._Head()
                    ._Body()
                    ._Foot()
                    ._Title()
                    ._Close()
                    ._Content()
                    ._Buttons()
                    ._Blocker()
                    ._Highlight()
                    ._Parent()
                    ._Timer()
                    ._Insert()
                    ._Draggable()
                    ._Resize()
                    ._Location()
                    ._IE6Masking()
                    ._Ready();

                this.show();
            },

            __scrollxy: function () {
                return (this.position === 'fixed') ? {
                        x: 0,
                        y: 0
                    } : ((msie === 6 && this.dialogParent.is('body')) ? {
                            x: document.documentElement.scrollLeft,
                            y: document.documentElement.scrollTop
                        } : {
                            x: this.dialogParent.scrollLeft(),
                            y: this.dialogParent.scrollTop()
                        });
            },

            __viewport: function () {
                return this.dialogParent.is('body') ? {
                        width: $(window).width(),
                        height: $(window).height()
                    } : {
                        width: this.dialogParent.width(),
                        height: this.dialogParent.height()
                    };
            },

            _Argu0: function (arg) {
                if (Cross.isString(arg))
                    this.options.content = arg;
                else if (Cross.isPlainObject(arg))
                    Cross.extend(true, this.options, arg);

                return this;
            },

            _Argus: function () {
                return this;
            },

            _Blocker: function () {
                var css;

                if (this.options.blocker) {

                    css = {
                        zIndex: this.zIndex,
                        position: this.position
                    };

                    if (this.position === 'absolute') {
                        css.width = this.dialogParent.get(0).scrollWidth;
                        css.height = this.dialogParent.get(0).scrollHeight;
                    }

                    this.dialogBlocker = $('<div class="' + this.classes.blocker + '"/>')
                        .css(css)
                        .attr({
                            display: 'none',
                            tabIndex: -1
                        });

                    if (msie === 6) {
                        $('<iframe frameborder="0"/>').css($.extend(css, {
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: this.dialogParent.innerWidth(),
                            height: this.dialogParent.innerHeight(),
                            zIndex: -1,
                            opacity: 0
                        })).appendTo(this.dialogBlocker);
                    } else if (!msie || msie > 8) {
                        this.dialogBlocker.bind('mousedown', Cross.proxy(function () {
                            this.dialogHead.stop(true, true)
                                .fadeTo(50, .75).fadeTo(50, 1)
                                .fadeTo(50, .75).fadeTo(50, 1)
                                .fadeTo(50, .75).fadeTo(50, 1);
                        }, this));
                    }

                    this.dialogBlocker.prependTo(this.dialogParent);
                }

                return this;
            },

            _Body: function () {
                this.dialogBody = $('<div class="' + this.classes.dialogBody + '"/>')
                    .appendTo(this.dialogWrapper);

                return this;
            },

            _Buttons: function () {
                var s,
                    n,
                    a,
                    r,
                    b = this.options.buttons;
                if (Cross.isPlainObject(b) && !Cross.isEmptyObject(b)) {
                    s = $('<div class="' + this.classes.dialogBtns + '"/>')
                        .appendTo(this.dialogFoot);

                    this.buttonBanker = new (new Cross.Class(Banker))();

                    r = this.options.reverseButton;

                    for (n in b) {
                        if (hasProp.call(b, n)) {
                            a = $('<a class="' + this.classes.dialogBtn
                                    + ' ' + this.classes.dialogBtn + '-'
                                    + n.toLowerCase() + '" href="javascript:"/>')
                                .text(__(n, language))
                                .bind('click', Cross.proxy([this._Results(n), this.callbacks[n], b[n]], this));
                            this.buttonBanker.set(n, r ? a.prependTo(s) : a.appendTo(s));
                        }
                    }
                }

                return this;
            },

            _Close: function () {
                if (this.options.close) {
                    this.dialogClose = $('<a class="' + this.classes.dialogClose + '" href="javascript:"/>')
                        .attr({
                            hideFocus: true
                        })
                        .text('x')
                        .bind('mousedown', function (e) {
                            e.stopPropagation();
                        })
                        .bind('click', Cross.proxy(function () {
                            var button;
                            if (this.options.onclose === '') {
                                this.close();
                            } else if (Cross.isFunction(this.options.onclose)) {
                                this.options.onclose.apply(this);
                                this.close();
                            } else if (Cross.isPlainObject(this.buttonBanker)) {
                                if (button = this.buttonBanker.get(this.options.onclose))
                                    button.trigger('click');
                                else
                                    this.close();
                            }
                        }, this))
                        .appendTo(this.dialogHead);

                    this.dialog.add(this.dialogBlocker).bind('keydown', Cross.proxy(function (e) {
                        if (e.keyCode === Cross.KEYMAP.ESCAPE)
                            this.dialogClose.trigger('click');
                    }, this));
                }

                return this;
            },

            _Content: function () {
                if (this.options.selector)
                    this.options.content = $(this.options.selector).html();

                if (this.options.contentTpl && Cross.isString(this.options.content))
                    this.options.content = this.options.contentTpl.replace(/\{\{content\}\}/g, this.options.content);

                this.dialogBody.empty().append(this.options.content);

                return this;
            },

            _Dialog: function () {
                this.dialog = $('<div class="' + this.classes.dialog + '"/>')
                    .attr({
                        tabIndex: -1
                    })
                    .css({
                        visibility: 'hidden',
                        position: this.position,
                        zIndex: this.zIndex,
                        margin: 0
                    })
                    .bind('mousedown', Cross.proxy(this.focus, this));

                return this;
            },

            _Draggable: function (off) {

                if (this.options.draggable) {

                    if (off === true) {

                        $(this.dialogHead || this.dialog).unbind('.draggable-' + this.instanceId);
                        $(document).unbind('.draggable-' + this.instanceId);

                    } else {
                        
                        $((this.options.title === false && this.dialog)
                            || this.dialogHead.addClass(this.classes.dialogDraggable))
                        .bind('contextmenu.draggable-' + this.instanceId, function (e) {
                            e.preventDefault();
                        })
                        .bind('mousedown.draggable-' + this.instanceId, Cross.proxy(function (e) {
                            
                            var oset = this.__scrollxy(),
                                size = this.__viewport(),
                                maxLeft,
                                maxTop,
                                pageX,
                                pageY;

                            // prevent scrolling on chrome
                            e.preventDefault();

                            maxLeft = size.width - this.dialog.outerWidth() + oset.x;
                            maxTop = size.height - this.dialog.outerHeight() + oset.y;

                            pageX = this.dialog.get(0).offsetLeft - e.pageX;
                            pageY = this.dialog.get(0).offsetTop - e.pageY;

                            $(document)
                                .bind('mouseup.draggable-' + this.instanceId, Cross.proxy(function (e) {
                                    $(document).unbind('.draggable-' + this.instanceId);
                                }, this))
                                .bind('mousemove.draggable-' + this.instanceId, Cross.proxy(function (e) {
                                    this.dialog.css({
                                        left: Math.max(Math.min(pageX + e.pageX, maxLeft), oset.x),
                                        top: Math.max(Math.min(pageY + e.pageY, maxTop), oset.y)
                                    });
                                    clearSelect();
                                }, this));
                        }, this));
                    }
                }

                return this;
            },

            _Foot: function () {
                this.dialogFoot = $('<div class="' + this.classes.dialogFoot + '"/>')
                    .appendTo(this.dialogWrapper);

                return this;
            },

            _Head: function () {
                this.dialogHead = $('<div class="' + this.classes.dialogHead + '"/>')
                    .appendTo(this.dialogWrapper);

                return this;
            },

            _Highlight: function () {
                $(this.dialogHead || this.dialog).bind('mousedown.active-' + this.instanceId, Cross.proxy(function (e) {
                    e.preventDefault();
                    this.dialog.addClass(this.classes.dialogActive);

                    $(document).bind('mouseup.active-' + this.instanceId, Cross.proxy(function () {
                        $(document).unbind('mouseup.active-' + this.instanceId);
                        this.dialog.removeClass(this.classes.dialogActive);
                    }, this));
                }, this));

                return this;
            },

            _IE6Masking: function () {
                if (msie === 6) {
                    if (this.ie6frame) {
                         this.ie6frame.css({
                            width: this.dialog.innerWidth(),
                            height: this.dialog.innerHeight()
                        });
                    } else {
                        this.ie6frame = $('<iframe frameborder="0"/>').css({
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: this.dialog.innerWidth(),
                            height: this.dialog.innerHeight(),
                            zIndex: -1,
                            opacity: 0
                        }).prependTo(this.dialog);
                    }
                }

                return this;
            },

            _Insert: function () {
                this.dialog.appendTo(this.dialogParent);

                return this;
            },

            _Location: function (off) {
                var rs;

                if (off === true) {
                    if (this.options.lockLocation && this.dialogParent.is('body'))
                        $(window).unbind('resize.location.' + this.instanceId);
                } else if (!Cross.isEmptyObject(this.options.location)) {

                    (rs = Cross.proxy(function () {
                        var oset = this.__scrollxy(),
                            size = this.__viewport();

                        this.dialog.css({
                            left: (size.width - this.dialog.outerWidth(true)) * this.options.location.x + oset.x,
                            top: (size.height - this.dialog.outerHeight(true)) * this.options.location.y + oset.y
                        });
                    }, this))();

                    if (this.options.lockLocation && this.dialogParent.is('body'))
                        $(window).unbind('resize.location.' + this.instanceId)
                            .bind('resize.location.' + this.instanceId, rs);
                }

                return this;
            },

            _Parent: function (off) {
                if (this.dialogParent && !this.dialogParent.is('body')) {
                    if (off === true) {
                        if (this.dialogParent.hasClass('ui-dialog-position-resetted')) {
                           this.dialogParent
                                .removeClass('ui-dialog-position-resetted')
                                .css('position', 'static'); 
                        }
                    } else {
                        if (/^(static)?$/.test(this.dialogParent.css('position'))) {
                           this.dialogParent
                                .addClass('ui-dialog-position-resetted')
                                .css('position', 'relative');
                        }
                    }
                }

                return this;
            },

            _Prepare: function () {
                var instance;

                this.instanceId = this.id || this.options.id;

                if (instance = instanceBanker.get(this.instanceId))
                    instance.clear(true);

                this.instanceId = this.instanceId || new Date().getTime();

                instanceBanker.set(this.instanceId, this);

                if ((this.position = this.options.position) === 'fixed') {
                    if (msie === 6 || !this.dialogParent.is('body'))
                        this.position = 'absolute';
                }

                this.zIndex = getDZIndex();

                return this;
            },

            _Ready: function () {
                this.dialogFoot.toggle(!this.dialogFoot.is(':empty'));

                this.dialog.css({
                    visibility: 'visible',
                    display: 'none'
                });

                Cross.proxy(this.options.on.ready, this)();

                return this;
            },

            _Resize: function (off) {
                var rs;

                if (this.dialogParent.is('body')) {

                    if (off === true) {
                        $(window).unbind('resize.resize.' + this.instanceId);
                    } else {

                        (rs = Cross.proxy(function () {
                            var maxw = this.options.maxWidth,
                                maxh = this.options.maxHeight,
                                minw = this.options.minWidth,
                                minh = this.options.minHeight,
                                size = this.__viewport(),
                                regx = /^[\.\d]+%$/,
                                pw, ph, bh, ch;

                            if (Cross.isString(maxw) && regx.test(maxw))
                                maxw = Math.floor(size.width * parseInt(maxw, 10) / 100);

                            if (Cross.isString(maxh) && regx.test(maxh))
                                maxh = Math.floor(size.height * parseInt(maxh, 10) / 100);

                            if (Cross.isString(minw) && regx.test(minw))
                                minw = Math.floor(size.width * parseInt(minw, 10) / 100);

                            if (Cross.isString(minh) && regx.test(minh))
                                minh = Math.floor(size.height * parseInt(minh, 10) / 100);

                            pw = this.dialogWrapper.outerWidth(true) - this.dialogWrapper.width()
                                + this.dialog.outerWidth(true) - this.dialog.width();

                            ph = this.dialogWrapper.outerHeight(true) - this.dialogWrapper.height()
                                + this.dialog.outerHeight(true) - this.dialog.height();

                            this.dialogWrapper.css({
                                maxWidth: maxw - pw,
                                maxHeight: maxh - ph,
                                minWidth: minw - pw,
                                minHeight: minh - ph
                            });

                            this.dialogBody.css({
                                height: this.options.height || 'initial',
                                maxHeight: 'initial',
                                minHeight: 'initial',
                                overflow: 'initial'
                            });

                            bh = this.dialogWrapper.height();
                            ch = this.dialogBody.outerHeight(true);

                            if (this.dialogHead && this.dialogHead.is(':visible'))
                                bh -= this.dialogHead.outerHeight();
                            if (this.dialogFoot && this.dialogFoot.is(':visible'))
                                bh -= this.dialogFoot.outerHeight();

                            if (bh < ch) {
                                bh -= this.dialogBody.outerHeight(true) - this.dialogBody.height();

                                this.dialogBody.css(msie === 6 ? {
                                        height: bh,
                                        overflow: 'auto'
                                    } : {
                                        maxHeight: bh,
                                        overflow: 'auto'
                                    });
                            } else {
                                bh -= this.dialogBody.outerHeight(true) - this.dialogBody.height();

                                if (bh > ch) {
                                    this.dialogBody.css(msie === 6 ? {
                                        height: bh,
                                        overflow: 'initial'
                                    } : {
                                        minHeight: bh,
                                        overflow: 'initial'
                                    });
                                }
                            }

                            this._IE6Masking();
                        }, this))();

                        $(window).unbind('resize.resize.' + this.instanceId)
                            .bind('resize.resize.' + this.instanceId, rs);
                    }

                }

                return this;
            },

            _Results: function () {

            },

            _Timer: function () {
                var cb, em;
                if (this.options.timeout && (this.options.timeout = parseInt(this.options.timeout, 10))) {
                    if (this.options.showTimer)
                        em = $('<div class="' + this.classes.dialogTout + '">'
                            + __('This dialog box will close in <em>' + this.options.timeout + '</em> seconds', language) +
                            '</div>')
                            .appendTo(this.dialogFoot).find('em');

                    cb = Cross.proxy(function (n) {
                            if (this.visible) {
                                if (n) {
                                    if (em)
                                        em.text(n);
                                    return 1;
                                } else {
                                    this.close();
                                    return 0;
                                }
                            } else {
                                return -1;
                            }
                        }, this);

                    Cross.timer(this.options.timeout, cb, 1000)();
                }

                return this;
            },

            _Title: function () {
                if (this.options.title === false)
                    this.dialog.addClass(this.classes.dialogTitless);
                else
                    $('<div class="' + this.classes.dialogTitle + '"/>')
                        .html(this.options.title || '&nbsp;')
                        .appendTo(this.dialogHead);


                return this;
            },

            _Wrapper: function () {
                var w = this.options.width,
                    h = this.options.height;

                if (w = parseInt(w, 10))
                    w -= this.dialogWrapper.outerWidth(true) - this.dialogWrapper.width();

                if (h = parseInt(h, 10))
                    h -= this.dialogWrapper.outerHeight(true) - this.dialogWrapper.height();

                this.dialogWrapper = $('<div class="' + this.classes.dialogWrapper + '"/>')
                    .css({
                        width: w || this.options.width,
                        height: h || this.options.height
                    })
                    .appendTo(this.dialog);

                return this;
            },

            /**
             * clear current instance
             * @param {mix} true for just clear, and function for callback
             * @returns {null}
             */
            clear: function (arg) {
                if (!this.dialog)
                    return;

                this._Resize(true);
                this._Location(true);
                this._Draggable(true);
                
                var f = function () {
                        if (this.dialog)
                            this.dialog.remove();

                        if (this.dialogBlocker)
                            this.dialogBlocker.remove();

                        this._Parent(true);

                        instanceBanker.remove(this.instanceId);
                    };

                if (arg === true)
                    f.call(this);
                else
                    this.dialog.fadeOut(this.options.speed,
                        Cross.proxy([f, arg], this));
            },

            close: function () {
                if (!this.dialog)
                    return;

                this.clear(Cross.proxy(function () {
                    if (!this.dialog)
                        return;

                    Cross.proxy(this.options.on.close, this)();

                    var key;
                    for (key in this)
                        if (hasProp.call(this, key))
                            delete this[key];

                    var instance = instanceBanker.getHighest();
                    if (instance)
                        instance.focus();

                }, this));
            },

            focus: function () {
                if (!this.dialog)
                    return;

                this._Parent();

                if (this.dialogClose)
                    this.dialogClose.focus();
                else if (this.dialogBlocker)
                    this.dialogBlocker.focus();
                else
                    this.dialog.focus();

                if (this.zIndex < dZIndex)
                    this.dialog.css({
                        zIndex: this.zIndex = getDZIndex()
                    });

                Cross.proxy(this.options.on.focus, this)();
            },

            hide: function () {
                if (!this.dialog)
                    return;

                this.dialog.fadeOut(this.options.speed);
                this.visible = false;

                if (this.dialogBlocker)
                    this.dialogBlocker.hide();

                this._Parent(true);

                Cross.proxy(this.options.on.hide, this)();
            },

            show: function () {
                if (!this.dialog)
                    return;

                this.dialog.fadeIn(this.options.speed);
                this.visible = true;

                if (this.dialogBlocker)
                    this.dialogBlocker.show();

                Cross.proxy(this.options.on.show, this)();

                this.focus();
            }

        });

    Cross.extend(Dialog, {

        setOptions: function () {
            if (arguments.length === 1 && Cross.isPlainObject(arguments[0]))
                Cross.extend(true, options, arguments[0]);

            return Dialog;
        },

        setLanguage: function () {
            if (arguments.length === 1 && Cross.isString(arguments[0]))
                language = arguments[0];

            return Dialog;
        },

        setClasses: function () {
            if (arguments.length === 1 && Cross.isPlainObject(arguments[0]))
                Cross.extend(true, classes, arguments[0]);

            return Dialog;
        },

        show: function (id) {
            var obj = instanceBanker.get(id);
            obj && (obj instanceof Dialog) && obj.show && obj.show();
        },

        hide: function (id) {
            var obj = instanceBanker.get(id);
            obj && (obj instanceof Dialog) && obj.hide && obj.hide();
        },

        close: function (id) {
            var obj = instanceBanker.get(id);
            obj && (obj instanceof Dialog) && obj.close && obj.close();
        },

        /*el[, ev], op*/
        bind: function () {
            var el,
                ev = 'click',
                cb,
                args = arguments;
            if (args.length > 1) {

                if (args.length === 2) {
                    el = args[0];
                    cb = function () {
                        new Dialog(args[1]);
                    };
                } else {
                    el = args[0];
                    ev = args[1];
                    cb = function () {
                        new Dialog(args[2]);
                    };
                }

                /*$(el).length
                    ? $(el).bind(ev, cb)
                    : */$(el).live(ev, cb);
            }
        }

    });

    /**
     * DIALOG.ALERT
     */
    Cross.extend(Dialog, {
        
        Alert: new Cross.Class(Dialog, {
            id: 'Alert',
            _Argus: function () {
                if (arguments.length > 1 && Cross.isFunction(arguments[1]))
                    this.callbacks.Submit = arguments[1];

                return this;
            },
            options: {
                blocker: true,
                title: '提示',
                contentTpl: '<div class="dialog-comm-box"><div class="txt">{{content}}</div></div>',
                onclose: 'Submit',
                buttons: {
                    Submit: function () {
                        this.close();
                    }
                }
            }
        }),

        Confirm: new Cross.Class(Dialog, {
            id: 'Confirm',
            _Argus: function () {
                if (arguments.length === 2) {
                    if (Cross.isFunction(arguments[1]))
                        this.callbacks.Submit = this.callbacks.Cancel = arguments[1];
                } else if (arguments.length === 3) {
                    if (Cross.isFunction(arguments[1]))
                        this.callbacks.Submit = arguments[1];
                    if (Cross.isFunction(arguments[2]))
                        this.callbacks.Cancel = arguments[2];
                }

                return this;
            },
            _Results: function () {
                var arg = arguments[0];
                return Cross.proxy(function () {
                    this.result = arg === 'Submit';
                }, this);
            },
            options: {
                blocker: true,
                title: '提示',
                contentTpl: '<div class="dialog-comm-box"><div class="txt">{{content}}</div></div>',
                onclose: 'Cancel',
                buttons: {
                    Submit: function () {
                        this.close();
                    },
                    Cancel: function () {
                        this.close();
                    }
                }
            }
        }),

        Prompt: new Cross.Class(Dialog, {
            id: 'Prompt',
            _Argus: function () {
                if (arguments.length === 2) {
                    if (Cross.isFunction(arguments[1]))
                        this.callbacks.Submit = this.callbacks.Cancel = arguments[1];
                } else if (arguments.length === 3) {
                    if (Cross.isFunction(arguments[1]))
                        this.callbacks.Submit = arguments[1];
                    if (Cross.isFunction(arguments[2]))
                        this.callbacks.Cancel = arguments[2];
                }

                return this;
            },
            _Content: function () {
                var pWrap = $('<div class="ui-dialog-prompt"/>'),
                    tWrap = $('<div class="ui-dialog-prompt-title"/>')
                        .text(this.options.content)
                        .appendTo(pWrap),
                    cWrap = $('<div class="ui-dialog-prompt-content"/>').appendTo(pWrap);

                this.textInput = $('<input type="text" class="ui-dialog-prompt-input"/>')
                    .attr({
                        tabIndex: -1
                    })
                    .bind('keydown', Cross.proxy(function (e) {
                        if (e.keyCode === Cross.KEYMAP.TAB)
                            e.preventDefault();
                        else if (e.keyCode === Cross.KEYMAP.ENTER)
                            this.buttons.get('Submit').trigger('click');
                    }, this))
                    .val(this.options.defaultValue)
                    .appendTo(cWrap);

                this.dialogBody.empty().append(this.options.content = pWrap);

                return this;
            },
            _Results: function () {
                var arg = arguments[0];
                return Cross.proxy(function () {
                    this.result = arg === 'Submit' ? this.textInput.val() : null;
                }, this);
            },
            focus: function () {
                this.constructor.uber.focus.call(this);

                if (this.textInput)
                    this.textInput.focus().select();
            },
            options: {
                defaultValue: '',
                blocker: true,
                title: '提示',
                onclose: 'Cancel',
                buttons: {
                    Submit: function () {
                        this.close();
                    },
                    Cancel: function () {
                        this.close();
                    }
                }
            }
        }),

        /**
         * Dialog.Ajax(url[, data], callback);
         */
        Ajax: new Cross.Class(Dialog, {
            //id: 'Ajax',
            _Argu0: function () {
                if (arguments.length > 0) {
                    if (Cross.isString(arguments[0]))
                        this.options.url = arguments[0];
                    else if (Cross.isPlainObject(arguments[0]))
                        Cross.extend(true, this.options, arguments[0]);
                }

                return this;
            },
            _Argus: function () {
                if (arguments.length > 1) {
                    if (Cross.isPlainObject(arguments[1]))
                        this.options.data = arguments[1];
                    else if (Cross.isFunction(arguments[1]))
                        this.options.callback = arguments[1];

                    if (arguments.length > 2
                        && Cross.isFunction(arguments[2]))
                        this.options.callback = arguments[2];
                }

                return this;
            },
            _Content: function () {
                var cb = Cross.proxy(function () {
                            this.options.content = this.options.callback.apply(this, arguments);

                            this.dialog.removeClass(this.classes.loading);

                            this.constructor.uber._Content.call(this);

                            this._Resize()
                                ._Location();

                        }, this),
                    dt = {
                        cache: this.options.cache,
                        async: this.options.async,
                        url: this.options.url,
                        data: this.options.data,
                        success: cb
                    };

                this.dialogBody
                    .addClass('ui-dialog-bd-loading');
                
                if (/^http(s)?:/i.test(this.options.url)
                    && this.options.url.indexOf('//' + window.location.host + '/') === -1) {
                    dt.url = dt.url + '?jsoncallback=?';
                    dt.dataType = 'jsonp';
                }
                
                $.ajax(dt);

                return this;
            },
            options: {
                cache: true,
                async: true,
                url: '',
                data: {},
                callback: function (data) {
                    return data;
                }
            }
        })

    });

    window.Dialog = Dialog.setOptions({title:'提示'}).setClasses({
        'dialogBtns': 'ui-dialog-bt-box',
        'dialogBtn': 'bt-ui-dialog',
        'dialogDraggable': 'ui-dialog-title-draggable',
        'dialogTitle': 'ui-dialog-tit'
    });

})(jQuery, window, document);