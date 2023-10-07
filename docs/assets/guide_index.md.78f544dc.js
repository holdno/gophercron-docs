import{_ as e,o as a,c as r,Q as i}from"./chunks/framework.19f61efe.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index.md","filePath":"guide/index.md"}'),l={name:"guide/index.md"},o=i('<p align="center"><img width="200" src="http://img.holdno.com/github/holdno/gopher_cron/gopherCronLogo.png" alt="firetower logo"></p><h1 align="center">GopherCron</h1><p>开箱即用的可视化分布式 crontab system</p><h3 id="report" tabindex="-1">Report <a class="header-anchor" href="#report" aria-label="Permalink to &quot;Report&quot;">​</a></h3><p><a href="https://discord.gg/HCz6nuS6PD" target="_blank" rel="noreferrer">Discord - gophercron</a></p><h3 id="discussions-now" tabindex="-1">Discussions Now <a class="header-anchor" href="#discussions-now" aria-label="Permalink to &quot;Discussions Now&quot;">​</a></h3><p><a href="https://github.com/holdno/gopherCron/discussions/21" target="_blank" rel="noreferrer">关于“为系统增加内置环境变量”的讨论</a></p><h3 id="依赖" tabindex="-1">依赖 <a class="header-anchor" href="#依赖" aria-label="Permalink to &quot;依赖&quot;">​</a></h3><ul><li>Etcd # 服务注册与发现</li><li>Mysql # 任务日志存储</li></ul><h3 id="引用" tabindex="-1">引用 <a class="header-anchor" href="#引用" aria-label="Permalink to &quot;引用&quot;">​</a></h3><ul><li><a href="https://github.com/gin-gonic/gin" target="_blank" rel="noreferrer">Gin</a> 提供 webapi</li><li><a href="https://github.com/holdno/gopherCronFe" target="_blank" rel="noreferrer">gopherCronFe</a> 提供可视化管理界面(已将构建后的文件内置于 dist/view 目录下)</li><li><a href="https://github.com/gorhill/cronexpr" target="_blank" rel="noreferrer">cronexpr</a> 提供 cron 表达式解析器</li><li>🍉<a href="https://github.com/spacegrower/watermelon" target="_blank" rel="noreferrer">水瓜</a> 提供服务注册发现能力</li></ul><h3 id="项目优势" tabindex="-1">项目优势 <a class="header-anchor" href="#项目优势" aria-label="Permalink to &quot;项目优势&quot;">​</a></h3><ul><li>分布式定时任务管理</li><li>任务编排</li><li>响应式前端，移动端也可轻松管理任务</li></ul><h3 id="实现功能" tabindex="-1">实现功能 <a class="header-anchor" href="#实现功能" aria-label="Permalink to &quot;实现功能&quot;">​</a></h3><ul><li>秒级定时任务</li><li>任务日志查看</li><li>随时结束任务进程</li><li>分布式扩展</li><li>健康节点检测 (分项目显示对应的健康节点 IP 及节点数)</li><li>workflow 任务编排</li></ul><h3 id="项目构成" tabindex="-1">项目构成 <a class="header-anchor" href="#项目构成" aria-label="Permalink to &quot;项目构成&quot;">​</a></h3><h4 id="中心服务" tabindex="-1">中心服务 <a class="header-anchor" href="#中心服务" aria-label="Permalink to &quot;中心服务&quot;">​</a></h4><ul><li>提供定时任务 api 能力</li><li>提供任务管理服务端接口</li><li>提供 workflow 编排组织能力</li><li>提供边缘任务状态与结果上报服务</li><li>提供边缘服务注册与发现能力</li><li>为边缘提供分布式锁服务</li></ul><h4 id="边缘-agent" tabindex="-1">边缘 agent <a class="header-anchor" href="#边缘-agent" aria-label="Permalink to &quot;边缘 agent&quot;">​</a></h4><ul><li>实际执行定时任务的服务</li><li>接收中心命令执行临时任务</li><li>自旋实现任务的定时执行，多副本任务通过分布式锁解决执行冲突问题</li></ul>',20),t=[o];function n(h,s,c,d,u,p){return a(),r("div",null,t)}const b=e(l,[["render",n]]);export{_ as __pageData,b as default};