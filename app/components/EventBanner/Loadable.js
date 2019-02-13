/**
 *
 * Asynchronously loads the component for EventBanner
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
