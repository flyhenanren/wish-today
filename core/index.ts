import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const require = createRequire(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const { spawn } = require('child_process');

console.log("rootpaht:" + __dirname)
const resolveBuildResourcesPath = (pathData:string) => {
  return import.meta.env.MODE === "development" 
  ? path.resolve(__dirname,`../../resources/${pathData}`) 
  : path.resolve(__dirname,`../../../lib/${pathData}`
  )
}

// const rsNative = require(resolveBuildResourcesPath("../../resource/bin/rs-native.win32-x64-msvc.node"))


// export const rsNativeSum = (a:number,b:number) => {
//   return rsNative.sum(a,b)
// }

// export const rsNativeSubtraction = (a:number,b:number) => {
//   return rsNative.subtraction(a,b)
// }

export const startServer = () => {

  const thread_server = resolveBuildResourcesPath("/bin/web-server.exe");
    
  const cargoProcess = spawn(thread_server, [], {
      stdio: 'inherit'
  });

  cargoProcess.on('error', (err) => {
      console.error('Failed to start Cargo process:', err);
  });

  cargoProcess.on('exit', (code) => {
      console.log(`Cargo process exited with code ${code}`);
  });
}

