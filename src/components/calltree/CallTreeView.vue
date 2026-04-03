<script setup lang="ts">
import { ref, watch } from 'vue'
import { useMessage } from 'naive-ui'
import { useCallTree, useSearch, useDump, CallTreeNode, MethodMatch } from '../../api/api'

const message = useMessage()
const calltreeApi = useCallTree()
const searchApi = useSearch()
const dumpApi = useDump()

// 状态
const workspaces = ref<{ id: string; name: string }[]>([])
const selectedWorkspace = ref<string>('')
const files = ref<{ file_id: string; file_name: string }[]>([])
const selectedFile = ref<string>('')
const loading = ref(false)
const building = ref(false)
const searchLoading = ref(false)

// CallTree数据
const rootNodes = ref<CallTreeNode[]>([])
const expandedKeys = ref<string[]>([])
const childrenCache = ref<Map<string, CallTreeNode[]>>(new Map())

// 搜索
const searchQuery = ref('')
const searchResults = ref<MethodMatch[]>([])
const showSearch = ref(false)

// 分页
const currentPage = ref(1)
const pageSize = ref(50)
const totalNodes = ref(0)

// 加载工作空间
async function loadWorkspaces() {
  try {
    const resp = await dumpApi.list('')
    if (resp.code === 200 && resp.data) {
      workspaces.value = resp.data.map((f: any) => ({
        id: f.file_id || f.work_space_id,
        name: f.file_name || f.work_space_id
      }))
    }
  } catch (e) {
    console.error('加载工作空间失败', e)
  }
}

// 加载文件列表
async function loadFiles(workspaceId: string) {
  if (!workspaceId) return
  try {
    const resp = await dumpApi.list(workspaceId)
    if (resp.code === 200 && resp.data) {
      files.value = resp.data.map((f: any) => ({
        file_id: f.file_id,
        file_name: f.file_name
      }))
    }
  } catch (e) {
    console.error('加载文件失败', e)
  }
}

// 构建CallTree
async function buildCallTree() {
  if (!selectedFile.value) {
    message.warning('请先选择文件')
    return
  }
  building.value = true
  try {
    const resp = await calltreeApi.buildCallTree(selectedFile.value)
    if (resp.code === 200) {
      message.success('CallTree构建完成')
      await loadRoots()
    } else {
      message.error(resp.message || '构建失败')
    }
  } catch (e) {
    message.error('构建失败')
  } finally {
    building.value = false
  }
}

// 加载根节点
async function loadRoots() {
  if (!selectedFile.value) return
  loading.value = true
  try {
    const resp = await calltreeApi.getRoots(selectedFile.value, currentPage.value, pageSize.value)
    if (resp.code === 200 && resp.data) {
      rootNodes.value = resp.data.nodes
      totalNodes.value = resp.data.total
    }
  } catch (e) {
    message.error('加载根节点失败')
  } finally {
    loading.value = false
  }
}

// 加载子节点
async function loadChildren(node: CallTreeNode) {
  if (node.is_leaf) return

  const key = `${node.method_name}_${node.depth}`
  if (childrenCache.value.has(key)) return

  try {
    const resp = await calltreeApi.getChildren(node.method_name, selectedFile.value, 1, 50)
    if (resp.code === 200 && resp.data) {
      childrenCache.value.set(key, resp.data.nodes)
    }
  } catch (e) {
    console.error('加载子节点失败', e)
  }
}

// 获取子节点
function getChildren(node: CallTreeNode): CallTreeNode[] {
  const key = `${node.method_name}_${node.depth}`
  return childrenCache.value.get(key) || []
}

// 搜索方法
async function searchMethods() {
  if (!searchQuery.value.trim()) {
    message.warning('请输入搜索内容')
    return
  }
  searchLoading.value = true
  try {
    const resp = await searchApi.searchMethods({
      query: searchQuery.value,
      fuzzy: true,
      max_results: 50
    })
    if (resp.code === 200 && resp.data) {
      searchResults.value = resp.data
      showSearch.value = true
    }
  } catch (e) {
    message.error('搜索失败')
  } finally {
    searchLoading.value = false
  }
}

// 切换展开
function toggleExpand(methodName: string) {
  const index = expandedKeys.value.indexOf(methodName)
  if (index >= 0) {
    expandedKeys.value.splice(index, 1)
  } else {
    expandedKeys.value.push(methodName)
  }
}

// 渲染树节点
function renderLabel(node: CallTreeNode) {
  return `${node.method_name} (${node.samples})`
}

// 监听文件选择变化
watch(selectedFile, () => {
  if (selectedFile.value) {
    currentPage.value = 1
    childrenCache.value.clear()
    expandedKeys.value = []
    loadRoots()
  }
})

watch(selectedWorkspace, () => {
  if (selectedWorkspace.value) {
    loadFiles(selectedWorkspace.value)
  }
})

// 初始化
loadWorkspaces()
</script>

<template>
  <div class="calltree-view">
    <n-card title="CallTree 调用树分析">
      <n-space vertical>
        <!-- 工具栏 -->
        <n-space>
          <n-button type="primary" :loading="building" @click="buildCallTree">
            构建CallTree
          </n-button>
          <n-input
            v-model:value="searchQuery"
            placeholder="搜索方法名..."
            style="width: 300px"
            @keyup.enter="searchMethods"
          />
          <n-button @click="searchMethods" :loading="searchLoading">搜索</n-button>
          <n-button @click="showSearch = !showSearch" type="info" v-if="searchResults.length > 0">
            显示/隐藏搜索结果
          </n-button>
        </n-space>

        <!-- 搜索结果 -->
        <n-card v-if="showSearch && searchResults.length > 0" title="搜索结果">
          <n-data-table
            :columns="[
              { title: '方法名', key: 'method_name', ellipsis: { tooltip: true } },
              { title: '采样次数', key: 'total_samples', width: 100 },
              { title: '文件数', key: 'file_count', width: 80 }
            ]"
            :data="searchResults"
            :pagination="false"
            size="small"
          />
        </n-card>

        <!-- CallTree 根节点列表 -->
        <n-card title="根节点" v-if="selectedFile">
          <n-space vertical>
            <n-data-table
              :columns="[
                { title: '方法名', key: 'method_name', ellipsis: { tooltip: true } },
                { title: '深度', key: 'depth', width: 60 },
                { title: '采样', key: 'samples', width: 80 },
                { title: '子节点数', key: 'child_count', width: 80 },
                { title: '操作', key: 'action', width: 100 }
              ]"
              :data="rootNodes"
              :loading="loading"
              :pagination="{
                page: currentPage,
                pageSize: pageSize,
                total: totalNodes,
                onUpdate: (p: number, ps: number) => {
                  currentPage = p
                  pageSize = ps
                  loadRoots()
                }
              }"
              size="small"
            >
              <template #method_name="{ row }">
                <span :style="{ paddingLeft: row.depth * 20 + 'px' }">
                  <n-button text @click="() => { if (!row.is_leaf) toggleExpand(row.method_name) }">
                    <template v-if="!row.is_leaf">
                      <span v-if="expandedKeys.includes(row.method_name)">▼</span>
                      <span v-else>▶</span>
                    </template>
                    {{ row.method_name }}
                  </n-button>
                </span>
              </template>
              <template #action="{ row }">
                <n-button
                  size="small"
                  @click="loadChildren(row)"
                  v-if="!row.is_leaf && !childrenCache.has(`${row.method_name}_${row.depth}`)"
                >
                  加载子节点
                </n-button>
              </template>
            </n-data-table>
          </n-space>
        </n-card>

        <!-- 子节点展开 -->
        <template v-for="node in rootNodes" :key="node.method_name">
          <n-card
            v-if="expandedKeys.includes(node.method_name) && !node.is_leaf"
            :title="`子节点: ${node.method_name}`"
            size="small"
          >
            <n-data-table
              :columns="[
                { title: '方法名', key: 'method_name', ellipsis: { tooltip: true } },
                { title: '深度', key: 'depth', width: 60 },
                { title: '采样', key: 'samples', width: 80 },
                { title: '子节点数', key: 'child_count', width: 80 }
              ]"
              :data="getChildren(node)"
              size="small"
            />
          </n-card>
        </template>

        <!-- 无文件提示 -->
        <n-empty v-if="!selectedFile" description="请在左侧选择Dump文件">
        </n-empty>
      </n-space>
    </n-card>
  </div>
</template>

<style scoped>
.calltree-view {
  height: 100%;
  overflow: auto;
}
</style>
