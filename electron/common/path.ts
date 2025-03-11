import { createRequire } from "node:module";
import { fileURLToPath } from 'node:url'
const require = createRequire(import.meta.url);

const { app } = require('electron');
const path = require('path');
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export function getSourceFilePath (sourceName: string, targetPath?: string) {
  return app.isPackaged 
  ? path.join(process.resourcesPath, targetPath ? `resources/${targetPath}` : "resources", `.${sourceName}`)
  : path.join(__dirname, "../../", targetPath ?  `resources/${targetPath}` : "resources", `${sourceName}.json`)
}