/* @flow */
import { injectReducer } from '../../store/reducers'

export default (store: Object) => ({
  path: 'gallery',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState: Object, cb: Function) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Gallery = require('./containers/GalleryContainer').default
      const reducer = require('./modules/gallery').default

      /*  Add the reducer to the store on key 'theWireCharacters'  */
      injectReducer(store, { key: 'gallery', reducer })

      /*  Return getComponent   */
      cb(null, Gallery)

      /* Webpack named bundle   */
    }, 'gallery')
  }
})