import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import isEqual from 'lodash.isequal';

import * as actionCreators from './actions';
import * as ScreenComponents from './components';

function* screensGenerator(screens) {
  for (var i = 0; i < screens.length; i++) {
    yield screens[i];
  }
}

class App extends PureComponent {

  componentDidMount() {
    // return this.loadCourse();
    this.props.actions.fetchCourse();
  }

  execute = (generator, yieldValue) => {
    const { currentScreen, actions } = this.props;
    const next = generator.next(yieldValue);
    setTimeout(() => {
      if (!next.done) {
        const { value } = next;
        const time = value.type === 'fade' ? 3000 : 500 + Math.random() * 1000;
        console.log(next.value)
        actions.setEvent(next.value);
        setTimeout(() => {
          this.execute(generator, next);
        }, value.duration || time)
      } else {
        console.log(next.value);
        setTimeout(() => {
          actions.setScreen(currentScreen.index + 1);
        }, 3000);
      }
    }, 200)
  }

  componentWillReceiveProps({ currentScreen }) {
    if (currentScreen.events && !isEqual(currentScreen, this.props.currentScreen)) {
      this.execute(screensGenerator(currentScreen.events))
    }
  }

  render() {
    const {
      currentScreen: {
        screen,
      }
    } = this.props;

    const Screen = ScreenComponents[screen] || ScreenComponents['ImgChat'];

    return (
      <div className='app' style={{ color: 'white' }}>
        <Screen />
      </div>
    );
  }
}

const mapStateToProps = function (store) {
  return {
    ...store.course,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
