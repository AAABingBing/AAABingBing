/**
 * 自定义 commit 脚本（由于各个包管理器对应配置项不同故仅兼容 npm）
 * @description `npm run cmt` => `git add . && git commit -m ":rocket: auto deploy" && git push`
 * @description `npm run cmt -m={msg}` => `git add . && git commit -m ":rocket: {msg}" && git push`
 */
const { execSync } = require('child_process')

const msg = process?.env?.npm_config_message || 'auto deploy'
const script = `git pull && git add . && git commit -m ":rocket: ${msg}" && git push`

execSync(script)
