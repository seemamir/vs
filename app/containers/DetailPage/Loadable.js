/**
 *
 * Asynchronously loads the component for DetailPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
export const Wrapper = Loadable({
  loader: () => import('./section'),
  loading: () => null,
});
