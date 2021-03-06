import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Sponsor.module.css';

class Sponsor extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    const { clicked } = this.state;
    this.setState({ clicked: !clicked });
  }
  render() {
    const {
      logo,
      sponsorName,
      blurb,
      link,
    } = this.props;
    const {
      clicked,
    } = this.state;
    return (
      <div className={`${styles.outside} ${sponsorName}`}>
        <div className={styles.outline}>
          <button className={styles.other} onClick={this.handleOnClick}>
            <img className={sponsorName} src={logo} alt={sponsorName} />
          </button>
        </div>
        {clicked ?
          <div>
            <p>
              {blurb}
            </p>
            <p>
              { 'Learn More: ' }
              <strong>
                <a href={link} target="_blank" rel="noopener noreferrer" >
                  {sponsorName}
                </a>
              </strong>
            </p>
          </div> :
       null }
      </div>
    );
  }
}

Sponsor.propTypes = {
  logo: PropTypes.string.isRequired,
  sponsorName: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Sponsor;
