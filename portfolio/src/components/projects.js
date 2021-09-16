import employeeImg from './pictures/employee.jpg';
import cryptoImg from './pictures/cryptocurrency.png';
import githubEmoji from "./pictures/github.png";
import weatherImg from "./pictures/Weather-icon.png";
import techImg from "./pictures/tech.png";
import sheduleImg from "./pictures/wrkday.png"

const Projects = [
  {
    title: "Employee_Tracker",
    github: "https://github.com/Zi-on/Employee_Tracker",
    deployed: "N/A",
    img: `${employeeImg}`,
    git: `${githubEmoji}`
  },
  {
    title: "Crypto Cash News",
    github: "https://github.com/JManauth/CryptoCashNews",
    deployed: "https://jmanauth.github.io/CryptoCashNews/",
    img: `${cryptoImg}`,
    git: `${githubEmoji}`
  },
  {
    title: "Weather Dashboard",
    github: "https://github.com/Zi-on/Weather_Dashboard",
    deployed: "https://zi-on.github.io/Weather_Dashboard/",
    img: `${weatherImg}`,
    git: `${githubEmoji}`
  },
  {
    title: "TechBlog",
    github: "https://github.com/Zi-on/TechBlog",
    deployed: "https://frozen-gorge-64664.herokuapp.com/",
    img: `${techImg}`,
    git: `${githubEmoji}`
  },
  {
    title: "Work day scheduler",
    github: "https://github.com/Zi-on/Work_day_scheduler",
    deployed: "https://zi-on.github.io/Work_day_scheduler/",
    img: `${sheduleImg}`,
    git: `${githubEmoji}`
  },
];

export default Projects