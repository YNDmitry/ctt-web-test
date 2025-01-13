import { slider } from './utils/slider'

window.Webflow ||= []
window.Webflow.push(() => {
  console.log('global')
  slider()
})
