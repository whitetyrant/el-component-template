import multiLevelTable from "./multi-level-table/MultiLevelTable.vue";
const components= [multiLevelTable]

// 批量组件注册
const install = function (app) {
    components.forEach((com) => {
        app.component(com.name, com);
    });
};

//导出组件
export default {
    install
};
