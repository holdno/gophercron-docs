---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "GopherCron Docs"
  text: "golang 定时任务管理系统 gophercron 使用文档。"
  tagline: 分布式、高可用、定时任务管理系统
  actions:
    - theme: brand
      text: 浏览文档
      link: /guide/index
    # - theme: alt
    #   text: Discord
    #   link: https://discord.gg/HCz6nuS6PD
    - theme: alt
      text: Github
      link: https://github.com/holdno/gopherCron

features:
  - title: 分布式高可用
    details: agent分布式部署，保障同一时间，有且仅有一个agent执行对应任务
  - title: Workflow & Webhook
    details: 支持任务流编排，支持自定义webhook
  - title: 响应式界面
    details: 同时支持移动端与PC端，方便在任何场景调度任务
---
