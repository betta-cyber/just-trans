<template>
  <div class="container">
    <div class="translator" ng-controller="TranslateCtrl">
      <textarea id="source" placeholder="输入文字翻译 ..." v-model="source" @keyup.enter="translate"></textarea>
      <div id="result" v-html="output"></div>
    </div>

     <div class="footer">
      <a href="#" title="偏好设定"
         class="pull-right">
         <span class="icon icon-cog"></span>
      </a>

      <a href="#" title="点击切换翻译服务"
        class="btn-translator pull-right" v-bind:class="[translator]"></a>

      <label class="checkbox-inline" title="页面划词">
        <input type="checkbox" id="page_inspect" v-model="page_inspect" />
        <label for="page_inspect">{{ checked }}</label>
        <span class="icon icon-text"></span>
      </label>

      <label class="checkbox-inline" title="链接划词（Ctrl+Shift+L）">
        <input type="checkbox" id="link_inspect" v-model="link_inspect"/>
        <label for="link_inspect">{{ checked }}</label>
        <span class="icon icon-link"></span>
      </label>
    </div>
  </div>
</template>

<script>
import translate from "@/utils/api"

export default {
    data() {
        return {
            source: '',
            output: '',
            page_inspect: false,
            link_inspect: true,
            translator: 'youdao'
        }
    },
    methods: {
        async translate() {
            // console.log(this.source);
            this.output = '<div class="loading">正在查询...</div>';
            let res = await translate(this.source, this.translator);
            this.output = res['translation'];
        }
    },
}
</script>

<style lang="less" scoped>

html {
  background-color: aliceblue;
}

.container {
  width: 200px;
  margin: 0;
  padding: 7px;
  font-size: 14px;
  line-height: 20px;
  background-color: aliceblue;
}


.transit-result.transit-success {
  background: #336721;
  padding: 3px 6px;
  margin: 0;
  color: #EDF8ED; }

.transit-result.transit-warning {
  background: #FFF8DC;
  padding: 3px 6px;
  margin: 0;
  color: #888888; }
.transit-result h6, .transit-result code, .transit-result pre {
  border: none !important;
  background-color: transparent !important;
  color: inherit !important;
  padding: 0;
  margin: 0;
  text-transform: none;
  font-size: 14px;
  line-height: 20px;
  white-space: normal; }
.transit-result h6 {
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: 600; }

.icon {
  display: inline-block;
  background-repeat: no-repeat;
  background-image: url('~@/assets/sprite.svg');
  opacity: 0.6; }

.icon-cog {
  width: 16px;
  height: 16px;
  background-position: 0 0; }

.icon-text {
  width: 15px;
  height: 16px;
  background-position: -32px 0; }

.icon-link {
  width: 15px;
  height: 16px;
  background-position: -64px 0; }

.pull-right {
  float: right;
}

#source {
  -webkit-appearance: textfield;
  border: 1px inset #e0e0e0;
  background-color: #fefbf5;
  resize: none;
  font-size: 14px;
  line-height: 20px;
  color: #555;
  width: 100%;
  height: 40px;
  max-height: 80px;
  margin: 0 0 2px 0;
  padding: 2px 4px;
  font-weight: bold;
  box-sizing: border-box; }
  #source:active, #source:focus {
    outline: -webkit-focus-ring-color auto 3px; }

.btn-translator {
  width: 29px;
  height: 16px;
  margin-right: 69px;
  background-size: 16px 16px;
  background-repeat: no-repeat;
  background-position: center center; }
  .btn-translator.youdao {
    background-size: 29px 16px;
    background-image: url("~@/assets/translators/youdao.png"); }
  .btn-translator.baidu {
    background-image: url("~@/assets/translators/baidu.png"); }
  .btn-translator.bing {
    background-image: url("~@/assets/translators/bing.png"); }

.transit-result {
  max-height: 200px;
  margin-top: 7px;
  padding: 3px 6px;
  overflow-y: auto;
  white-space: pre-line; }
  .transit-result.transit-success {
    background: #efffef;
    color: #2B3F29; }
  .transit-result.transit-warning {
    background: #FFF8DC;
    color: #888888; }
  .transit-result h6 {
    display: none; }

.footer {
  height: 16px;
  margin-top: 7px;
}

.checkbox-inline {
  display: inline-block;
  cursor: pointer; }
  .checkbox-inline input {
    display: none; }
  .checkbox-inline input:not(:checked) + .icon {
    opacity: 0.3; }

.translator-logo {
  height: 16px; }

</style>
