# Cron 表达式

gophercron 使用 [cronexpr](https://github.com/gorhill/cronexpr) 项目作为 cron 表达式的解析器

## cronexpr 秒级 cron 表达式介绍(引用)

    * * * * * * *
    Field name     Mandatory?   Allowed values    Allowed special characters
    ----------     ----------   --------------    --------------------------
    Seconds        No           0-59              * / , -
    Minutes        Yes          0-59              * / , -
    Hours          Yes          0-23              * / , -
    Day of month   Yes          1-31              * / , - L W
    Month          Yes          1-12 or JAN-DEC   * / , -
    Day of week    Yes          0-6 or SUN-SAT    * / , - L #
    Year           No           1970–2099         * / , -
