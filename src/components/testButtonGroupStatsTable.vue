<template>
  <!--三层结构-->
  <!--滑动按钮组-->
  <!--  统计信息-->
  <!--  统计表-->
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="button-group">
          <div
              v-for="(button, index) in buttons"
              :key="index"
              @click="selectedIndex = index"
              class="button"
              :class="{ 'button-selected': selectedIndex === index }"
          >
            {{ button }}
          </div>
          <div class="highlight" :style="highlightStyle" v-if="selectedIndex !== null"></div>
        </div>
      </el-header>
      <el-main>
        <div class="statistics-container">
          <el-row>
            <el-col :span="6">
              <el-statistic title="Daily active users" :value="268500"/>
            </el-col>
            <el-col :span="6">
              <el-statistic :value="138">
                <template #title>
                  <div style="display: inline-flex; align-items: center">
                    Ratio of men to women
                    <el-icon style="margin-left: 4px" :size="12">
                      <Male/>
                    </el-icon>
                  </div>
                </template>
                <template #suffix>/100</template>
              </el-statistic>
            </el-col>
            <el-col :span="6">
              <el-statistic title="Total Transactions" :value="172000"/>
            </el-col>
            <el-col :span="6">
              <el-statistic title="Feedback number" :value="562">
                <template #suffix>
                  <el-icon style="vertical-align: -0.125em">
                    <ChatLineRound/>
                  </el-icon>
                </template>
              </el-statistic>
            </el-col>
          </el-row>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import {ChatLineRound, Male} from '@element-plus/icons-vue'

export default {
  components: {Male, ChatLineRound},
  data() {
    return {
      buttons: ['按钮一', '按钮二', '按钮三'],
      selectedIndex: null,
    };
  },
  computed: {
    highlightStyle() {
      if (this.selectedIndex !== null) {
        return {
          transform: `translateX(${this.selectedIndex * 100}%)`,
        };
      }
      return {};
    },
  },
};
</script>

<style scoped>
.button-group {
  position: relative;
  width: 50vw; /* 设置固定宽度 */
  margin: auto; /* 自动设置边距使得元素居中 */
  border-radius: 25px; /* 更小的圆角 */
  display: flex;
  background-color: #f0f0f0;
  padding: 5px; /* 更小的内边距 */
}

.button {
  flex: 1;
  text-align: center;
  line-height: 20px; /* 更小的行高 */
  position: relative;
  z-index: 1;
  cursor: pointer;
}

.button-selected {
  color: white;
}

.highlight {
  position: absolute;
  top: 3px; /* 更小的上边距 */
  bottom: 3px; /* 更小的下边距 */
  width: calc(100% / 3); /* 调整此处 */
  background-color: blue;
  border-radius: 10px; /* 更小的圆角 */
  transition: transform 0.3s ease-in-out;
  transform: translateX(0);
}

/*main*/
.statistics-container {
  background-color: #f0f0f0;
  border-radius: 10px; /* 可以根据你的实际需求调整圆角的大小 */
  padding: 20px; /* 根据实际需求调整内边距的大小 */
}
</style>


