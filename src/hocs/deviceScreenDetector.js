import { compose, withState, lifecycle, withHandlers } from 'recompose';
import * as R from 'ramda';
import throttle from 'lodash.throttle';

let resizeListener = null;

const MOBILE_MAX_WIDTH = 568;
const TABLET_PORTRAIT_MAX_WIDTH = 768;
const TABLET_LANDSCAPE_MAX_WIDTH = 1024;

const INIT_STATE = {
  isMobile: false,
  isTabletPortrait: false,
  isTabletLandscape: false,
  isDesktop: false,
};

export default compose(
  withState('deviceScreenType', 'setDeviceScreenType', INIT_STATE),
  withHandlers({
    handleResize: ({ setDeviceScreenType }) => () => {
      const width = R.pathOr(
        window.innerWidth,
        ['visualViewport', 'width'],
        window
      );
      const conditions = [
        { res: width <= MOBILE_MAX_WIDTH, type: 'isMobile' },
        { res: width <= TABLET_PORTRAIT_MAX_WIDTH, type: 'isTabletPortrait' },
        { res: width <= TABLET_LANDSCAPE_MAX_WIDTH, type: 'isTabletLandscape' },
        { res: true, type: 'isDesktop' },
      ];
      setDeviceScreenType({
        ...INIT_STATE,
        ...{ [R.find(R.prop('res'))(conditions).type]: true },
      });
    },
  }),
  lifecycle({
    componentDidMount() {
      const { handleResize } = this.props;
      if (resizeListener === null) {
        resizeListener = window.addEventListener(
          'resize',
          throttle(handleResize, 400)
        );
      }
      handleResize();
    },
  })
);
