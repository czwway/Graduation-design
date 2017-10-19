<template>
    <div class="breadcrumbDiv">
        <Breadcrumb>
            <BreadcrumbItem>首页</BreadcrumbItem>
            <BreadcrumbItem v-for="(item, index) in $route.meta" key="index">{{item}}</BreadcrumbItem>
        </Breadcrumb>
    </div>
</template>
<script>
    export default {
        
    }
</script>


<style scoped>
.breadcrumbDiv{
    margin: 20px;
    background: #f8f8f9;
    padding: 10px;
    /*border-radius: 5px;*/
    border-left: 10px solid;
}
</style>
