var HsoubFooter = HsoubFooter || (function(){
  var args = {
    host: "static.hsoubcdn.com",
    path: "/footer/",
    htmlFile: "footer.html",
    src: window.location.hostname,
    srcPass: true,
    wrapperAttrs: {
      id: 'HsoubFooterWrapper'
    },
    attrs: {
      id: 'HsoubFooterIframe',
      width: '100%',
      height: '248px',
      frameborder: '0',
      scrolling: 'no',
      allowtransparency: 'true',
      style: {
        width: '100%',
        overflow: 'hidden'
      }
    }
  };

  return {
    init: function(newArgs) {
      this._mergeObjectsRecursive(args, newArgs);
      args.hsoubFooterIframe =  document.createElement("iframe");
      args.hsoubFooterWrapper = document.createElement("div");
      args.hsoubFooterWrapper.appendChild(args.hsoubFooterIframe);
    },
    load: function() {
      this._setDataAttrs();
      this._addHsoubFooterToPage();
      this._bindEvents();
    },
    remove: function() {
      args.hsoubFooterWrapper.parentElement.removeChild(args.hsoubFooterWrapper);
    },
    reload: function() {
      this.remove();
      this.load();
    },
    _mergeObjectsRecursive: function(obj1, obj2){
      var self = this;

      for (var p in obj2) {
        try {
          // Property in destination object set; update its value.
          if ( obj2[p].constructor == Object ) {
            obj1[p] = self._mergeObjectsRecursive(obj1[p], obj2[p]);
          } else {
            obj1[p] = obj2[p];
          }
        } catch(e) {
          // Property in destination object not set; create it and set its value.
          obj1[p] = obj2[p];
        }
      }
      return obj1;
    },
    _convertObjectToCSS: function(obj) {
      var style = '';
      for (var k in obj) {
        style += (k + ':' + obj[k] + ';');
      }
      return style;
    },
    _iframeSrc: function() {
      if(args.srcPass) {
        return window.location.protocol + "//" + args.host + args.path + args.htmlFile + '#' + args.src;
      } else {
        return window.location.protocol + "//" + args.host + args.path + args.htmlFile;
      }
    },
    _bindEvents: function() {
      window.addEventListener('message', function(e){
        if (e.origin.indexOf(args.host) !== -1) {
          args.hsoubFooterIframe.setAttribute('height', parseFloat(e.data) + 'px');
        }
      }, false);
    },
    _setDataAttrs: function() {
      var self = this;

      for (var i in args.wrapperAttrs) {
        if(i == 'style') {
          args.hsoubFooterWrapper.setAttribute(i, self._convertObjectToCSS(args.wrapperAttrs[i]));
        } else {
          args.hsoubFooterWrapper.setAttribute(i, args.wrapperAttrs[i]);
        }
      }

      for (var i in args.attrs) {
        if(i == 'style') {
          args.hsoubFooterIframe.setAttribute(i, self._convertObjectToCSS(args.attrs[i]));
        } else {
          args.hsoubFooterIframe.setAttribute(i, args.attrs[i]);
        }
      }

      args.hsoubFooterIframe.setAttribute('src', self._iframeSrc());
    },
    _addHsoubFooterToPage: function() {
      document.body.appendChild(args.hsoubFooterWrapper);
    }
  };
}());

HsoubIframe = HsoubFooter;  // legacy fix
