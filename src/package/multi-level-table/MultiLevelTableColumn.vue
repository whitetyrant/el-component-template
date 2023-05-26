<template>
    <el-table-column
        v-if="column.subColumns"
        :label="column.label"
        :min-width="column.minWidth"
    >
        <multi-level-table-column
            v-for="(subColumn, subIndex) in column.subColumns"
            :key="subIndex"
            :column="subColumn"
        />
    </el-table-column>

    <el-table-column
        v-else
        :prop="column.prop"
        :label="column.label"
        :min-width="column.minWidth"
        :sortable="column.sortable ? 'custom' : false"
    />
</template>

<script>
export default {
    name: 'multi-level-table-column',
    props: {
        column: {
            type: Object,
            required: true
        }
    }
}
</script>
