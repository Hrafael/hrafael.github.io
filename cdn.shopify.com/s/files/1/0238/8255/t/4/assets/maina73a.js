document.documentElement.className = document.documentElement.className.replace('no-js', ''); //Remove no-js class ASAP

//For keeping track of product data
window.productJSON = [];
function addProductJSON(json) {
    window.productJSON.push(json);
}

//window.selectCallback is standard location for this function. Called whenever variant dropdown changes.
//Shopify's multi-currency code depends on it.
window.selectCallback = function(variant, selector){
  var $form = $(document.getElementById(selector.domIdPrefix)).closest('form');
  var $button = $form.find('input[type="submit"]');
  var $price = $form.closest('.detail').find('.price');
  //Update price & add-to-cart button states
  if(variant && variant.available == true) {
      $button.removeAttr('disabled');
      var priceHTML = Shopify.formatMoney(variant.price);
      if(variant.compare_at_price > variant.price) {
         priceHTML = '<span class="was-price">' + Shopify.formatMoney(variant.compare_at_price) + '</span>' + priceHTML;
      }
      $price.html(priceHTML);
  } else {
      $button.attr('disabled', 'disabled');
      $price.html(variant ? 'Sold out' : 'Unavailable');
  }
  
  //Link variant names to images
  if(variant) { //Can only do for available variants, unavailable ones aren't returned in the json
    var optionIndex = getVarOptToLink($form.data('product-id'));
    if(optionIndex > -1) {
    	var optionTitle = variant.options[optionIndex];
    	$form.closest('.product-detail').find('.gallery .thumbnails a[title="'+optionTitle+'"]').first().trigger('select');
    }
  }
  
}
//Lightbox
var fbOpts = { overlayColor: '#fff', padding: 1, margin: 60, overlayOpacity: 0.9 };

/*
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-input-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function w(a){i.cssText=a}function x(a,b){return w(prefixes.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b){for(var d in a){var e=a[d];if(!z(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function B(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}function C(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+m.join(d+" ")+d).split(" ");return y(b,"string")||y(b,"undefined")?A(e,b):(e=(a+" "+n.join(d+" ")+d).split(" "),B(e,b,c))}function D(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)q[c[d]]=c[d]in j;return q.list&&(q.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),q}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "))}var d="2.6.2",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j=b.createElement("input"),k={}.toString,l="Webkit Moz O ms",m=l.split(" "),n=l.toLowerCase().split(" "),o={},p={},q={},r=[],s=r.slice,t,u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=s.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(s.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(s.call(arguments)))};return e}),o.csstransitions=function(){return C("transition")};for(var E in o)v(o,E)&&(t=E.toLowerCase(),e[t]=o[E](),r.push((e[t]?"":"no-")+t));return e.input||D(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),h=j=null,e._version=d,e._domPrefixes=n,e._cssomPrefixes=m,e.testProp=function(a){return A([a])},e.testAllProps=C,e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/* Placeholders.js v2.1.1 */
(function(t){"use strict";function e(t,e,r){return t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent?t.attachEvent("on"+e,r):void 0}function r(t,e){var r,n;for(r=0,n=t.length;n>r;r++)if(t[r]===e)return!0;return!1}function n(t,e){var r;t.createTextRange?(r=t.createTextRange(),r.move("character",e),r.select()):t.selectionStart&&(t.focus(),t.setSelectionRange(e,e))}function a(t,e){try{return t.type=e,!0}catch(r){return!1}}t.Placeholders={Utils:{addEventListener:e,inArray:r,moveCaret:n,changeType:a}}})(this),function(t){"use strict";function e(){}function r(t,e){var r,n,a=!!e&&t.value!==e,u=t.value===t.getAttribute(V);return(a||u)&&"true"===t.getAttribute(D)?(t.setAttribute(D,"false"),t.value=t.value.replace(t.getAttribute(V),""),t.className=t.className.replace(R,""),n=t.getAttribute(z),n&&(t.setAttribute("maxLength",n),t.removeAttribute(z)),r=t.getAttribute(I),r&&(t.type=r),!0):!1}function n(t){var e,r,n=t.getAttribute(V);return""===t.value&&n?(t.setAttribute(D,"true"),t.value=n,t.className+=" "+k,r=t.getAttribute(z),r||(t.setAttribute(z,t.maxLength),t.removeAttribute("maxLength")),e=t.getAttribute(I),e?t.type="text":"password"===t.type&&K.changeType(t,"text")&&t.setAttribute(I,"password"),!0):!1}function a(t,e){var r,n,a,u,i;if(t&&t.getAttribute(V))e(t);else for(r=t?t.getElementsByTagName("input"):p,n=t?t.getElementsByTagName("textarea"):h,i=0,u=r.length+n.length;u>i;i++)a=r.length>i?r[i]:n[i-r.length],e(a)}function u(t){a(t,r)}function i(t){a(t,n)}function l(t){return function(){b&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(D)?K.moveCaret(t,0):r(t)}}function o(t){return function(){n(t)}}function c(t){return function(e){return m=t.value,"true"===t.getAttribute(D)&&m===t.getAttribute(V)&&K.inArray(C,e.keyCode)?(e.preventDefault&&e.preventDefault(),!1):void 0}}function s(t){return function(){r(t,m),""===t.value&&(t.blur(),K.moveCaret(t,0))}}function d(t){return function(){t===document.activeElement&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(D)&&K.moveCaret(t,0)}}function g(t){return function(){u(t)}}function v(t){t.form&&(L=t.form,L.getAttribute(P)||(K.addEventListener(L,"submit",g(L)),L.setAttribute(P,"true"))),K.addEventListener(t,"focus",l(t)),K.addEventListener(t,"blur",o(t)),b&&(K.addEventListener(t,"keydown",c(t)),K.addEventListener(t,"keyup",s(t)),K.addEventListener(t,"click",d(t))),t.setAttribute(U,"true"),t.setAttribute(V,E),n(t)}var p,h,b,f,m,A,y,E,x,L,T,N,S,w=["text","search","url","tel","email","password","number","textarea"],C=[27,33,34,35,36,37,38,39,40,8,46],B="#ccc",k="placeholdersjs",R=RegExp("(?:^|\\s)"+k+"(?!\\S)"),V="data-placeholder-value",D="data-placeholder-active",I="data-placeholder-type",P="data-placeholder-submit",U="data-placeholder-bound",j="data-placeholder-focus",q="data-placeholder-live",z="data-placeholder-maxlength",F=document.createElement("input"),G=document.getElementsByTagName("head")[0],H=document.documentElement,J=t.Placeholders,K=J.Utils;if(J.nativeSupport=void 0!==F.placeholder,!J.nativeSupport){for(p=document.getElementsByTagName("input"),h=document.getElementsByTagName("textarea"),b="false"===H.getAttribute(j),f="false"!==H.getAttribute(q),A=document.createElement("style"),A.type="text/css",y=document.createTextNode("."+k+" { color:"+B+"; }"),A.styleSheet?A.styleSheet.cssText=y.nodeValue:A.appendChild(y),G.insertBefore(A,G.firstChild),S=0,N=p.length+h.length;N>S;S++)T=p.length>S?p[S]:h[S-p.length],E=T.attributes.placeholder,E&&(E=E.nodeValue,E&&K.inArray(w,T.type)&&v(T));x=setInterval(function(){for(S=0,N=p.length+h.length;N>S;S++)T=p.length>S?p[S]:h[S-p.length],E=T.attributes.placeholder,E&&(E=E.nodeValue,E&&K.inArray(w,T.type)&&(T.getAttribute(U)||v(T),(E!==T.getAttribute(V)||"password"===T.type&&!T.getAttribute(I))&&("password"===T.type&&!T.getAttribute(I)&&K.changeType(T,"text")&&T.setAttribute(I,"password"),T.value===T.getAttribute(V)&&(T.value=E),T.setAttribute(V,E))));f||clearInterval(x)},100)}J.disable=J.nativeSupport?e:u,J.enable=J.nativeSupport?e:i}(this);
   
/*
* debouncedresize: special jQuery event that happens once after a window resize
*
* latest version and complete README available on Github:
* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
*
* Copyright 2011 @louis_remi
* Licensed under the MIT license.
*/
(function($) {
    var $event = $.event,
    $special,
    resizeTimeout;
    
    $special = $event.special.debouncedresize = {
        setup: function() {
            $( this ).on( "resize", $special.handler );
        },
        teardown: function() {
            $( this ).off( "resize", $special.handler );
        },
        handler: function( event, execAsap ) {
            // Save the context
            var context = this,
                args = arguments,
                dispatch = function() {
                    // set correct event type
                    event.type = "debouncedresize";
                    $event.dispatch.apply( context, args );
                };
    
            if ( resizeTimeout ) {
                clearTimeout( resizeTimeout );
            }
    
            execAsap ?
                dispatch() :
                resizeTimeout = setTimeout( dispatch, $special.threshold );
        },
        threshold: 200
    };
})(jQuery);
   
$(function(){
    //Return elements that have an ancestor/parent matching the supplied selector
    $.fn.hasAncestor = function(a) {
        return this.filter(function() {
            return $(this).closest(a).length > 0;
        });
    };
    
    //Side up and remove
    $.fn.slideUpAndRemove = function(speed){
        if(typeof speed == 'undefined') speed = 200;
        $(this).each(function(){
            $(this).slideUp(speed, function(){
                $(this).remove();
            });
        });
    }
    
    //Fade out image, replace src, fade back in when loaded
    $.fn.fadeToAnotherImage = function(newSrc, callback){
      var $img = $(this);
      if($img.attr('src') != newSrc) {
        $img.animate({opacity:0}, 200, function(){
          var oldHeight = $img.height();
          $img = $img.replaceImageWithOneOfNewSrc(newSrc);
          $img.css({ height: oldHeight, display: 'block' }); //Placeholder height until loaded. d:b required for occupying space in FF
          $img.imagesLoaded(function(){
            $img.css({height: '', display: ''}); //Revert to natural height
            $img.animate({opacity:1}, 200);
            if(callback) callback($img);
          });
        });
      }
      return $img;
    }
    
    $.fn.replaceImageWithOneOfNewSrc = function(newSrc) {
        //Used in a few places to avoid blank.gif breaking imagesLoaded
        var newTag = $(this).clone().wrap('<div />').parent().html();
        newTag = newTag.replace(/(src=")([^"]*)/gi, "$1" + newSrc);
        var $newTag = $(newTag);
        $(this).after($newTag).remove();
        return $newTag;
    }
    
    /// Simple function to expand/contract a div
    $(document).on('click', 'a[data-toggle-target]', function(e){
        var $target = $($(this).data('toggle-target'));
        $(this).find('.state').html( $target.is(':visible') ? '+' : '-' );
        $target.slideToggle(200);
        e.preventDefault();
    });
    
    //Already visible? Set state
    $('a[data-toggle-target]').each(function(){
        var $target = $($(this).data('toggle-target'));
        $(this).find('.state').html( $target.is(':visible') ? '-' : '+' );
    });
    
    //Redirect dropdowns
    $(document).on('change', 'select.navdrop', function(){
        window.location = $(this).val();
    });
    
    //General purpose lightbox
  	$('a[rel="fancybox"]').fancybox($.extend({}, fbOpts, { titleShow: false }));
    
    /// NAV
    //Show expander plusses
  	$('.multi-level-nav ul li a').each(function(){
      var $siblingUL = $(this).siblings('ul');
      if($siblingUL.length > 0) {
        if($siblingUL.hasClass('listed')) {
          	$(this).addClass('has-children listing-title');
        } else {
        	$(this).addClass('has-children').append('<span class="exp">+</span>');
        }
      }
  	});
  
    //Handle expanding nav
  	$(document).on('click clickinstant', '.multi-level-nav a.has-children', function(e){
      var navAnimSpeed = 200;
      if(e.type == 'clickinstant') {
        navAnimSpeed = 0;
      }
      
      //Mobile main nav?
      if($(this).closest('#main-nav').length == 1 && $('#main-nav').css('position') == 'fixed') {
        if($(this).parent().hasClass('mobile-expanded')) {
          $(this).siblings('ul').slideUp(navAnimSpeed, function(){
            $(this).css('display','').parent().removeClass('mobile-expanded');
          });
        } else {
          $(this).siblings('ul').slideDown(navAnimSpeed, function(){
            $(this).css('display','').parent().addClass('mobile-expanded');
          });
        }
      } else {
        //Large menu
        //Not for list titles
        if($(this).hasClass('listing-title')) return true;
           
        //Set some useful vars
        var $tierEl = $(this).closest('[class^="tier-"]');
        var $tierCont = $tierEl.parent();
        var targetTierNum = parseInt($tierEl.attr('class').split('-')[1]) + 1;
        var targetTierClass = 'tier-' + targetTierNum;
        var $targetTierEl = $tierCont.children('.' + targetTierClass);

        ///Remove nav for all tiers higher than this one
        $tierCont.children().each(function(){
          if(parseInt($(this).attr('class').split('-')[1]) >= targetTierNum) {
            $(this).slideUpAndRemove(navAnimSpeed);
          }
        });

        //Are we expanding or collapsing
        if($(this).hasClass('expanded')) {
          //Collapsing. Reset state
          $(this).removeClass('expanded').find('.exp').html('+');
        } else {
          ///Show nav
          //Reset other nav items at this level
          $tierEl.find('a.expanded').removeClass('expanded').find('.exp').html('+');
          //If next tier div doesn't exist, make it
          if($targetTierEl.length == 0) {
            $targetTierEl = $('<div />').addClass(targetTierClass).appendTo($tierCont).hide();
          }
          $targetTierEl.empty().stop().append($(this).siblings('ul').clone().attr('style','')).slideDown(navAnimSpeed, function(){
            $(this).css('height', ''); //Clear height
          });
          //Mark as expanded
          $(this).addClass('expanded').find('.exp').html('-');
        }
      }
      return false;
    });
    
  
  
    /// Mobile nav
    $(document).on('click', '.mobile-nav-toggle', function(e){
      e.preventDefault();
      $('body').toggleClass('reveal-mobile-nav');
      $('#main-nav div[class^="tier-"]:not(.tier-1)').remove(); //Remove any expanded rows
    });
    $('<a href="#" class="mobile-nav-toggle" id="mobile-nav-return"></a>').appendTo('body');

    
    
    //For all image fades
    var imageFadeInSpeed = 300;
    
    //Fade in images in product blocks
    $('.product-block .image-cont').each(function(){
        var $cont = $(this);
        $(this).find('img').imagesLoaded(function(){
            $cont.animate({opacity:1}, imageFadeInSpeed);
        });
    });
    
    //For fading in other images created by js
    function fadeInImageWhenReady($el, callback) {
        var $imgs = $el.is('img') ? $el : $el.find('img');
        $imgs.css('opacity', 0).imagesLoaded(function(){
            $imgs.animate({opacity: 1}, imageFadeInSpeed);
            if(callback) {
                callback();
            }
        });
    };
    
    //Enables any images inside a container
    function awakenImagesFromSlumber($cont) {
        $cont.find('img[data-src]').each(function(){
            $(this).replaceImageWithOneOfNewSrc($(this).data('src'));
        });
    };
    
    /// View modes for collection page
    function saveGridStreamChoice(type) {
      var cfg = { expires:1, path:'/', domain:window.location.hostname };
      $.cookie('gridstream', type, cfg);
    }
    function getGridStreamChoice() {
      return $.cookie('gridstream');
    }
  
    $(document).on('click', '#view-as-tiles', function(){
      if(!$(this).hasClass('active')) {
        $(this).addClass('active');
        $('#view-as-stream').removeClass('active');
        saveGridStreamChoice('grid');
        var $listing = $('.collection-listing-stream').removeClass('collection-listing-stream').addClass('collection-listing');
        saveCollectionPageData();
      }
      return false;
    });
    
    $(document).on('click', '#view-as-stream', function(){
      if(!$(this).hasClass('active')) {
        $(this).addClass('active');
        $('#view-as-tiles').removeClass('active');
        saveGridStreamChoice('stream');
        var $listing = $('.collection-listing').removeClass('collection-listing').addClass('collection-listing-stream');
        //All images enabled in this view (do before optionate, in case it switches images)
        awakenImagesFromSlumber($listing);
        //Close any open doodads & reset 'style=' styling to default
        $listing.find('.product-block').stop().each(function(){
          if($(this).hasClass('expanded')) {
            $(this).removeClass('expanded');
          }
          $(this).add($(this).find('.product-detail').stop()).removeAttr('style', '');
          $(this).find('select[name="id"]').trigger('optionate');
        });
      }
      return false;
    });
    //Have we chosen before?
    if($('#view-as-stream, #view-as-tiles').length > 0 && getGridStreamChoice() != null) {
      if(getGridStreamChoice() == 'stream') {
        $('#view-as-stream').trigger('click');
      } else {
        $('#view-as-tiles').trigger('click');
      }
    }
    
    
    /// Collection-rows - show dropdown product detail
    function contractDetail($blocks) {
        if($blocks.length == 0) {
            if(typeof callback != 'undefined') callback();
        } else {
            $blocks.removeClass('expanded');
            $blocks.find('.product-detail').stop().animate({ height:0 }, droppyDownAnimSpeed);
            $blocks.stop().each(function(){
                $(this).animate({ paddingBottom: $(this).data('origPaddingBottom') }, droppyDownAnimSpeed);
            });
        }
    }
    
    function animateBlockHeight($block, heightToGetTo) {
        //Double padding on bottom, to mimic padding underneath block also being underneath detail
        $block.stop().animate({ paddingBottom:heightToGetTo + $block.data('origPaddingBottom')*3 }, droppyDownAnimSpeed);
        $block.find('.product-detail').stop().animate({ height:heightToGetTo }, droppyDownAnimSpeed);
    }
    
    var droppyDownAnimSpeed = 500;
    $(document).on('click', '.collection-listing:not(.related-tag-handle) .product-block:not(.collection-block) .more-info', function(){
      var $block = $(this).closest('.product-block');
      var $slider = $(this).closest('.collection-slider');
      var pageWidth = $(window).width();
      //Only show dropdown if screen is large enough for it to be useful
      if(pageWidth > 480) {
        if($slider.length > 0) {
            //Inside a collection slider
            var $detailCont = $slider.closest('.collection-slider-row').find('.slider-collection-listing .product-detail');
            if($detailCont.length == 1) {
                if($block.hasClass('expanded')) {
                    //Just shrink it
                    $block.removeClass('expanded');
                    $detailCont.stop().animate({height: 0}, droppyDownAnimSpeed);
                } else {
                    //Unexpand others, reveal this
                    $('html:not(:animated),body:not(:animated)').animate({ scrollTop: $block.offset().top }, 500 );
                    var noneExpanded = $slider.find('.product-block.expanded').removeClass('expanded').length == 0;
                    if(noneExpanded) {
                        $detailCont.height(0);
                    }
                    $detailCont.html($block.children('.product-detail').html());
                    //Set close button data
                    $detailCont.find('.close-detail').data('block', $block);
                    awakenImagesFromSlumber($detailCont);
                    
                    //Event for when image size changes
                    var $inner = $detailCont.children('.inner');
                    $inner.unbind('changedsize').bind('changedsize', function(){
                        $detailCont.stop().animate({height: $detailCont.children('.inner').outerHeight()}, droppyDownAnimSpeed);
                    });
                    
                    //Init dropdowns
                    $detailCont.find('select[name="id"]').each(function(){
                        //Change dropdown ID so it remains unique
                        $(this).attr('id', $(this).attr('id') + '-slidedrop');
                    }).trigger('optionate');
                
                    //Adjust height
                    $inner.trigger('changedsize');
                    
                    fadeInImageWhenReady($inner, function(){
                        $inner.trigger('changedsize');
                    });
                    
                    $block.addClass('expanded');
                }
            }
        } else {
            //Normal collection page
            if($block.toggleClass('expanded').hasClass('expanded')) {
                //Expand this one
                
                //Contract neighbours
                contractDetail($block.siblings('.expanded'));
                
                $block.data('origPaddingBottom', parseInt($block.css('padding-bottom')));
                
                var $inner = $block.find('.product-detail > .inner');
                
                //Restore images
                awakenImagesFromSlumber($inner);
                
                //Init dropdowns (do after images init'd)
                $block.find('select[name="id"]').trigger('optionate');
                
                $inner.unbind('changedsize').bind('changedsize', function(){
                    //Check class in case slid-up before image loaded
                    if($block.hasClass('expanded')) {
                        animateBlockHeight($block, $inner.outerHeight());
                    }
                });
                
                //Slide down now
                $inner.trigger('changedsize');
                
                //Recalc height when images are loaded
                fadeInImageWhenReady($inner, function(){
                    $inner.trigger('changedsize');
                });
                
                
                //Scroll
                var offsetTop = typeof($block.data('offsetTop')) != 'undefined' ? $block.data('offsetTop') : $block.offset().top;
                $('html:not(:animated),body:not(:animated)').animate({ scrollTop: offsetTop }, 500 );
            } else {
                //Contract
                contractDetail($block);
            }
        }
        return false;
      }
    });
    
    //Close button event
    $(document).on('click', '.product-detail .close-detail', function(){
        $(this).data('block').find('.more-info:first').trigger('click');
        return false;
    });
    
    //You also need to know where to scroll to
    function saveCollectionPageData() {
      var $blocks = $('.collection-listing .product-block, .collection-listing-stream .product-block');
      var row = 0;
      var currTop = 0;
      //Heights are fixed. Check two in case somebody has expanded one...
      var blockHeight = Math.min($blocks.first().outerHeight(), $($blocks[1]).outerHeight());
      var blockPageOffset = $blocks.first().offset().top;
      $blocks.each(function(index){
        var currOffsetTop = $(this).offset().top;
        if(index == 0) {
          currTop = currOffsetTop;
        } else {
          if(currOffsetTop > currTop) {
            row++;
            currTop = currOffsetTop;
          }
        }
        $(this).data({
          offsetTop: blockPageOffset + row * blockHeight
        });
      });
    }
    if($('.collection-listing .product-block, .collection-listing-stream .product-block').length > 0) {
        $(window).on('debouncedresize', saveCollectionPageData);
        $('.collection-listing').imagesLoaded(saveCollectionPageData);
    }
    //End of code specific to collection-page slide-downs
    
    
    //For each product block in a listing
    $('.collection-listing .product-block, .collection-listing-stream .product-block').each(function(){
        //Add close button
        $('<a href="#" class="close-detail">X</a>').data('block', $(this)).appendTo($(this).find('.product-detail'));
    });
    
    
     /// Collection slider
     jQuery.fn.reverse = [].reverse; //Genius deserves credit: http://stackoverflow.com/questions/1394020/jquery-each-backwards
     
     //Evaluate visibility of left/right buttons
     $(window).on('debouncedresize checkcollectionpaging', function(){
       $('.collection-slider').each(function(){
         var $prods = $(this).find('.product-block');
         $(this).toggleClass('no-pages', $prods.first().offset().top == $prods.last().offset().top);
       });
     });
     
     $('.collection-slider').each(function(){
       var $nextPrevCont = $(this).find('.view-all, .has-paging'); //One or the other
       $(this).imagesLoaded(function(){
         $('<a class="prev" href="#">&larr;</a>').prependTo($nextPrevCont);
         $('<a class="next" href="#">&rarr;</a>').appendTo($nextPrevCont);
         $(window).trigger('checkcollectionpaging');
       });
     });
     $('.collection-slider').on('click', '.prev, .next', function(){
       //Find items visible in first row
       var showingNext = $(this).hasClass('next');
       var $items = $(this).closest('.collection-slider').find('.product-block');
       var $cont = $items.parent();
       var itemsToMove = [];
       var runningOffset = 0;
       if(showingNext) {
         //Next
         $items.each(function(index){
           if(index == 0) {
             runningOffset = $(this).offset().top;
             itemsToMove.push($(this));
           } else {
             if($(this).offset().top == runningOffset) {
               itemsToMove.push($(this));
             } else {
               return false; //Break loop
             }
           }
         });
       } else {
         //Previous
         var contWidth = $cont.width();
         $items.reverse().each(function(){
           runningOffset += $(this).outerWidth();
           if(runningOffset <= contWidth) {
             itemsToMove.push($(this));
           } else {
             return false; //Break loop
           }
         });
       }
       //Fade out
       $items.stop().animate({opacity: 0}, 500, function(){
         //Rearrange
         $.each(itemsToMove, function(index, item){
           if(showingNext) {
             $cont.append(item);
           } else {
             $cont.prepend(item);
           }
         });
         //Fade in
         $items.stop().animate({opacity: 1}, 500);
       });
       return false;
     });
    
    /// Show lightbox for any shrunken images inside certain areas
    var imageKeys = ['_pico.','_icon.','_thumb.','_small.','_compact.','_medium.','_large.','_grande.'];
    $('.lightboximages img').each(function(){
        if(!$(this).parent().is('a')) {
            var imgurl = $(this).attr('src');
            for(var i = 0; i < imageKeys.length; i++) {
                if(imgurl.indexOf(imageKeys[i]) > -1) {
                    imgurl = imgurl.replace(imageKeys[i], '.');
                    break;
                }
            }
            var $wrapa = $('<a>').attr('href', imgurl).addClass('fancyboximg');
            $(this).wrap($wrapa);
            $(this).parent().fancybox(fbOpts);
        }
    });
    
    /// Galleries (inc. product page)
    $(document).on('click select', '.gallery .thumbnails a', function(){
      var newMainImageURL = $(this).attr('href');
      var $mainImageArea = $(this).closest('.gallery').find('.main-image');
      var $mainATag = $mainImageArea.find('a');
      //If this is a change in main image...
      if($mainATag.data('href') != $(this).data('full-size-url')) {
        //Set active class
        $(this).addClass('active').siblings().removeClass('active');
        //Set main image data - so we know which one is selected
        $mainATag.data('href', $(this).data('full-size-url'));
        //Set link if on product page - for lightbox
        if($mainATag.hasClass('shows-lightbox')) {
          $mainATag.attr('href', $(this).data('full-size-url'));
        }
        $mainImageArea.find('img').fadeToAnotherImage(newMainImageURL, function($img){
          $img.closest('.inner').trigger('changedsize');
        });
      }
      return false;
    });
    
    /// Product variant selectors
    window.getVarOptToLink = function(prodId) {
        var optIdx = -1; //Invalid
        
        return optIdx;
    }
        
    $(document).on('optionate', 'select[name="id"]', function(){
        if(typeof $(this).data('optionated') == 'undefined') {
            $(this).data('optionated', true);
            var prodId = parseInt($(this).attr('id').split('-')[2]);
            for(var i=0; i<window.productJSON.length; i++) {
              	var prodJSON = window.productJSON[i];
                if(prodJSON.id == prodId) {
                    new Shopify.OptionSelectors($(this).attr('id'), { product: prodJSON, onVariantSelected: window.selectCallback });
                  	//Select first product in stock
                  	for(var j=0; j < prodJSON.variants.length; j++) {
                      var variant = prodJSON.variants[j];
                      if(variant.available) {
                        for(var k=0; k<variant.options.length; k++) {
                        	$('#product-select-'+prodJSON.id+'-option-'+k).val(variant.options[k]).trigger('change');
                        }
                        break;
                      }
                  	}
                    
                    //Enable linked options when there is more than one dropdown
                    if(window.productJSON[i].options.length > 1) {
                        Shopify.linkOptionSelectors(window.productJSON[i], $(this).closest('form'));
                    }
                    
                    break;
                }
            }
        }
    });
          
    //Default stream view - process dropdowns right away
    $('.collection-listing-stream select[name="id"]').trigger('optionate');
    
    
    //Link variant names to images
    $(document).on('click', '.gallery .thumbnails a', function(){
        var $form = $(this).closest('.product-detail').find('.detail form:first');
        var inputSuffix = 'option-' + getVarOptToLink($form.data('product-id'));
        $form.find('[id$="' + inputSuffix + '"]').has('option[value="' + $(this).attr('title') + '"]').val($(this).attr('title')).trigger('change');
    });
    
    
    /// Product page
    //Dropdowns
    $('#main-product-detail select[name="id"]').trigger('optionate');
    $('#main-product-detail').on('click', '.gallery .main-image a', function(){
        //Create list of imgs to box, so prev/next works
        var $thumbs = $(this).closest('.gallery').find('.thumbnails');
        if($thumbs.length > 0) {
            //Create dupes, rejig, launch matching link
            var $boxObjs = $thumbs.clone();
            $('body > .t-lightbox-thumbs').remove(); //Tidy
            $boxObjs.addClass('t-lightbox-thumbs').hide().appendTo('body').find('a').each(function(){
                $(this).attr('href', $(this).attr('data-full-size-url'));
            }).attr('rel', 'gallery').fancybox($.extend({}, fbOpts, { cyclic: true })).filter('[href="' + $(this).attr('href') + '"]').trigger('click');
        } else {
            //Create dupe of self and launch - thumbs may be hidden
            $(this).clone().fancybox($.extend({}, fbOpts, { cyclic: true })).trigger('click');
        }
        return false;
    });
    
    
    /// AJAX add to cart
    var cartPopupTemplate = [
        '<div id="cart-summary-overlay" class="cf">',
            '<div class="item">',
                '<div>'+"Just added:"+'</div>',
                '<div class="cols">',
                    '<div class="img"><img src="[[image_url]]" /></div>',
                    '<div class="info">',
                        '<div>[[title]]</div>',
                        '<div>[[price]]</div>',
                    '</div>',
                    '<div class="detail">',
                        '<div>'+"Qty:"+' [[quantity]]</div>',
                        '<div>'+"Total:"+' [[line_price]]</div>',
                    '</div>',
                '</div>',
            '</div>',
            '<div class="cart">',
                '<div>',
                    "Subtotal:"+' <span>[[subtotal]]</span>',
                '</div>',
                '<div class="cart-text">'+""+'&nbsp;</div>',
                '<div>',
                    '<a id="shop-more" class="button altcolour" href="#">'+"Keep Shopping"+'</a>',
                    '<a class="button" href="/cart">'+"Cart"+'</a>',
                '</div>',
            '</div>',
        '</div>'
        ].join('');
    var shopifyAjaxAddURL = '/cart/add.js';
    var shopifyAjaxCartURL = '/cart.js';
    var shopifyAjaxStorePageURL = '/search';
    
    $(document).on('submit', 'form[action="/cart/add"]:not(.noAJAX)', function(e) {
        var $form = $(this);
        //Disable add button
        $form.find('input[type="submit"]').attr('disabled', 'disabled').each(function(){
            $(this).data('previous-value', $(this).val());
        }).val('Adding...');
        
        //Hide any existing notifications
        $('#cart-summary-overlay #shop-more').triggerHandler('click');
        
        //Add to cart
        $.post(shopifyAjaxAddURL, $form.serialize(), function(itemData) {
            //Enable add button
            $form.find('input[type="submit"]').removeAttr('disabled').each(function(){
                $btn = $(this);
                //Set to 'DONE', alter button style, wait a few secs, revert to normal
                $btn.val("Thank you!").addClass('inverted');
                window.setTimeout(function(){
                    $btn.removeClass('inverted').val($btn.data('previous-value'));
                }, 3000);
            });
            
            //Get our data
            var addedDataJSON = $.parseJSON(itemData);
            
            //Get current cart state
            $.get(shopifyAjaxCartURL, function(cartData){
              var cartDataJSON = $.parseJSON(cartData);
              var addedQty = parseInt($form.find('input[name="quantity"]').val());
              var addedImage = addedDataJSON.image;
              
              
              //If variant image link, use selected main image
              var $actualImg = $form.closest('.product-detail').find('.gallery .main-image img');
              if($actualImg.length == 1) {
                addedImage = $actualImg.attr('src');
              }
              
              
              //Now we have all the data, build the shade
              var cartShadeHTML = cartPopupTemplate;
              cartShadeHTML = cartShadeHTML.replace('[[title]]', addedDataJSON.title);
              cartShadeHTML = cartShadeHTML.replace('[[quantity]]', addedQty);
              cartShadeHTML = cartShadeHTML.replace('[[image_url]]', addedImage);
              cartShadeHTML = cartShadeHTML.replace('[[price]]', Shopify.formatMoney(addedDataJSON.price));
              cartShadeHTML = cartShadeHTML.replace('[[line_price]]', Shopify.formatMoney(addedDataJSON.price * addedQty));
              cartShadeHTML = cartShadeHTML.replace('[[subtotal]]', Shopify.formatMoney(cartDataJSON.total_price));
              
              var $cartShade = $(cartShadeHTML);
              $cartShade.find('#shop-more').bind('click', function(){
                $cartShade.animate({top: - $cartShade.outerHeight()}, 500, function(){ $(this).remove(); });
                return false;
              });
              $cartShade.prependTo('body').css('top', - $cartShade.outerHeight()).animate({top: 0}, 500);
              
              
              //Update currency of amount
              Currency.convertAll(shopCurrency, jQuery('[name=currencies]').val());
              
            }, 'html');
            
            //Update header summary
            $.get(shopifyAjaxStorePageURL, function(data){
                var cartSummarySelector = '#pageheader .cart-summary .cart-count';
                var $newCartObj = $('<div>' + data + '</div>').find(cartSummarySelector);
                var $currCart = $(cartSummarySelector);
                $currCart.html($newCartObj.html());
            });
        }, 'text').error(function(data) {
            //Enable add button
            $form.find('input[type="submit"]').removeAttr('disabled').each(function(){
                $(this).val($(this).data('previous-value'));
            });
            
            //Not added, show message
            if(typeof(data) != 'undefined' && typeof(data.status) != 'undefined') {
                var jsonRes = $.parseJSON(data.responseText);
                window.showQuickPopup(jsonRes.description, $form.find('input[type="submit"]:first'));
            } else {
                //Some unknown error? Disable ajax and add the old-fashioned way.
                $form.addClass('noAJAX');
                $form.submit();
            }
        });
        return false;
    });
    $(window).scroll(function(){
        //Hide notifications on scroll
        $('#cart-summary-overlay #shop-more').triggerHandler('click');
    });
    
    
    //Show a quick generic text popup above an element
    window.showQuickPopup = function(message, $origin){
        var $popup = $('<div>').addClass('simple-popup');
        var offs = $origin.offset();
        $popup.html(message).css({ 'left':offs.left, 'top':offs.top }).hide();
        $('body').append($popup);
        $popup.css('margin-top', - $popup.outerHeight() - 10);
        $popup.fadeIn(200).delay(3500).fadeOut(400, function(){
            $(this).remove();
        });
    };
    
    //Start any slideshows on the page
    $('.flexslider').each(function(){
        $(this).flexslider({
            animation: 'slide',
            slideshow: $(this).hasClass('auto-play'),
            prevText: '&lsaquo;',
            nextText: '&rsaquo;',
            controlNav: false,
            slideshowSpeed: 7000 // Milliseconds to wait between slides
        });
    });
    
    //Quantity inputs - select when focus
    $(document).on('focusin click', 'input.select-on-focus', function(){
        $(this).select();
    }).on('mouseup', 'input.select-on-focus', function(e){
        e.preventDefault(); //Prevent mouseup killing select()
    });
    
    //Using JS in our forms?
    $('body').addClass('jsforms');
    $('#template').on('focusout keyup paste', 'input, textarea', function(){
        $('label[for="' + $(this).attr('id') + '"]').toggle($(this).val().length == 0);
    }).on('click', 'label', function(e){
        $('[id="' + $(this).attr('for') + '"]').focus();
    });
    
    //Shopify forms don't all have correct label attributes
    $('#template label').each(function(){
        var $sibinputs = $(this).siblings('input:not([type="submit"]), textarea');
        if($sibinputs.length == 1 && $sibinputs.attr('id').length > 0) {
            $(this).attr('for', $sibinputs.attr('id'));
        }
    });
    
    $(window).load(function(){
        //Show/hide labels
        $('#template input').trigger('keyup');
    });
    
    /// Main search input
    $('#pageheader .search-box input[type="text"]').bind('focusin focusout', function(e){
        $(this).closest('.search-box').toggleClass('focus', e.type == 'focusin');
    });
    
    /// Live search
    var preLoadLoadGif = $('<img src="//cdn.shopify.com/s/files/1/0238/8255/t/4/assets/ajax-load.gif?1149" />');
    var searchTimeoutThrottle = 500;
    var searchTimeoutID = -1;
    var currReqObj = null;
    var $resultsBox = $('<div class="results-box" />').appendTo('#pageheader .search-box');
    $('#pageheader .search-box input[type="text"]').bind('keyup change', function(){
        //Only search if search string longer than 2, and it has changed
        if($(this).val().length > 2 && $(this).val() != $(this).data('oldval')) {
            //Reset previous value
            $(this).data('oldval', $(this).val());
            
            // Kill outstanding ajax request
            if(currReqObj != null) currReqObj.abort();
            
            // Kill previous search
            clearTimeout(searchTimeoutID);
          
          	var $form = $(this).closest('form');
          
          	//Search term
          	var term = '*' + $form.find('input[name="q"]').val() + '*';
            
            //URL for full search page
            var linkURL = $form.attr('action') + '?type=product&q=' + term;
            
            //Show loading
            $resultsBox.html('<div class="load"></div>');
            
            // Do next search (in X milliseconds)
            searchTimeoutID = setTimeout(function(){
                //Ajax hit on search page
                currReqObj = $.ajax({
                  url: $form.attr('action'),
                  data: {
                    type: 'product',
                    view: 'json',
                    q: term,
                  },
                  dataType: "json",
                  success: function(data){
                        currReqObj = null;
                        if(data.results_total == 0) {
                            //No results
                            $resultsBox.html('<div class="note">'+ "No results found for your search :(" +'</div>');
                        } else {
                            //Numerous results
                            $resultsBox.empty();
                            $.each(data.results, function(index, item){
                                var $row = $('<a></a>').attr('href', item.url);
                              	$row.append('<div class="img"><img src="' + item.thumb + '" /></div>');
                                $row.append(item.title);
                                $resultsBox.append($row);
                            });
                            $resultsBox.append('<a href="' + linkURL + '" class="note">See all results (' + data.results_total + ')</a>');
                        }
                  }
                });
            }, searchTimeoutThrottle);
        } else if ($(this).val().length <= 2) {
            //Deleted text? Clear results
            $resultsBox.empty();
        }
    }).attr('autocomplete', 'off').data('oldval', '').bind('focusin', function(){
        //Focus, show results
        $resultsBox.fadeIn(200);
    }).bind('click', function(e){
        //Click, prevent body from receiving click event
        e.stopPropagation();
    });
    $('body').bind('click', function(){
        //Click anywhere on page, hide results
        $resultsBox.fadeOut(200);
    });
    
    /// Collection page
    //If a tag is active in a group, other tags within that group must be links to that tag only, within that group.
    $('.multi-tag-row .tags').each(function(){
      var $active = $(this).find('li.active');
      $(this).find('li:not(.active) a').each(function(){
        var href = $(this).attr('href');
        $active.each(function(){
          var tag = $(this).data('tag');
          href = href.replace('+'+tag, '').replace(tag+'+', ''); //Collection
          href = href.replace('%2B'+tag, '').replace(tag+'%2B', ''); //Vendor
        });
        $(this).attr('href', href);
      });
    });
     
    /// Text that scales down - scale it up/down based on column width
    function resizeScalingTextFromColumn() {
      $('.scaled-text').each(function(){
        var $base = $(this).closest('.scaled-text-base');
        var scale = $base.width() / 1080;
                             $(this).css('font-size', (scale * 100) + '%');
    });
    }
    resizeScalingTextFromColumn();
    $(window).on('debouncedresize', resizeScalingTextFromColumn);
      
    /// Showing dropdown signup
    $('#pageheader .util-area .signup-reveal').bind('click', function(){
      $(this).parent().toggleClass('show-drop');
      return false;
    });
               
    /// Collection sorting. Code courtesy of the reliably-awesome Caroline: https://gist.github.com/carolineschnapp/11352987
    var $sortBy = $('#sort-by');
    if($sortBy.length > 0) {
      Shopify.queryParams = {};
      if (location.search.length) {
        for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
          aKeyValue = aCouples[i].split('=');
          if (aKeyValue.length > 1) {
            Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
          }
        }
      }
      $sortBy.val($sortBy.data('initval')).bind('change', function() {
        Shopify.queryParams.sort_by = $(this).val();
        location.search = $.param(Shopify.queryParams);
      });
    }
});


// (c) Copyright 2011 Caroline Schnapp. All Rights Reserved. Contact: mllegeorgesand@gmail.com
// See http://wiki.shopify.com/Linked_Options

//Modded a little to make it easier to have more than one product purchaseable

var Shopify = Shopify || {};

Shopify.optionsMap = {};

Shopify.updateOptionsInSelector = function(selectorIndex, $context, optionsMapPrefix) {
    
  switch (selectorIndex) {
    case 0:
      var key = 'root';
      var selector = jQuery('.single-option-selector:eq(0)', $context);
      break;
    case 1:
      var key = jQuery('.single-option-selector:eq(0)', $context).val();
      var selector = jQuery('.single-option-selector:eq(1)', $context);
      break;
    case 2:
      var key = jQuery('.single-option-selector:eq(0)', $context).val();  
      key += ' / ' + jQuery('.single-option-selector:eq(1)', $context).val();
      var selector = jQuery('.single-option-selector:eq(2)', $context);
  }
  
  var initialValue = selector.val();
  selector.empty();    
  var availableOptions = Shopify.optionsMap[optionsMapPrefix][key];
  for (var i=0; i<availableOptions.length; i++) {
    var option = availableOptions[i];
    var newOption = jQuery('<option></option>').val(option).html(option);
    selector.append(newOption);
  }
  if (jQuery.inArray(initialValue, availableOptions) !== -1) {
    selector.val(initialValue);
  }
  selector.trigger('change');  
  
};

Shopify.linkOptionSelectors = function(product, $context) {
  // Building our mapping object.
  var optionsMapPrefix = ''+product.id;
  Shopify.optionsMap[optionsMapPrefix] = Shopify.optionsMap[optionsMapPrefix] || {};
  
  for (var i=0; i<product.variants.length; i++) {
    var variant = product.variants[i];
    if (variant.available) {
      // Gathering values for the 1st drop-down.
      Shopify.optionsMap[optionsMapPrefix]['root'] = Shopify.optionsMap[optionsMapPrefix]['root'] || [];
      Shopify.optionsMap[optionsMapPrefix]['root'].push(variant.option1);
      Shopify.optionsMap[optionsMapPrefix]['root'] = Shopify.uniq(Shopify.optionsMap[optionsMapPrefix]['root']);
      // Gathering values for the 2nd drop-down.
      if (product.options.length > 1) {
        var key = variant.option1;
        Shopify.optionsMap[optionsMapPrefix][key] = Shopify.optionsMap[optionsMapPrefix][key] || [];
        Shopify.optionsMap[optionsMapPrefix][key].push(variant.option2);
        Shopify.optionsMap[optionsMapPrefix][key] = Shopify.uniq(Shopify.optionsMap[optionsMapPrefix][key]);
      }
      // Gathering values for the 3rd drop-down.
      if (product.options.length === 3) {
        var key = variant.option1 + ' / ' + variant.option2;
        Shopify.optionsMap[optionsMapPrefix][key] = Shopify.optionsMap[optionsMapPrefix][key] || [];
        Shopify.optionsMap[optionsMapPrefix][key].push(variant.option3);
        Shopify.optionsMap[optionsMapPrefix][key] = Shopify.uniq(Shopify.optionsMap[optionsMapPrefix][key]);
      }
    }
  }
  // Update options right away.
  Shopify.updateOptionsInSelector(0, $context, optionsMapPrefix);
  if (product.options.length > 1) Shopify.updateOptionsInSelector(1, $context, optionsMapPrefix);
  if (product.options.length === 3) Shopify.updateOptionsInSelector(2, $context, optionsMapPrefix);
  // When there is an update in the first dropdown.
  jQuery(".single-option-selector:eq(0)", $context).unbind('change').change(function() {
    Shopify.updateOptionsInSelector(1, $context, optionsMapPrefix);
    if (product.options.length === 3) Shopify.updateOptionsInSelector(2, $context, optionsMapPrefix);
    return true;
  });
  // When there is an update in the second dropdown.
  jQuery(".single-option-selector:eq(1)", $context).unbind('change').change(function() {
    if (product.options.length === 3) Shopify.updateOptionsInSelector(2, $context, optionsMapPrefix);
    return true;
  });
  
};

