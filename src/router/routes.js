import Home from '../pages/Home/Home'
import Cart from '../pages/Cart/Cart'
import Profile from '../pages/Profile/Profile'
import Category from '../pages/Category/Category'
import Topic from '../pages/Topic/Topic'
import Search from '../pages/Search/Search'
import Expert from '../pages/expert/expert'

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      isShowFoot: true
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      isShowFoot: true
    }
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/topic',
    component: Topic,
    meta: {
      isShowFoot: true
    }
  },
  {
    path: '/expert',
    comments: Expert,
    meta: {
      isShowFoot: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      isShowFoot: true
    }
  },
  {
    path: '/search',
    component: Search
  },
  {
    path:'/',
    redirect: '/home'
  }
]