<template>
   <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <el-scrollbar height="auto">
          <el-menu
            id="menu"
            :collapse="isCollapse"
            background-color="#F7F7FA"
            text-color="#1A1A1A"
            :default-openeds=showMenuList
            :default-active=defaultActive
            @select="selectHandler"
            style="position: relative;"
        >
          <el-sub-menu v-for="(item, index) in menuData" :key="item" :index="('' + index)">
            <template #title>
              <el-icon style="width: 18px; height: 18px;">
                <component :is="item.icon" style="color: #555555;"/>
              </el-icon>
              <span
                  style="display:block;width:90%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"
                  :title="item.parentName">{{ item.parentName}}</span>
            </template>
            <el-menu-item class="submenu" v-for="x in item.childrenList" :key="x"
                          :index="(index + '_' + x.index)">
              <span style="display:block;width:90%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"
                    :title="x.name">{{ x.name }}</span>
            </el-menu-item>
          </el-sub-menu>
            <el-button type="primary" :icon="zoomIcon" style="position: absolute; right: 0; bottom: 0"
                       @click="zoomClick"/>
        </el-menu>
        </el-scrollbar>
      </el-aside>

      <el-main style="background-color: #ffffff; width: 95vw">
        <el-tabs
            v-model="editableTabsValue"
            type="card"
            closable
            @tab-remove="removeTab"
            @tab-click="tabPaneClick"
        >
          <el-tab-pane
              v-for="(item) in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
          >
            <component :is="components[item.currentComponent]" v-if="areComponentsReady"></component>
            <div v-else>
              Loading...
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { markRaw } from 'vue';

export default {
  name: "MenuPages",
  components: {},
  props: {
    menuData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      zoomIcon: 'DArrowLeft',           //缩放icon
      isCollapse: false,                //缩放状态
      showMenuList: [],              //默认打开
      defaultActive: null,           //页面加载时默认激活菜单的index
      //tabs
      editableTabsValue: '1',          //标签页id用
      editableTabs: [],                //总标签页
      tabIndex: 2,
      //对照map
      map: new Map(),                   //key与标签页对象的对照信息
      tabsMap: new Map(),             //判断标签页是否已经存在
      //关系对照表
      catalogueMap: new Map(),
      components: {},
      areComponentsReady: false,
    }
  },
  methods: {
    //标签页移除
    removeTab(targetName) {
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue

      //当删除页是当前展示页时
      if(targetName === activeName) {
        //展示相邻页
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let preTab = tabs[index - 1] || tabs[index + 1]
            if (preTab) {
              this.editableTabsValue = preTab.name;
            }
          }
        })
      }
        //处理标签页表
        this.editableTabs = tabs.filter(tab => {
          if(tab.name === targetName){
            this.tabsMap.delete(tab.tabDeleteKey);
          }
          return tab.name !== targetName
        })
    },
    /**
     * 选择
     * @param index
     */
    selectHandler(index) {
      if (!this.areComponentsReady) {
        return;
      }
      let newTabName = this.catalogueMap.get(index);
      let componentPath = this.map.get(index).component;
      if (!componentPath) {
        console.warn(`Component path is not provided for menu item with index ${index}.`);
        return;
      }
      //先判断当前editableTabs存在与否
      if (!this.tabsMap.has(index)){
        //新增
        this.tabsMap.set(index, 0);
        this.editableTabs.push(
            {
              title: this.map.get(index).name,                  //标题显示名
              name: newTabName,                                 //唯一标识
              content: '',
              currentComponent: componentPath,                             //标签页使用的组件页面
              tabDeleteKey: index,                                 //删除标识符
            }
        )
        //跳转到新页面
        this.editableTabsValue = newTabName
      }else{
        //定位到老的
        this.editableTabsValue = newTabName
      }
    },
    //标签页点击效果
    tabPaneClick(param) {
      console.log(param.props)
    },
    //缩放按钮效果
    zoomClick() {
      this.isCollapse = !this.isCollapse;
      this.zoomIcon = this.isCollapse ? 'DArrowRight' : 'DArrowLeft';
    }
  },
  mounted() {
    let _this = this;
    for (let i = 0; i < _this.menuData.length; i++) {
      if (_this.menuData[i].childrenList) { // 确保 childrenList 存在
        for (let m = 0; m < _this.menuData[i].childrenList.length; m++) {
          _this.map.set(i + '_' + m, _this.menuData[i].childrenList[m]);
          this.catalogueMap.set(i + '_' + m, ++this.tabIndex)
        }
      }
    }
  },
  async created() {
    const componentKeys = this.menuData.reduce((acc, item) => {
      if (item.childrenList) {
        item.childrenList.forEach(child => {
          if (child.component) {
            acc.push(child.component);
          }
        });
      }
      return acc;
    }, []);

    const componentModules = await Promise.all(componentKeys.map(path => import(`@/${path}`)));

    const components = componentKeys.reduce((acc, key, index) => {
      acc[key] = markRaw(componentModules[index].default);  // markRaw added here
      return acc;
    }, {});

    this.components = components;
    this.areComponentsReady = true;

    return components;
  },


}
</script>

<style scoped>
:deep(.submenu) {
  border-bottom: 1px solid #ddd; /* 或任何你喜欢的颜色 */
}

:deep(.el-sub-menu__title) {
  position: relative;
}

:deep(.el-sub-menu__title)::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: rgba(221, 221, 221, 0.5); /* 透明度为0.5的灰色 */
}

/*菜单缩进*/
[data-v-bf5eacc9] .el-sub-menu .el-menu-item {
  padding-left: 60px !important;
}

/*菜单长度*/
ul.el-menu.el-menu--vertical {
  height: 100vh;
}

/*菜单点击效果*/
.el-menu-item.is-active {
  background-color: #ffffff;
  color: #0256FF;
}

.el-menu-item.is-active:after {
  content: "";
  display: block;
  height: 60%;
  width: 2px;
  background-color: #00BFFF;
  position: absolute;
  right: 0;
}

.el-tabs {
  background-color: #F7F7FA;
  height: 40px;
  position: relative;
  top: -15px; /* 调整这个值以适应你的需要 */
}
</style>

<style>
.el-tabs__item.is-active {
  color: #3D3D3D;
  background: #ffffff;
}

.el-menu {
  font-weight: 500;
}
</style>
