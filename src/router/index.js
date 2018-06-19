import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

const index = resolve => require(['../components/index.vue'], resolve)
const Login = resolve => require(['../components/Login/login.vue'], resolve)
const Register = resolve => require(['../components/Register/register.vue'], resolve)
const studentIndex = resolve => require(['../components/MainPage/index.vue'], resolve)
/*const studentInfo = resolve => require(['../components/Student/personalCenter.vue'], resolve)
const teacherIndex = resolve => require(['../components/Teacher/index.vue'], resolve)
const addOrder = resolve => require(['../components/Teacher/addOrder.vue'], resolve)
const changeSInfo = resolve => require(['../components/Student/infoPage.vue'], resolve)
const changeTInfo = resolve => require(['../components/Teacher/infoPage.vue'], resolve)
const SUindex = resolve => require(['../components/SU/index.vue'], resolve)*/
Vue.use(Router)
Vue.use(Vuex)

const routes = [
  {
    path: '/',
    component: index,
    name: 'index'
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/register',
    component: Register,
    name: 'register'
  },
  {
    path: '/MainPage/index',
    component: studentIndex,
    name: 'studentIndex'
  }/*,
  {
    path: '/student/infopage',
    component: studentInfo,
    name: 'studentInfo'
  },
  {
    path: '/teacher/index',
    component: teacherIndex,
    name: 'teacherIndex'
  },
  {
    path: '/teacher/addOrder',
    component: addOrder,
    name: 'addOrder'
  },
  {
    path: '/student/info',
    component: changeSInfo,
    name: 'SInfo'
  },
  {
    path: '/teacher/info',
    component: changeTInfo,
    name: 'TInfo'
  },
  {
    path: '/SU/index',
    component: SUindex,
    name: 'SUindex'
  }*/

]

const router = new Router({
  routes
})

/*router.beforeEach((to, from, next) => {
  if (to.fullPath === '/login') {
    next()
  }
  else if(from.fullPath==='/login'){
    next()
  }
  else if (LOCWIN.Cache.get('userName')) {
    console.log(LOCWIN.Cache.get('userName'))
    next()
  } else {
    next('/login')
  }

})

 router.afterEach(transition => {
   setRouterParams(transition);
  NProgress.done();
 });
*/
export default router

