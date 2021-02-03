const allProjects = [
  {
    contextOfImages: require.context(
      "../img/project1/",
      false,
      /\.(png|jpe?g|svg)$/
    ),
    description: "Diversihire platform",
    technologies: "HTML5 CSS3 Bootstrap ReactJS",
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
    technologies: "There will be tech for project-2",
    githubLink: "http://gitlinkproject-2",
    liveSiteLink: "https://project-222.com/",
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
