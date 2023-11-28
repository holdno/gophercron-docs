import{_ as e,o as r,c as o,Q as n}from"./chunks/framework.19f61efe.js";const f=JSON.parse('{"title":"Cron 表达式","description":"","frontmatter":{},"headers":[],"relativePath":"guide/cron.md","filePath":"guide/cron.md"}'),a={name:"guide/cron.md"},t=n(`<h1 id="cron-表达式" tabindex="-1">Cron 表达式 <a class="header-anchor" href="#cron-表达式" aria-label="Permalink to &quot;Cron 表达式&quot;">​</a></h1><p>gophercron 使用 <a href="https://github.com/gorhill/cronexpr" target="_blank" rel="noreferrer">cronexpr</a> 项目作为 cron 表达式的解析器</p><h2 id="cronexpr-秒级-cron-表达式介绍-引用" tabindex="-1">cronexpr 秒级 cron 表达式介绍(引用) <a class="header-anchor" href="#cronexpr-秒级-cron-表达式介绍-引用" aria-label="Permalink to &quot;cronexpr 秒级 cron 表达式介绍(引用)&quot;">​</a></h2><pre><code>* * * * * * *
Field name     Mandatory?   Allowed values    Allowed special characters
----------     ----------   --------------    --------------------------
Seconds        No           0-59              * / , -
Minutes        Yes          0-59              * / , -
Hours          Yes          0-23              * / , -
Day of month   Yes          1-31              * / , - L W
Month          Yes          1-12 or JAN-DEC   * / , -
Day of week    Yes          0-6 or SUN-SAT    * / , - L #
Year           No           1970–2099         * / , -
</code></pre>`,4),c=[t];function s(d,i,l,_,h,p){return r(),o("div",null,c)}const m=e(a,[["render",s]]);export{f as __pageData,m as default};
