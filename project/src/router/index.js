import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            redirect:'/login',
            hidden:true,
            component:()=>import('@/components/Login')
        },
        {
            path:'/login',
            name:'Login',
            hidden:true,
            component:()=>import('@/components/Login')
        },
        {
            path:'*',
            name:'NotFound',
            hidden:true,
            component:()=>import('../components/NotFound')
        },
        {
            path:'/home',
            hidden:true,
            component:()=>import('@/components/Home')
        },
        {
            path:'/home',
            name:'学生管理',
            redirect:'/home/student',
            component:()=>import('../components/Home'),//懒加载
            children:[
                {
                    path: '/home/student',
                    name: '学生列表',
                   
                    component:()=> import('@/components/students/StudentList')
                },
                {
                    path: '/home/student',
                    name: '信息列表',
                    component:()=> import('@/components/students/InfoList')
                },
                {
                    path: '/home/infos',
                    name: '信息管理',
                    component:()=> import('@/components/students/InfoLists')
                },
                {
                    path: '/home/work',
                    name: '作业列表',
                    component:()=> import('@/components/students/WorkList')
                },
                {
                    path: '/home/workment',
                    name: '作业管理',
                    component:()=> import('@/components/students/WorkMent')
                },

            ]
        },
        {
            path:'/home',
            name:'数据分析',
            
            component:()=>import('../components/Home'),//懒加载
            children:[
                {
                    path: '/home/dataView',
                    name: '数据概览',
                    
                    component:()=> import('@/components/dataAnalysis/DataView')
                },
                {
                    path: '/home/mapview',
                    name: '地图概览',
                    component:()=> import('@/components/dataAnalysis/MapView')
                },
                {
                    path: '/home/travel',
                    name: '旅游地图',
                    component:()=> import('@/components/dataAnalysis/TravelMap')
                },
                {
                    path: '/home/score',
                    name: '分数地图',
                    component:()=> import('@/components/dataAnalysis/ScoreMap')
                }
          

            ]
        },
        {
            path:'/users',
            name:'用户中心',
            
            component:()=>import('../components/users/User'),//懒加载
            children:[
                {
                    path: '/users/User',
                    name: '权限管理',
                    component:()=> import('@/components/users/User')
                }
            ]
        }
      
    ],
    mode:'history'
})