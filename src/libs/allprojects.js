const allProjects = [
  {
    contextOfImages: require.context(
      "../img/project1/",
      false,
      /\.(png|jpe?g|svg)$/
    ),
    description: "Diversihire platform",
    technologies: "PostgreSQL Express React Node Html CSS Semantic UI React",
    githubLink: "https://github.com/andsemenov/scot-diversihire",
    liveSiteLink: "https://diversihire.herokuapp.com/",
  },
  {
    contextOfImages: require.context(
      "../img/project2/",
      false,
      /\.(png|jpe?g|svg)$/
    ),
    description: "TV Show DOM project",
    technologies: "JavaScript HTML CSS",
    githubLink: "https://github.com/andsemenov/tv-show-dom-project",
    liveSiteLink: "https://cyf-andsemenov-tv.netlify.app/",
  },
  {
    contextOfImages: require.context(
      "../img/project3/",
      false,
      /\.(png|jpe?g|svg)$/
    ),
    description: "Quiz",
    technologies: "JavaScript HTML CSS",
    githubLink: "https://github.com/andsemenov/quiz",
    liveSiteLink: "https://andsemenov.github.io/quiz/",
  },
];
export default allProjects;
