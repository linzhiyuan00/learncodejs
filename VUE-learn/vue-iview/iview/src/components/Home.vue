<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex">
      <i-col :span="spanLeft" class="layout-menu-left">
        <Menu active-key="1" theme="dark" width="auto" :open-keys="['1']" mode="vertical">
          <div class="layout-logo-left" style="color:#eee;line-height:30px;text-align:center">Admin 管理系统</div>
          <Submenu key="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>导航一
            </template>
            <Menu-item key="1-1">选项 1</Menu-item>
            <Menu-item key="1-2">选项 2</Menu-item>
            <Menu-item key="1-3">选项 3</Menu-item>
          </Submenu>
          <Submenu key="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>导航二
            </template>
            <Menu-item key="2-1">选项 1</Menu-item>
            <Menu-item key="2-2">选项 2</Menu-item>
          </Submenu>
          <Submenu key="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>导航三
            </template>
            <Menu-item key="3-1">选项 1</Menu-item>
            <Menu-item key="3-2">选项 2</Menu-item>
          </Submenu>
        </Menu>
      </i-col>
      <i-col :span="spanRight">
        <div class="layout-header">
          <Button type="text">
            <Icon type="md-menu" size="32"/>
          </Button>
          <Dropdown style="float:right;margin: 20px">
            <a href="javascript:void(0)">
              {{userName}}
              <Icon type="arrow-down-b"></Icon>
            </a>
            <Dropdown-menu slot="list">
              <Dropdown-item>修改密码</Dropdown-item>
              <Dropdown-item>退出</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
        </div>
        <div class="layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb-item to="/table">首页</Breadcrumb-item>
            <Breadcrumb-item to="/table/manage">Components</Breadcrumb-item>
          </Breadcrumb>
        </div>
        <div class="layout-content">
          <div class="layout-content-main">
            <!-- <i-table border :columns="columns1" :data="data1"></i-table> -->
            <router-view></router-view>
          </div>
          <Page :total="100" style="float:right;margin-right:20px"></Page>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      spanLeft: 5,
      spanRight: 19,
      userName: '',
      columns1: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      data1: [
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居'
        },
        {
          name: '张小刚',
          age: 25,
          address: '北京市海淀区西二旗'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道'
        },
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居'
        },
        {
          name: '张小刚',
          age: 25,
          address: '北京市海淀区西二旗'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道'
        }
      ]
    }
  },
  created () {
    this.userName = JSON.parse(sessionStorage.getItem('user'))
  },
  computed: {
    iconSize () {
      return this.spanLeft === 5 ? 14 : 24
    }
  },
  methods: {
    toggleClick () {
      if (this.spanLeft === 5) {
        this.spanLeft = 2
        this.spanRight = 22
      } else {
        this.spanLeft = 5
        this.spanRight = 19
      }
    }
  }
}
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.ivu-row-flex {
  width: 100%;
  height: 100%;
}
.layout-breadcrumb {
  padding: 10px 15px 0;
}
.layout-content {
  min-height: 500px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}
.layout-content-main {
  padding: 10px;
}
.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
.layout-menu-left {
  background: #464c5b;
}
.layout-header {
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.layout-ceiling-main a {
  color: #9ba7b5;
}
.layout-hide-text .layout-text {
  display: none;
}
.ivu-col {
  transition: width 0.2s ease-in-out;
}
</style>
