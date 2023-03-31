import { createApp } from 'vue'
import App from './components/App.vue'
import $ from 'jquery';


document.onmouseup = function () {
    var selectedText = window.getSelection().toString();
    if (selectedText) {
        console.log("selected text: " + selectedText);
        chrome.runtime.sendMessage({
          info: selectedText
        }, (res) => {
          console.log(res);
          // TextNotify(res, 1);
          $('body').append(res);
        })
    }
}



// var notifyList = [];
var tpls = {
  notify: '<div class="transit-notify transit-{1}">' +
          ' <a href="javascript:;" class="transit-notify-close">&times;</a>' +
          ' <div class="transit-notify-content">{2}</div>' +
          '</div>',
  list: '<div class="transit-notify-list">' +
        '  <div class="transit-list-inner"></div>' +
        '</div>',
  success: '<div class="transit-result transit-success">{1}</div>',
  warning: '<div class="transit-result transit-warning">{1}</div>',
  loading: '<div class="transit-result transit-success">' +
           '正在翻译 <strong>{1} ...</strong></div>',
};


var TextNotify = function(text, options) {
  this.text = text;
  this.options = options;

  this.render();
  // this.bind();
  // this.request();
};


function getNotifyList() {
  var $notifyList = $('.transit-notify-list');
  if ($notifyList.length <= 0) {
    $notifyList = $(tpls.list).appendTo('body');
  }
    return $notifyList;
}


// Render the notify onto the page.
TextNotify.prototype.render = function() {
  var loading = tpls.loading.assign(this.text);
  this.$el = $(tpls.notify.assign(this.options.mode, loading));

  if (this.options.mode == 'margin') {
    var $list = getNotifyList().find('.transit-list-inner');
    this.$el.appendTo($list);
  } else {
    this.$el.appendTo('body')
      .css({ position: 'absolute' })
      .css(this.options.position)
      .fadeIn();
  }
};

joinContent(App)
// injectJsInsert()

function joinContent (element) {
	const div = document.createElement('div')
	div.id = 'joinContentApp'
	document.body.appendChild(div)
	console.log(div)
	createApp(element).mount('#joinContentApp')
}

// function injectJsInsert () {
	// document.addEventListener('readystatechange', () => {
		// const injectPath = 'js/inject.js'
		// const script = document.createElement('script')

		// script.setAttribute('type', 'text/javascript')
		// script.src = chrome.extension.getURL(injectPath)
		// document.body.appendChild(script)
	// })
// }
