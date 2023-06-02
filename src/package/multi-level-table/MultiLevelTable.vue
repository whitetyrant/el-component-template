<template>
    <el-table
            :v-loading="isLoading"
            :data="tableData"
            :width="`${tableWidth}px`"
            :height="screenHeight"
            border
            :header-cell-style="{textAlign: 'center', background: '#FAFAFA'}"
            :cell-style="{ textAlign: 'center', color: '#3D3D3D' }"
    >
        <el-table-column
                v-if="columns[0] && columns[0].type"
                :type="columns[0].type"
        />

        <multi-level-table-column
                v-for="(column, index) in remainingColumns"
                :key="index"
                :column="column"
        />
    </el-table>
</template>

<script>
import MultiLevelTableColumn from './MultiLevelTableColumn.vue'

export default {
    name: 'multi-level-table',
    components: {
        MultiLevelTableColumn
    },
    props: {
        isLoading: {
            type: Boolean,
            default: false,
        },
        tableData: {
            type: Array,
            required: true
        },
        columns: {
            type: Array,
            required: true
        },
        tableWidth: {
            type: Number,
            default: 100
        },
        screenHeight: {
            type: Number,
            default: 100
        }
    },
    computed: {
        remainingColumns() {
            return this.columns[0] && this.columns[0].type ? this.columns.slice(1) : this.columns
        }
    }
}
</script>
