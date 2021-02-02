import React from "react";
import { Grid, Icon } from "semantic-ui-react";

//import stock
//import stock1 from "../img/project1/image1.jpg";
import stock2 from "../img/project2/image1.jpg";
import stock3 from "../img/project3/image1.jpg";
import stock4 from "../img/project4/image1.jpg";
import stock5 from "../img/project5/image1.jpg";
import stock6 from "../img/project6/image1.jpg";

let listOfImages = [];

class Portfolio extends React.Component {
  importAll(r) {
    return r.keys().map(r);
  }
  componentWillMount() {
    listOfImages = this.importAll(
      require.context("../img/project1/", false, /\.(png|jpe?g|svg)$/)
    );
  }

  render() {
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
                <a href={listOfImages[0]} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={listOfImages[0]} alt="" className="img-fluid" />
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
                </a>
                {listOfImages.slice(1).map((image, index) => (
                  <a
                    href={image}
                    data-lightbox="gallery-vmarine"
                    style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                ))}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock2} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={stock2} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem Ipsum</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap Webpack SmoothScrolling
                            VanillaJS
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
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
                </a>
                {/*            <a
                  href={stock1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
                <a
                  href={stock2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock3} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stock3} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem Ipsum</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap Webpack ReactJS
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
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
                </a>
                {/*  <a
                  href={stock1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
                <a
                  href={stock2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock4} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={stock4} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem Ipsum</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Bootstrap ReactJS GoogleAPI
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
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
                </a>
                {/*  <a
                  href={stock1}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
                <a
                  href={stock2}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock5} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={stock5} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem Ipsum</h2>
                        <div className="w-more">
                          <span className="w-ctegory">MERN</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
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
                </a>
                {/*   <a
                  href={stock1}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
                <a
                  href={stock2}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock6} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock6} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem Ipsum</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap MERN
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
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
                </a>
                {/*  <a
                  href={stock1}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
                <a
                  href={stock2}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
