import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: "../docs/",
  title: "GopherCron Docs",
  description: "golang 定时任务管理系统 gophercron 使用文档。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/guide" },
    ],

    sidebar: [
      {
        text: "使用文档",
        items: [
          { text: "项目简介", link: "/guide/index" },
          { text: "Cron表达式", link: "/guide/cron" },
          { text: "部署", link: "/guide/deployment" },
          { text: "服务注册与发现", link: "/guide/micro" },
          { text: "可视化界面", link: "/guide/frontend" },
          { text: "自定义告警", link: "/guide/alert" },
          { text: "Webhook", link: "/guide/webhook" },
        ],
      },
      {
        text: "使用教程",
        items: [
          { text: "创建任务", link: "/tutorial/create_task" },
          { text: "手动执行任务", link: "/tutorial/schedule_task" },
          { text: "任务编排(workflow)", link: "/tutorial/workflow" },
          { text: "多组织切换", link: "/tutorial/org" },
        ],
      },
      {
        text: "Release Note",
        items: [{ text: "中心服务", link: "/note/center_release_note" }],
      },
    ],

    socialLinks: [
      { icon: "discord", link: "https://discord.gg/HCz6nuS6PD" },
      { icon: "github", link: "https://github.com/holdno/gopherCron" },
    ],
  },
});
