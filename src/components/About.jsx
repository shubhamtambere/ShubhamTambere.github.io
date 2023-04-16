/* eslint-disable */
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  introTextContainer: {
    margin: 10,
    display: 'flex',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 10,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
   rowContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '50vh'
    }
};

function About(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  const parseIntro = (text) => (
    <ReactMarkdown
      children={text}
    />
  );

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          {data
            ? (
              <Fade>
                <Row className="align-items-center justify-content-center" style={styles.rowContainer}>
                  <Col style={styles.introTextContainer}>

                    {parseIntro(data.about)}
                  </Col>
                  <Col style={styles.introImageContainer}>
                    <img src={data?.imageSource} alt="profile" height="250" width="250"/>
                  </Col>
                </Row>
              </Fade>
            )
            : <FallbackSpinner />}
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
