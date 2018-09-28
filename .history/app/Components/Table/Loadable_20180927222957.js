/**
 *
 * Asynchronously loads the component for Table
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

export const Wrapper = Loadable({
  loader: () => import('./styles'),
  loading: () => null,
});
