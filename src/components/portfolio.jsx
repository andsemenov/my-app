import React from "react";
import { Grid, Icon } from "semantic-ui-react";

const importAll = (r) => {
  const images = r.keys().map(r);
  return images;
};

const Portfolio = () => {
  const listOfImages1 = importAll(
    require.context("../img/project1/", false, /\.(png|jpe?g|svg)$/)
  );
  const listOfImages2 = importAll(
    require.context("../img/project2/", false, /\.(png|jpe?g|svg)$/)
  );
  const listOfImages3 = importAll(
    require.context("../img/project3/", false, /\.(png|jpe?g|svg)$/)
  );
  const listOfImages4 = importAll(
    require.context("../img/project4/", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Portfolio</h3>
              <p className="subtitle-a">There are my projects.</p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="work-box">
              <a href={listOfImages1[0]} data-lightbox="gallery-vmarine1">
                <div className="work-img">
                  <img src={listOfImages1[0]} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Lorem Ipsum</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          HTML5 CSS3 Bootstrap ReactJS
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              {listOfImages1.slice(1).map((image, index) => (
                <a
                  href={image}
                  key={index}
                  data-lightbox="gallery-vmarine1"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              ))}
              <Grid centered>
                <Grid.Row columns={2}>
                  <Grid.Column
                    textAlign="center"
                    verticalAlign="middle"
                    className="links"
                    width={5}
                  >
                    <a
                      href="https://github.com/andsemenov/scot-diversihire"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="code" />
                      <p>Code.</p>
                    </a>
                  </Grid.Column>
                  <Grid.Column
                    textAlign="center"
                    verticalAlign="middle"
                    className="links"
                    width={5}
                  >
                    <a
                      href="https://diversihire.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="desktop" />
                      <p>Live site.</p>
                    </a>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </div>
          {/* temporary */}
          <div className="col-md-4">
            <div className="work-box">
              <a href={listOfImages2[0]} data-lightbox="gallery-vmarine2">
                <div className="work-img">
                  <img src={listOfImages2[0]} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Lorem Ipsum</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          HTML5 CSS3 Bootstrap ReactJS
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              {listOfImages2.slice(1).map((image, index) => (
                <a
                  href={image}
                  key={index}
                  data-lightbox="gallery-vmarine2"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              ))}
              <Grid centered>
                <Grid.Row columns={2}>
                  <Grid.Column
                    textAlign="center"
                    verticalAlign="middle"
                    className="links"
                    width={5}
                  >
                    <a
                      href="https://github.com/andsemenov/scot-diversihire"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="code" />
                      <p>Code.</p>
                    </a>
                  </Grid.Column>
                  <Grid.Column
                    textAlign="center"
                    verticalAlign="middle"
                    className="links"
                    width={5}
                  >
                    <a
                      href="https://diversihire.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="desktop" />
                      <p>Live site.</p>
                    </a>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href={listOfImages3[0]} data-lightbox="gallery-vmarine3">
                <div className="work-img">
                  <img src={listOfImages3[0]} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Lorem Ipsum</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          HTML5 CSS3 Bootstrap ReactJS
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              {listOfImages3.slice(1).map((image, index) => (
                <a
                  href={image}
                  key={index}
                  data-lightbox="gallery-vmarine3"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              ))}
              <Grid centered>
                <Grid.Row columns={2}>
                  <Grid.Column
                    textAlign="center"
                    verticalAlign="middle"
                    className="links"
                    width={5}
                  >
                    <a
                      href="https://github.com/andsemenov/scot-diversihire"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="code" />
                      <p>Code.</p>
                    </a>
                  </Grid.Column>
                  <Grid.Column
                    textAlign="center"
                    verticalAlign="middle"
                    className="links"
                    width={5}
                  >
                    <a
                      href="https://diversihire.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="desktop" />
                      <p>Live site.</p>
                    </a>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href={listOfImages4[0]} data-lightbox="gallery-vmarine4">
                <div className="work-img">
                  <img src={listOfImages4[0]} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Lorem Ipsum</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          HTML5 CSS3 Bootstrap ReactJS
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              {listOfImages4.slice(1).map((image, index) => (
                <a
                  href={image}
                  key={index}
                  data-lightbox="gallery-vmarine4"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              ))}
              <Grid centered>
                <Grid.Row columns={2}>
                  <Grid.Column
                    textAlign="center"
                    verticalAlign="middle"
                    className="links"
                    width={5}
                  >
                    <a
                      href="https://github.com/andsemenov/scot-diversihire"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="code" />
                      <p>Code.</p>
                    </a>
                  </Grid.Column>
                  <Grid.Column
                    textAlign="center"
                    verticalAlign="middle"
                    className="links"
                    width={5}
                  >
                    <a
                      href="https://diversihire.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="desktop" />
                      <p>Live site.</p>
                    </a>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </div>
          {/* temporary */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
