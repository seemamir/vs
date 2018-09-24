/**
 *
 * Asynchronously loads the component for CheckBox
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
