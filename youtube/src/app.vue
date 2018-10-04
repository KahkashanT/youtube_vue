

<template>
<div >
    <div>
        <router-view :key="$route.fullPath"></router-view>
    </div>
</div>
</template>

<script>


import  youtube from './baseComponents/youtube.vue';
import  videoDetail from './baseComponents/subComponents/videoDetail.vue';
export default {
  components:{
youtube,
videoDetail,
}
}
</script>

