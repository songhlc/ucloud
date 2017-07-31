import box from './components/container/box.vue'
import boxcontent from './components/container/boxcontent.vue'
import boxsticky from './components/boxsticky.vue'
import spinner from './components/spinner.vue'

const ucloud = {
  box,
  boxcontent,
  boxsticky,
  spinner
}

const install = function (Vue, opts = {}) {
  Object.keys(ucloud).forEach((key) => {
    Vue.component(key, ucloud[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default Object.assign(ucloud, {install})
