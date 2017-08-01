import box from './components/container/box'
import boxhead from './components/container/boxhead'
import boxcontent from './components/container/boxcontent'
import boxsticky from './components/boxsticky'
import spinner from './components/spinner'

const ucloud = {
  box,
  boxhead,
  boxcontent,
  boxsticky,
  spinner
}

const install = function (Vue) {
  Object.keys(ucloud).forEach(function (key) {
    Vue.component(key, ucloud[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
Object.assign(ucloud, {
  install: install
})
export default ucloud
