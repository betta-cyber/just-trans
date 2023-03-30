<template>
  <div class="board">
    <div class="borad-header">
      <strong class="title">
        <img src="assets/icon48.png" alt="Logo" /> 偏好设定
      </strong>
    </div>

    <div class="board-content">
      <form class="form-horizontal" role="form">

        <div class="form-group">
          <label class="control-label">翻译服务</label>
          <div class="controls">
            <label class="radio-inline"><input type="radio" name="translator" ng-model="options.translator" value="youdao" /> 有道翻译</label>
            <label class="radio-inline"><input type="radio" name="translator" ng-model="options.translator" value="baidu" /> 百度翻译</label>
            <label class="radio-inline"><input type="radio" name="translator" ng-model="options.translator" value="bing" /> 必应翻译</label>
          </div>
        </div>

        <div class="form-group">
          <label class="control-label">启用页面划词</label>
          <div class="controls">
            <label class="radio-inline"><input type="radio" name="pageInspect" ng-model="options.pageInspect" ng-value="true" />启用</label>
            <label class="radio-inline"><input type="radio" name="pageInspect" ng-model="options.pageInspect" ng-value="false" /> 停用</label>
          </div>
        </div>

        <div class="form-group">
          <label class="control-label">启用链接划词</label>
          <div class="controls">
            <label class="radio-inline"><input type="radio" name="linkInspect" ng-model="options.linkInspect" ng-value="true" />启用</label>
            <label class="radio-inline"><input type="radio" name="linkInspect" ng-model="options.linkInspect" ng-value="false" /> 停用</label>

            <div class="hint">
              使用快捷键
              <code>Ctrl + Shift + L</code>
              启用/禁用链接划词模式。
              划词结束或者点击页面任意一处，将自动恢复为禁用状态。
            </div>
          </div>
        </div>

        <div class="form-group notify-mode">
          <label class="control-label">划词翻译结果显示位置</label>
          <div class="controls">
            <label class="radio-inline">
              <input type="radio" name="notifyMode" ng-model="options.notifyMode" value="margin" /> 在窗口边缘显示
            </label>
            <label class="radio-inline">
              <input type="radio" name="notifyMode" ng-model="options.notifyMode" value="in-place" /> 在选择的文本附近显示
            </label>
          </div>
        </div>

        <div class="form-group">
          <label class="control-label">划词翻译结果显示时长</label>
          <div class="controls" style="padding-top: 7px;">
            <input type="range" min="3" max="10" step="1" ng-model="options.notifyTimeout" data-highlight="true" />
            <span class="label label-info">1 秒</span>
          </div>
        </div>

      </form>
    </div><!-- .board-content -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

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

.board {
  width: 400px;
  margin: 0;
  padding: 7px;
  font-size: 14px;
  line-height: 20px;
  color: #555;
}

.pull-right {
  float: right; }

#source {
  -webkit-appearance: textfield;
  border: 1px inset #e0e0e0;
  background-color: #fefbf5;
  resize: none;
  font-size: 14px;
  line-height: 20px;
  color: #555;
  width: 100%;
  height: 20px;
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

footer {
  height: 16px;
  margin-top: 7px; }

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
