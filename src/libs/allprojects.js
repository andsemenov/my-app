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
    description: "There will be project -2",
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
    description: "There will be project -3",
    technologies: "There will be tech for project-3",
    githubLink: "http://gitlinkproject-3",
    liveSiteLink: "https://project-3.com/",
  },
];
export default allProjects;
