// import axios from 'axios'
import ky from 'ky'
import qs from 'qs'
const cheerio = require("cheerio");


export function renderTranslation(query, result) {
  let phonetic = '';
  let translation = '未找到释义';
  let className = 'transit-warning';

  if (result) {
    phonetic = result.phonetic;
    translation = result.translation;
    className = 'transit-success';
  }

  return `` +
    `<div class="transit-result ${className}">` +
    `  <h6>${query}</h6>` +
    `  <code>${phonetic || ''}</code>` +
    `  <pre>${translation}</pre>` +
    `</div>`;
}


function _parseWord(page) {
  const phonetic = "";
  const $ = cheerio.load(page, null, false);
  const result = $('#ec_contentWrp');
  if (result) {
    const phonetic_dom = result.find(".phonetic");
    if (phonetic_dom) {
      const phonetic = phonetic_dom.last().text();
    }

    const means = result.find("ul li").toArray();
    const translation = means.map(item => $(item).text()).join('\n\n');
    return { phonetic: phonetic, translation: translation };
  }
}


async function youdao_word_api(source) {
  const url = "http://mobile.youdao.com/dict?le=eng&q=" + source;

  const headers = {
    'Accept-Language': 'zh-CN,zh;q=0.8',
  };

  const response = await ky.get(url, {headers: headers}).text();
  return _parseWord(response);
}


function _parseText(page) {
  const $ = cheerio.load(page, null, false);
  const means = $('#translateResult li').toArray();
  // console.log($(means[0]).html());
  const translation = means.map(item => $(item).text()).join('<br/><br/>');

  return { translation: translation };
}


async function youdao_text_api(source) {
  const url = "http://mobile.youdao.com/translate";

  const formData = new FormData();
  formData.append('inputtext', source);
  formData.append('type', 'AUTO');
  // const data = {
    // inputtext: source,
    // type: 'AUTO'
  // };
  const headers = {
    'Accept-Language': 'zh-CN,zh;q=0.8',
    'Refer': 'http://mobile.youdao.com/translate'
  };

  const response = await ky.post(url, {body: formData, headers: headers}).text();
  return _parseText(response);
}


function _parseMean(index, meanNode) {
  console.log(meanNode)
  const def = meanNode.find('.def').text();
  let pos = meanNode.find('.pos').text();

  if (pos == '网络') {
    pos = index > 0 ? '<br/><strong>网络：</strong><br/>' : '';
  } else {
    pos = `${pos} `;
  }
  return `${pos}${def}`;
}

function _parseBingWord(page) {
  const html = cheerio.load(page, null, false);

  if (html('.qdef').length) {
    const response = {};
    const phonetic = html('.hd_prUS');
    if (phonetic.length) {
      response.phonetic = phonetic.text().replace('美 ', '');
    }
    const means = html('.hd_area + ul > li').toArray();
    response.translation = means.map(_parseMean).toArray().join('\n\n');
    return response;
  } else if (html('.p1-11').length) {
      return { translation: html('.p1-11').text()
    };
  } else {
    return null;
  }
}


async function bing_word_api(source) {
  const url = "https://cn.bing.com/dict/search";
  const headers = {
    'Accept-Language': 'zh-CN,zh;q=0.8',
  };
  const searchParams = {
    'q': source
  };

  const response = await ky.get(url, {searchParams: searchParams, headers: headers}).text();
  return _parseBingWord(response);
}


async function bing_text_api(source) {
  const url = "https://cn.bing.com/dict/search";
  const headers = {
    'Accept-Language': 'zh-CN,zh;q=0.8',
  };
  const data = {
    'q': source
  };

  const response = await ky.get(url, {data: data, headers: headers}).text();
  return _parseText(response);
}


export function translate(source, api) {
  if (api == "youdao") {
    if (/^[a-zA-Z]+$/.test(source)) {
      return youdao_word_api(source);
    } else {
      return youdao_text_api(source);
    }
  } else if(api=="bing") {
    if (/^[a-zA-Z]+$/.test(source)) {
      return bing_word_api(source);
    } else {
      return bing_text_api(source);
    }
  }
}
