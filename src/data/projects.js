import project1 from '../assets/kprm.jpg';
import project2 from '../assets/eatEasy.jpg';
import project3 from '../assets/crwen-shop.jpg';
import project4 from '../assets/Signup.png';
import project5 from '../assets/project5.png';


export const myProjects = [
    {
        id : 1,
        image : project4,
        title : 'Hirros',
        text : [
            'I Build the front end for this WebApp',
            'Using NextJS',
            'Using ApolloJs for fetch the data from the backend (graphQl)',
            'Use Ant Design as A React UI Library'
        ],        
        technolgieUsed: 'NextJs, ApolloJs, Sass, AntD',
        projectLink : 'https://www.hirros.com/'
    },
    {
      id : 2,
      image : project5,
      title : 'TSCL',
      text : [
          'A Static Website',
          'Using NextJS',
          'Using Sass for the design',
          'Responsive Website'
      ],        
      technolgieUsed: 'NextJs, Sass',
      projectLink : 'https://tscl.vercel.app/'
  },
    {
        id : 3,
        image : project2,
        title : 'Eat Easy App',
        text : [
            'A Single Page Application with ReactJs',
            'Using StyledComponent for the styles',
            'Using ReduxJs For The State Management',
            'Using Firebase for the database'
        ],
        technolgieUsed: 'ReactJs, ReduxJs, Firebase, Styled-components',
        projectLink : 'https://github.com/medIheb20/EatEasy-Delivery-Food'
    },
    {
        id : 4,
        image : project1,
        title : 'Kprm Company',
        text : [
            'A Simple Html CSS Js Website',
            'Using Bootstrap for the styles',
            'Using Javascript For some extensions'
        ],
        technolgieUsed: 'Javascript, Html, Css, Bootstrap',
        projectLink : 'https://kprm.co.za/'
    },
    {
        id : 5,
        image : project3,
        title : 'Crwen Clothes Shop',
        text : [
            'A Single Page Application with ReactJs',
            'Using Scss for the styles',
            'Using ReduxSaga For The State Management',
            'Using Firebase for some backend'
        ],        
        technolgieUsed: 'ReactJs, ReduxJs, Firebase, Sass',
        projectLink : 'https://crwn-live.herokuapp.com/'
    },
    
]