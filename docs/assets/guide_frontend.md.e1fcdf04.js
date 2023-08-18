import{_ as a,v as e,b as o,R as s}from"./chunks/framework.caa0fbaf.js";const t="/项目管理入口.png",m=JSON.parse('{"title":"可视化界面","description":"","frontmatter":{},"headers":[],"relativePath":"guide/frontend.md","filePath":"guide/frontend.md"}'),n={name:"guide/frontend.md"},r=s(`<h1 id="可视化界面" tabindex="-1">可视化界面 <a class="header-anchor" href="#可视化界面" aria-label="Permalink to &quot;可视化界面&quot;">​</a></h1><h2 id="默认" tabindex="-1">默认 <a class="header-anchor" href="#默认" aria-label="Permalink to &quot;默认&quot;">​</a></h2><p>默认情况下，gophercron 项目目录中的 dist 文件已经包含了最新的前端界面，直接通过服务端地址/admin 即可访问</p><h2 id="定制" tabindex="-1">定制 <a class="header-anchor" href="#定制" aria-label="Permalink to &quot;定制&quot;">​</a></h2><p>官方配套的前端项目地址为 <a href="https://github.com/holdno/gopherCronFe" target="_blank" rel="noreferrer">gopherCronFE</a>，可自行 clone 项目，在根目录创建.env.production 配置文件</p><p>配置中心服务的 API 地址 <code>VITE_API_V1_BASE_URL</code> 与即时通知服务的 websocket 地址 <code>VITE_API_V1_WS_URL</code></p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">VITE_API_V1_BASE_URL</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">http://localhost:6306/api/v1</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_API_V1_WS_URL</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">ws://localhost:6306/api/v1/ws</span></span></code></pre></div><p>执行 <code>/scripts/build.sh</code> 完成前端项目的构建，并自行完成部署，即可实现前后端分离的部署方案</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>即时通知服务主要实现用户在界面中操作任务执行时，能够第一时间感知到任务完成的状态(基于 websocket 实现状态更新，而没有使用前端轮询的方式实现任务状态变更)<br> 未配置 <code>VITE_API_V1_WS_URL</code> 时，不影响整个定时任务系统的正常运转，仅影响用户在界面操作执行任务时，任务状态的变更可能需要通过刷新浏览器，或来回切换项目实现，低频的界面使用场景完全可以不实现即时通讯服务。</p><p>同时作者提供即时通讯服务的 SaaS 服务接入</p></div><h2 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h2><h3 id="项目管理" tabindex="-1">项目管理 <a class="header-anchor" href="#项目管理" aria-label="Permalink to &quot;项目管理&quot;">​</a></h3><p>项目管理员及系统超级管理员(admin)有用项目管理权限，通过项目名称后 ··· 选项进入管理菜单，在此可以查看项目 token 以及对项目成员的管理</p><p><img src="`+t+'" alt="项目管理入口"></p>',13),l=[r];function c(p,i,d,h,_,u){return e(),o("div",null,l)}const f=a(n,[["render",c]]);export{m as __pageData,f as default};