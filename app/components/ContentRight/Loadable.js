/**
 *
 * Asynchronously loads the component for ContentRight
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
