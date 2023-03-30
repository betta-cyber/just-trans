import axios from 'axios'
import qs from 'qs'
const cheerio = require("cheerio");

  // _requestText(text, callback) {
    // const settings = {
      // url: 'http://mobile.youdao.com/translate',
      // type: 'POST',
      // data: {
        // inputtext: text,
        // type: 'AUTO'
      // },
      // headers: {
        // 'Accept-Language': 'zh-CN,zh;q=0.8',
        // 'Origin': 'http://mobile.youdao.com',
        // 'Refer': 'http://mobile.youdao.com/translate'
      // }
    // };

function _parseText(page) {
  const $ = cheerio.load(page, null, false);
  const means = $('#translateResult li').toArray();
  // console.log($(means[0]).html());
  const translation = means.map(item => $(item).text()).join('<br/><br/>');

  return { translation: translation };
}

async function youdao_api(source) {
  const url = "http://mobile.youdao.com/translate";
  const data = {
    inputtext: source,
    type: 'AUTO'
  };
  const config = {
    "headers": {
      'Accept-Language': 'zh-CN,zh;q=0.8',
      // 'Origin': 'http://mobile.youdao.com',
      'Refer': 'http://mobile.youdao.com/translate'
    }
  };

  const response = await axios.post(url, qs.stringify(data), config);
  const d = _parseText(response.data);
  return d
  // console.log("finish");
}


function translate(source, api) {
  if (api == "youdao") {
    return youdao_api(source);
  } else {
    return youdao_api(source);
  }
}

export default translate;
