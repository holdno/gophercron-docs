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
      // {
      //   text: "Api文档",
      //   items: [{ text: "鉴权", link: "/api/" }],
      // },
    ],

    socialLinks: [
      { icon: "discord", link: "https://discord.gg/HCz6nuS6PD" },
      { icon: "github", link: "https://github.com/holdno/gopherCron" },
    ],
  },
});
