import {  createGlobalStyle } from "styled-components";

import pala from './comman/Comfortaa-VariableFont_wght.ttf';
import pala2 from './comman/Courgette-Regular.ttf';
import {colors } from './color';




 export default   createGlobalStyle`

 @font-face {
  font-family: Comfortaa  ;
  src: url(${pala}) format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: Cour  ;
  src: url(${pala2}) format('truetype');
  font-weight: normal;
  font-style: normal;
}
a { 
  text-decoration: none; 
  color:${colors.button.darkBrown};
  font-family:Comfortaa;
} 


  body {
  
      font-family:Comfortaa;
      overflow-x: hidden;
       background-color:rgb( 249, 248, 246);
      ::-webkit-scrollbar {
  width: 10px;
}

/* Track */

 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${colors.button.brown}; 
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${colors.button.darkBrown}; 
}
      
  }
  ul {
    list-style: none;
    li {
    font-family:Comfortaa;
    cursor: pointer;

  }
  }
  img {
  cursor: pointer;
}

button {
  cursor: pointer;
}
 

  h1 {
    font-size: 1.65rem;
    line-height: var(--line-height-lg);
  }

  h2 {
    font-size: 1.4rem;
    line-height: var(--line-height-lg);
    color:${colors.primary.grey};
  }

  h3 {
    font-size: 1.2rem;
    line-height: var(--line-height-lg);
  }


  h4 {
    font-size: 1rem;
    line-height: var(--line-height-md);
  }
  h5 {
    font-size: 0.75;
    line-height: var(--line-height-md);
  }

  h6 {
    font-size: 0.6rem;
    line-height: var(--line-height-md);
  }

  p {
    font-size: 0.9rem;
    line-height: var(--line-height-md);
    color: rgb(88, 82,84);
  }
  select {
    font-family:Comfortaa;
  }
  
  .date {
    font-family:Comfortaa;
  }
  .card {
    border-radius:10px;
  }

  button {
border-radius:5px;
font-family:Comfortaa;
  }
  input {
    font-family:Comfortaa;
    border:1px solid #EFEAE4;
    background-color:#FFFFFF;
  }
  span {
    font-family:Comfortaa;
  }
  i {
    color:${colors.button.darkBrown};
  }
  @media only screen and (max-width: 767px) {
    body {
      overflow-x: hidden;
    }
  }

  @media only screen and (min-width: 768px) {
    body {
      overflow-x: hidden;
    }
    h1 {
      font-size: 1.75rem;
    }

    h2 {
      color:${colors.primary.grey};
    }

    h3 {
      font-size: 1.25rem;
    }
  }
  a { 
    text-decoration: none; 
    color:${colors.button.darkBrown};
    font-family:Comfortaa;
} 
button {
  font-family: Comfortaa;
}

li {
  cursor: pointer;
}
img {
  cursor: pointer;
}

 `;









