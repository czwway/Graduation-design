<template>
    <div class="leftnav" id="leftnav">


    <Row>
       <Col span="8">
            <Menu :theme="theme2"  accordion>
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        餐厅管理
                    </template>
                    <router-link to="/index/restaurantList"><MenuItem name="1-1">餐厅列表</MenuItem></router-link>
                    <router-link to="/index/restaurantAdd"><MenuItem name="1-2">餐厅添加</MenuItem></router-link>
                    <router-link to="/index/restaurantEdit"><MenuItem name="1-3">餐厅修改</MenuItem></router-link>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        菜品管理
                    </template>
                    <router-link to="/index/foodsList"><MenuItem name="2-1">菜品列表</MenuItem></router-link>
                    <router-link to="/index/foodsAdd"><MenuItem name="2-2">菜品添加</MenuItem></router-link>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        类别管理
                    </template>
                    <MenuGroup title="使用">
                        <router-link to="/index/c1"><MenuItem name="3-1">新增和启动</MenuItem></router-link>
                    </MenuGroup>
                </Submenu>
                <Submenu name="4">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        用户管理
                    </template>
                    <router-link to="/index/c1"><MenuItem name="4-1">新增用户</MenuItem></router-link>
                    <router-link to="/index/c1"><MenuItem name="4-2">活跃用户</MenuItem></router-link>
                </Submenu>
                <Submenu name="5">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        权限管理
                    </template>
                    <router-link to="/index/c1"><MenuItem name="5-1">新增用户</MenuItem></router-link>
                    <router-link to="/index/c1"><MenuItem name="5-2">活跃用户</MenuItem></router-link>
                </Submenu>
                
                <Submenu name="6">
                    <template slot="title">
                        <Icon type="clipboard"></Icon>
                        订单管理
                    </template>
                    <router-link to="/index/c1"><MenuItem name="6-1">新增用户</MenuItem></router-link>
                    <router-link to="/index/c1"><MenuItem name="6-2">活跃用户</MenuItem></router-link>
                </Submenu>
                
                <Submenu name="7">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        物流管理
                    </template>
                    <router-link to="/index/c1"><MenuItem name="7-1">新增用户</MenuItem></router-link>
                    <router-link to="/index/c1"><MenuItem name="7-2">活跃用户</MenuItem></router-link>
                </Submenu>
                
                <Submenu name="8">
                    <template slot="title">
                        <Icon type="android-people"></Icon>
                        员工管理
                    </template>
                    <router-link to="/index/c1"><MenuItem name="8-1">新增用户</MenuItem></router-link>
                    <router-link to="/index/c1"><MenuItem name="8-2">活跃用户</MenuItem></router-link>
                </Submenu>
                
                <Submenu name="9">
                    <template slot="title">
                        <Icon type="pie-graph"></Icon>
                        报表管理
                    </template>
                    <router-link to="/index/c1"><MenuItem name="9-1">新增用户</MenuItem></router-link>
                    <router-link to="/index/c1"><MenuItem name="9-2">活跃用户</MenuItem></router-link>
                </Submenu>
                
                <Submenu name="10">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        广告管理
                    </template>
                    <router-link to="/index/c1"><MenuItem name="10-1">新增用户</MenuItem></router-link>
                    <router-link to="/index/c1"><MenuItem name="10-2">活跃用户</MenuItem></router-link>
                </Submenu>
                
                
            </Menu>
        </Col>
    </Row>
    </div>
</template>
<script>
    export default {
        props: ['childMsg'],
        data () {
            return {
                theme2: 'dark',
            }
        },
        methods: {

        },
        //监听点击侧边栏发生左偏
        created() {
            this.$root.Bus.$on('shrink', function () {
               if(document.querySelector('#leftnav').style.transform){
                    document.querySelector('#leftnav').style.transform = '';
                }else{
                    document.querySelector('#leftnav').style.transform = 'translateX(-150px)';
                }
            })
        },
        beforeDestroy() {
            this.$root.Bus.$off('shrink')
        },

        
    }
</script>
<style scoped>
.leftnav{
    position: fixed;
    top: 50px;
    left: 0;
    transition: all 1s;
}

</style>