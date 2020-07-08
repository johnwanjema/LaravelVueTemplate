<template>
<div id="app">
    <!-- <loading :active.sync="isLoading" :can-cancel="false" height:80 width:128000 color="#2900ff" background-color="#fff" :is-full-page="true"></loading> -->
    <router-view/>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'App',
    data(){
        return{
            // fullPage: true,
        }
    },
    // computed: {
    //     ...mapGetters(['isLoading'])
    // },
}
</script>
