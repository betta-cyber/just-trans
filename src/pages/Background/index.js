import { translate } from '../../api/common';

console.log('This is the background page.');
console.log('Put the background scripts here.');



// async function translate_data(source) {
  // const url = "http://mobile.youdao.com/translate";
  // let formData = new FormData();
  // formData.append('inputtext', source);
  // formData.append('type', 'AUTO');

  // const options = {
    // method: "POST",
    // headers: {
      // 'Accept-Language': 'zh-CN,zh;q=0.8',
      // 'Refer': 'http://mobile.youdao.com/translate'
    // },
    // body: formData
  // };

  // const resp = await fetch(url, options);
  // // .then(response => response.text())

  // const d = await resp.text();
  // const p = _parseText(d);
  // return renderTranslation(source, p);
// }

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  // translate(req.info, "youdao")
  translate(req.info, "bing")
  .then((data) => {
    sendResponse(data['translation']);
  })
  .catch((e) => {
    console.log(e);
  })

  // setTimeout(function() {
    // translate_data(req.info).then((data) => {
      // sendResponse(data);
    // })
  // }, 1);

  return true;
})
