import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const axios = require("axios"); // 用于发送 HTTP 请求
axios.defaults.baseURL = import.meta.env.VITE_API_DOMAIN;


export default function Api(){
  async function cleanSubMenu() {
    try {
      const response = await axios.get("/file/clean");
      if (response.data.code === 200) {
        return response.data.data;
      }
      return [];
    } catch (error) {
      console.error("Error fetching submenu:", error);
      return [];
    }
  }
  async function fetchSubMenu() {
    try {
      const response = await axios.get("/file/list");
      if (response.data.code === 200) {
        return response.data.data;
      }
      return []; // 假设返回的数据是一个数组
    } catch (error) {
      console.error("Error fetching submenu:", error);
      return [];
    }
  }

  async function openFile(file_path: string) {
    try {
      const response = await axios.post("/file/open", file_path);
      if (response.status === 200 && response.data.code === 200) {
        return response.data.data
      }
    } catch (error) {
      console.error("Error open file:", error);
    }
  }
  return {
    cleanSubMenu,
    fetchSubMenu,
    openFile
  }
}