import hotReload from '@/utils/hotReload'

const FormData = require('form-data');
const cheerio = require("cheerio");
// import translate from "@/utils/api"
import renderTranslation from "@/utils/common"

hotReload()

console.log('hello world background')

function _parseText(page) {
  const html = cheerio.load(page, null, false);
  const means = html('#translateResult li').toArray();
  // console.log(html(means[0]).html());
  const translation = means.map(item => html(item).text()).join('<br/><br/>');

  return { translation: translation };
}

async function translate_data(source) {
  const url = "http://mobile.youdao.com/translate";
  let formData = new FormData();
  formData.append('inputtext', source);
  formData.append('type', 'AUTO');

  const options = {
    method: "POST",
    headers: {
      'Accept-Language': 'zh-CN,zh;q=0.8',
      'Refer': 'http://mobile.youdao.com/translate'
    },
    body: formData
  };

  const resp = await fetch(url, options);
  // .then(response => response.text())

  const d = await resp.text();
  const p = _parseText(d);
  return renderTranslation(source, p);
}


chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  console.log('revice: ', req.info);
  setTimeout(function() {
    translate_data(req.info).then((data) => {
      sendResponse(data);
    })
  }, 1);

  return true;
})
