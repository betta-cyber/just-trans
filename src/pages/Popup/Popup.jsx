import React from 'react';
import { useState } from 'react';
import { translate, renderTranslation } from '../../api/common';
import './Popup.css';
import MarkdownPreview from './output.jsx';

const Popup = () => {
  const [source, setSouce] = useState('')
  const [output, setOutput] = useState('')
  const translator = "youdao"

  const whenKeyPressed = (e) => {
    if (e.key === "Enter") {
      setOutput('<div class="loading">正在查询...</div>')
      translate(source, translator)
      .then((data) => {
        const html_data = renderTranslation(source, data);
        setOutput(html_data);
      })
      .catch((error) => {
        console.log(error);
      })
    } else {
      console.log(e)
    }
  };

  const changeText = (e) => {
    console.log(e.target.value)
    setSouce(e.target.value);
  };

  return (
    <div className="App">
      <div className="translator" ng-controller="TranslateCtrl">
        <textarea id="source" placeholder="输入文字翻译 ..." value={source}
        onChange={changeText} onKeyPress={whenKeyPressed} ></textarea>
        <MarkdownPreview id="result" markdown={output} />
      </div>

      <div className="footer">
        <a href="#" title="偏好设定"
           className="pull-right">
           <span className="icon icon-cog"></span>
        </a>

        <a href="#" title="点击切换翻译服务"
          className="btn-translator pull-right"></a>

        <label className="checkbox-inline" title="页面划词">
          <input type="checkbox" id="page_inspect" />
          <span className="icon icon-text"></span>
        </label>

        <label className="checkbox-inline" title="链接划词（Ctrl+Shift+L）">
          <input type="checkbox" id="link_inspect" />
          <span className="icon icon-link"></span>
        </label>
      </div>
    </div>
  );
};

export default Popup;
