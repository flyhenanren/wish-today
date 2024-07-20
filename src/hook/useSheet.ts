import { Sheet } from "../types"
import { CommonSheet } from "../model"
import {reactive} from 'vue'
import cpu from "../components/cpu"

export default function() {

    const sheets = reactive<Sheet[]>([])
    const cpuSheet = new CommonSheet('cpu','CPU')
    const threadSheet = new CommonSheet('thread','线程')
    const summarySheet = new CommonSheet('summary','总结')
    const memorySheet = new CommonSheet('memory','内存')

    sheets.push(cpuSheet)
    sheets.push(threadSheet)
    sheets.push(memorySheet)
    sheets.push(summarySheet)


    return {
        sheets
    }
}