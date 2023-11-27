import{_ as t,o as s,c as e,Q as a}from"./chunks/framework.419948d5.js";const n="/webhook管理入口.jpg",o="/webhook管理界面.jpg",k=JSON.parse('{"title":"WebHook","description":"","frontmatter":{},"headers":[],"relativePath":"guide/webhook.md","filePath":"guide/webhook.md"}'),l={name:"guide/webhook.md"},p=a('<h1 id="webhook" tabindex="-1">WebHook <a class="header-anchor" href="#webhook" aria-label="Permalink to &quot;WebHook&quot;">​</a></h1><p><img src="'+n+'" alt="webhook管理入口"></p><p><img src="'+o+`" alt="webhook管理入口"></p><h2 id="钩子类型-type-task-result" tabindex="-1">钩子类型 (type:task-result) <a class="header-anchor" href="#钩子类型-type-task-result" aria-label="Permalink to &quot;钩子类型 (type:task-result)&quot;">​</a></h2><table><thead><tr><th>钩子类型</th><th>类型值</th><th>解释</th></tr></thead><tbody><tr><td>任务执行结束钩子</td><td>task-result</td><td>任务执行完成后调用，无论成功或失败都会调用</td></tr><tr><td>任务执行失败钩子</td><td>task-failure</td><td>任务执行失败后调用</td></tr></tbody></table><h3 id="请求方式" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式" aria-label="Permalink to &quot;请求方式&quot;">​</a></h3><p>POST</p><h3 id="header" tabindex="-1">Header <a class="header-anchor" href="#header" aria-label="Permalink to &quot;Header&quot;">​</a></h3><table><thead><tr><th>字段</th><th>类型</th><th>注释</th></tr></thead><tbody><tr><td>Authorization</td><td>string</td><td>项目 token(project token)</td></tr></tbody></table><h3 id="请求体" tabindex="-1">请求体 <a class="header-anchor" href="#请求体" aria-label="Permalink to &quot;请求体&quot;">​</a></h3><p>请求使用 <a href="https://github.com/cloudevents/sdk-go" target="_blank" rel="noreferrer">cloudevents</a> 进行封装</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">event </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> cloudevents.</span><span style="color:#79B8FF;">NewEvent</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">event.</span><span style="color:#79B8FF;">SetID</span><span style="color:#E1E4E8;">(utils.</span><span style="color:#79B8FF;">GetStrID</span><span style="color:#E1E4E8;">()) </span><span style="color:#6A737D;">// 随机id</span></span>
<span class="line"><span style="color:#E1E4E8;">event.</span><span style="color:#79B8FF;">SetSubject</span><span style="color:#E1E4E8;">({webhook</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">type}) </span><span style="color:#6A737D;">// webhook钩子类型</span></span>
<span class="line"><span style="color:#E1E4E8;">event.</span><span style="color:#79B8FF;">SetData</span><span style="color:#E1E4E8;">(cloudevents.ApplicationJSON, body)</span></span>
<span class="line"><span style="color:#E1E4E8;">event.</span><span style="color:#79B8FF;">SetSource</span><span style="color:#E1E4E8;">(fmt.</span><span style="color:#79B8FF;">Sprintf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;gophercron-center-</span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, {中心服务所在ip})) </span><span style="color:#6A737D;">// gopehrcron-center-{中心服务所在ip}</span></span>
<span class="line"><span style="color:#E1E4E8;">event.</span><span style="color:#79B8FF;">SetType</span><span style="color:#E1E4E8;">(eventType) </span><span style="color:#6A737D;">// succeeded / failure</span></span>
<span class="line"><span style="color:#E1E4E8;">event.</span><span style="color:#79B8FF;">SetTime</span><span style="color:#E1E4E8;">(time.</span><span style="color:#79B8FF;">Unix</span><span style="color:#E1E4E8;">(res.EndTime, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">event </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> cloudevents.</span><span style="color:#005CC5;">NewEvent</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">event.</span><span style="color:#005CC5;">SetID</span><span style="color:#24292E;">(utils.</span><span style="color:#005CC5;">GetStrID</span><span style="color:#24292E;">()) </span><span style="color:#6A737D;">// 随机id</span></span>
<span class="line"><span style="color:#24292E;">event.</span><span style="color:#005CC5;">SetSubject</span><span style="color:#24292E;">({webhook</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">type}) </span><span style="color:#6A737D;">// webhook钩子类型</span></span>
<span class="line"><span style="color:#24292E;">event.</span><span style="color:#005CC5;">SetData</span><span style="color:#24292E;">(cloudevents.ApplicationJSON, body)</span></span>
<span class="line"><span style="color:#24292E;">event.</span><span style="color:#005CC5;">SetSource</span><span style="color:#24292E;">(fmt.</span><span style="color:#005CC5;">Sprintf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;gophercron-center-</span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, {中心服务所在ip})) </span><span style="color:#6A737D;">// gopehrcron-center-{中心服务所在ip}</span></span>
<span class="line"><span style="color:#24292E;">event.</span><span style="color:#005CC5;">SetType</span><span style="color:#24292E;">(eventType) </span><span style="color:#6A737D;">// succeeded / failure</span></span>
<span class="line"><span style="color:#24292E;">event.</span><span style="color:#005CC5;">SetTime</span><span style="color:#24292E;">(time.</span><span style="color:#005CC5;">Unix</span><span style="color:#24292E;">(res.EndTime, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">))</span></span></code></pre></div><p>cloudevents 中 data 见下表</p><table><thead><tr><th>字段</th><th>类型</th><th>注释</th></tr></thead><tbody><tr><td>task_id</td><td>string</td><td>任务 id</td></tr><tr><td>project_id</td><td>int64</td><td>项目 id</td></tr><tr><td>command</td><td>string</td><td>任务命令</td></tr><tr><td>start_time</td><td>int64</td><td>任务开始时间 unix 时间戳</td></tr><tr><td>end_time</td><td>int64</td><td>任务结束时间 unix 时间戳</td></tr><tr><td>result</td><td>string</td><td>任务 stdout</td></tr><tr><td>error</td><td>string</td><td>失败信息(空则表示成功)</td></tr><tr><td>client_ip</td><td>string</td><td>边缘 agent ip</td></tr><tr><td>tmp_id</td><td>string</td><td>任务执行 id</td></tr><tr><td>operator</td><td>string</td><td>操作人，系统自动调用时为空</td></tr></tbody></table>`,14),r=[p];function c(d,i,y,E,h,u){return s(),e("div",null,r)}const _=t(l,[["render",c]]);export{k as __pageData,_ as default};
