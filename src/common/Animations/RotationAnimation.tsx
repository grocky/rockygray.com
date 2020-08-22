import React, { Component } from 'react';
import { Power4, TweenMax } from "gsap";
import { connect, ConnectedProps } from 'react-redux';

import {
  rotationStopped,
  startRotation,
  RotationState,
} from "./redux";

const mapStateToProps = (state: object) => ({ ...state.animations });

const mapDispatchToProps = dispatch => (
  {
    startRotation: (ref) => dispatch(startRotation(ref)),
    rotationStopped: (ref) => dispatch(rotationStopped(ref)),
  }
);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const mergeProps: any = (wrappedComponentProps: Props): (...props: Props) => Props =>
  (stateProps: Props, dispatchProps: Props, ownProps: Props) =>
    ({ ...ownProps, ...stateProps, ...dispatchProps, ...wrappedComponentProps });

const connector = (wrappedComponentProps) =>
  connect(mapStateToProps, mapDispatchToProps, mergeProps(wrappedComponentProps))
export const withRotationAnimation = (WrappedComponent, key, wrappedComponentProps = {}) => {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps(wrappedComponentProps),
  )(class RotationAnimation extends Component {
    constructor(props) {
      super(props);
      this.ref = null;
    }

    onClick = (e) => {
      e.preventDefault();
      this.props.startRotation(key);
    };

    getRef = (ref) => this.ref = ref;

    onAnimationEnd = () => {
      this.props.rotationStopped(key);
    };

    componentDidUpdate(prevProps, prevState) {
      if (!prevProps[key] && this.props[key]) {
        this.doAnimation();
      }
    }

    doAnimation = () => {
      TweenMax.to(this.ref, 3, {
        throwProps: {
          rotation: {
            velocity: 800,
            end: naturalLandingValue => Math.round(naturalLandingValue / 180) * 180
          }
        },
        ease: Power4.easeOut,
        onComplete: this.onAnimationEnd,
      });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          onClick={this.onClick}
          getRef={this.getRef}
        />
      )
    }
  });
};
