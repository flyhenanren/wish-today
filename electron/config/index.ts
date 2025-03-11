import { createRequire } from "node:module";

import { getSourceFilePath } from "../common/path";
const require = createRequire(import.meta.url);
const fs = require("fs");

export default function useConfig() {
  function ensureConfig(configName: string, defaultConfig?: any) {
    const configPath = getSourceFilePath(configName);
    if (!fs.existsSync(configPath)) {
      fs.writeFileSync(
        configPath,
        JSON.stringify(defaultConfig, null, 2),
        "utf-8"
      );
    }
  }

  // 写入Style
  function writeStyleConfig(newConfig: StyleConfig) {
    const configPath = getSourceFilePath("style");
    fs.writeFileSync(configPath, JSON.stringify(newConfig, null, 2), "utf-8");
  }

  function readStyleConfig(): StyleConfig {
    const configPath = getSourceFilePath("style");
    ensureConfig("style", { theme: "light", language: "zh-CN" });
    return readFile(configPath);
  }

  // 写入Setting
  function writeSettingConfig(setting: Setting) {
    const configPath = getSourceFilePath("config");
    fs.writeFileSync(configPath, JSON.stringify(setting, null, 2), "utf-8");
  }

  function readSettingConfig(): Setting {
    const configPath = getSourceFilePath("config");
    ensureConfig("config", {});
    return readFile(configPath);
  }

  function readSetting(): {style: StyleConfig, setting: Setting} {
    return {
      style: readStyleConfig(),
      setting: readSettingConfig()
    }
  }

  
  function writeSetting(setting: {style: StyleConfig, setting: Setting}) {
    writeStyleConfig(setting.style)
    writeSettingConfig(setting.setting)
  }


  function readFile(configPath) {
    return JSON.parse(fs.readFileSync(configPath, "utf-8"));
  }

  return {
    readSetting,
    writeSetting,
  }
}

export interface Setting {
  preference: Preference
  fileConfig: FileConfig
  threadConfig: ThreadConfig
}


export interface Preference {
  storage: 'mem' | 'db' | 'file' // 存储模式
  exit: 'ask' | 'exist'  // 退出是否询问
}

export interface StyleConfig {
  theme: "light" | "dark";
}

export interface ThreadConfig {
  countSize: number; // 线程统计的默认数量
}

export interface FileConfig {
  fileName: "full" | "simple"; // 文件名称显示方式
}
