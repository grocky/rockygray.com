import React, { Component } from 'react';

import { TweenMax, Power4 } from 'gsap';

import './App.css'
import headshot from './headshot_450.jpg'
import ProfilePicture from './ProfilePicture';
import Logo from '../components/Logo';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  handleLogoClick = (event: SyntheticMouseEvent) => {
    event.preventDefault();
    if (this.props.logos.isSpinning) {
      return event;
    }
    this.props.actions.startRotation();
    TweenMax.to(this.props.logos.refs, 3, {
      throwProps: {
        rotation: {
          velocity: 800,
          end: naturalLandingValue => Math.round(naturalLandingValue / 180) * 180
        }
      },
      ease: Power4.easeOut,
      onComplete: this.props.actions.rotationStopped
    });
  };

  render() {

    const profilePictureProps = {
      image: headshot,
      imageWidth: 350,
      xCenter: 180,
      yCenter: 80,
      circleDiameter: 150,
    };

    const socialSites = [
      {
        name: 'github',
        url: 'https://github.com/grocky'
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/rockygray'
      },
      {
        name: 'medium',
        url: 'https://medium.com/@rocky.grayjr'
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/RockyGJr'
      },
      {
        name: 'stack-overflow',
        url: 'https://stackoverflow.com/story/rockygray'
      },
    ];

    const socialLinks = socialSites.map(s => (
      <div class="social-link" key={s.name}>
        <a href={s.url} rel="noopener noreferrer" target="_blank">
          <div className={`fa fa-${s.name}`}></div>
          <div class="label">{ `/${s.url.split('/').pop()}` }</div>
        </a>
      </div>
    ));

    return (
      <>
        <div class="background-logo">
          <Logo />
        </div>
        <main class="profile-container">
          <header class="information">
              <ProfilePicture {...profilePictureProps} />
              <div class="contact-info">
                <p class="name">Rocky Gray Jr.</p>
                <p class="title"><em>Software Engineer</em></p>
              </div>
          </header>
          <section class="social-sites-container">
            {socialLinks}
          </section>
        </main>
        <footer>
          <p>&copy; Rocky Gray {this.state.date.getFullYear()}</p>
        </footer>
      </>
    );
  }
}

export default App
