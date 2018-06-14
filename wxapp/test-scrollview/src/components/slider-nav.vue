<template>
        <scroll-view class="swiper-tab" scroll-x style="width: 100%">
                <view :style="menuStyle" v-for="(item,index) in navList" :key="index" class="swiper-tab-item" :data-current="index" @tap="swichNav">{{item.title}}</view>
                <view class="block" :style="style"></view>
            </scroll-view>
</template>
<script>
import {
    obj2style
} from '@/common/js/basic'
export default {
    name: "slider-nav",
    data() {
        return {
            
        }
    },
    props: {
        navList: {
            type: Array,
        },
        menuWidth: {
            type: Number,
        },
        currentTab: {
            type: Number,
            default: 0,
        },
        font: {
            type: Number,
            default: 14,
        }
    },
    methods: {
        swichNav(e) {
            const {
                current
            } = e.target.dataset;
            if (this.currentTab === current) return false
                // else this.currentTab = current;
            else {
                this.$emit('update:currentTab', current)
            }
        },
    },
    computed: {
       
    },
    async onLoad() {
        // 获取系统消息
       
}
}
</script>
<style  lang="scss" scoped>
    .swiper-tab {
    width: 100%;
    text-align: center;
    line-height: 42px;
    white-space: nowrap;
    position: relative;
    .swiper-tab-item {
        transition: all 0.2s;
        font-size: 18px;
        height: 42px;
        display: inline-block;
        color: #777777;
    }
    .block {
        display: block;
        position: absolute;
        left: 0;
        height: 2px;
        background:lightcoral;
        bottom: 20px;
        transition: left 0.2s;
        z-index: 99;
    }
}
</style>
