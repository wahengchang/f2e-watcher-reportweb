
import PreloadHelloWorld from './containers/PreloadHelloWorld'

const matchConfig = [
  {
    path: '/preload',
    component: PreloadHelloWorld,
    initState: PreloadHelloWorld.initState,
    exact: false
  }
]

export default matchConfig
