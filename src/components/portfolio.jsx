import React from "react";
import { Grid, Icon } from "semantic-ui-react";

//import stock
import stock from "../img/image1.jpg";
/* import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg"; */

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Incididunt nostrud id aute culpa excepteur pariatur consequat
                  elit culpa nulla enim anim incididunt.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Diversihire platform</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          PostgreSQL ExpressJS ReactJS NodeJS
                        </span>
                      </div>
                    </div>
                  </div>
                  <Grid centered>
                    <Grid.Row columns={2}>
                      <Grid.Column
                        textAlign="center"
                        verticalAlign="middle"
                        className="links"
                        width={5}
                      >
                        <a
                          href="https://github.com/CodeYourFuture/scot-diversihire"
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
                          href="https://scot-diversihire.herokuapp.com/"
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
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock} alt="" className="img-fluid" />
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
                  </div>
                  <Grid centered>
                    <Grid.Row columns={2}>
                      <Grid.Column
                        textAlign="center"
                        verticalAlign="middle"
                        className="links"
                        width={5}
                      >
                        <a
                          href="https://github.com/CodeYourFuture/scot-diversihire"
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
                          href="https://scot-diversihire.herokuapp.com/"
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
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock} alt="" className="img-fluid" />
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
                  </div>
                  <Grid centered>
                    <Grid.Row columns={2}>
                      <Grid.Column
                        textAlign="center"
                        verticalAlign="middle"
                        className="links"
                        width={5}
                      >
                        <a
                          href="https://github.com/CodeYourFuture/scot-diversihire"
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
                          href="https://scot-diversihire.herokuapp.com/"
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
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock} alt="" className="img-fluid" />
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
                  </div>
                  <Grid centered>
                    <Grid.Row columns={2}>
                      <Grid.Column
                        textAlign="center"
                        verticalAlign="middle"
                        className="links"
                        width={5}
                      >
                        <a
                          href="https://github.com/CodeYourFuture/scot-diversihire"
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
                          href="https://scot-diversihire.herokuapp.com/"
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
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock} alt="" className="img-fluid" />
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
                  </div>
                  <Grid centered>
                    <Grid.Row columns={2}>
                      <Grid.Column
                        textAlign="center"
                        verticalAlign="middle"
                        className="links"
                        width={5}
                      >
                        <a
                          href="https://github.com/CodeYourFuture/scot-diversihire"
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
                          href="https://scot-diversihire.herokuapp.com/"
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
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock} alt="" className="img-fluid" />
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
                  </div>
                  <Grid centered>
                    <Grid.Row columns={2}>
                      <Grid.Column
                        textAlign="center"
                        verticalAlign="middle"
                        className="links"
                        width={5}
                      >
                        <a
                          href="https://github.com/CodeYourFuture/scot-diversihire"
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
                          href="https://scot-diversihire.herokuapp.com/"
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
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
