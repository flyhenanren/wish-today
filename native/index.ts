import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const require = createRequire(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const resolveBuildResourcesPath = (pathData:string) => {
  return import.meta.env.MODE === "development" ? path.resolve(
    __dirname,
    pathData
  ) : path.resolve(
    __dirname,
    `../${pathData}`
  )
}

const rsNative = require(resolveBuildResourcesPath("../../lib/rs/rs-native.win32-x64-msvc.node"))

export const rsNativeSum = (a:number,b:number) => {
  return rsNative.sum(a,b)
}

export const rsNativeSubtraction = (a:number,b:number) => {
  return rsNative.subtraction(a,b)
}
