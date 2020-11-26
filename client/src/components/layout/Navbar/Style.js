import styled from 'styled-components'

import  { colors } from '../../../theme/color'

export const Nav = styled.nav`
display:flex;
justify-content:center;
box-shadow: 0 1px 1px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.19);
padding-bottom:1rem;
@media  (max-width: 767px) {
}
@media (min-width: 768px) and (max-width: 1280px) {
    position:fixed;
    width:100%;
    top:0%;
z-index:1;
            .flex {
                width:48em;    
             display:flex;
justify-content:space-between;
                  .left {
                      margin-top:1.4rem;
                      width:16rem;
                       
                       h2 {
                           font-size:2.4rem;
                       }
                  }
            }
            .right {
                margin-top:4.5rem;
        
    .navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #eceff1;
}
.navbar__link {
    margin: 1em;
    
    /* font-family: 'Roboto',sans-serif; */
    cursor: pointer;
    -webkit-text-decoration: none;
    text-decoration: none;
    -webkit-letter-spacing: .3em;
    -moz-letter-spacing: .3em;
    -ms-letter-spacing: .3em;
   
    text-indent: .3em;
    color:  white;
    border-bottom: 3px solid transparent
}
.navbar__link:hover {
  transform: translateY(-2px);
}
.navbar__link--active {
    color: ${colors.primary.pink1};
  transition: border-bottom .5s ease-in-out;
}
button {
    background-color:${colors.primary.pink1};
    color:${colors.primary.white};
    border: none;
  
    padding: 0.5rem 1rem;
   
    border-radius:10px;
}
            
}
}
@media (min-width: 1281px) {
    position:fixed;
    width:100%;
    top:0%;
z-index:1;
            .flex {
                width:80em;    
             display:flex;
justify-content:space-between;

                  .left {
                      margin-top:1rem;
                 
                   
                      display:flex;
                      justify-content:center;
                      img {
                        width: 7rem;
    height: 7rem;
                      }
                      .data {
                          display:flex;
                          justify-content:center;
                          flex-direction: column;
                      h2 {
                        margin-left:1rem;
                           font-size:2.4rem;
                       }
                       h3 {
                           text-align:center;
                       }
                      }
                  }
            }
            .right {
                margin-top:4rem;
        
    .navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #eceff1;
}
.navbar__link {
    margin: 1em;
    font-size: 1.3em;
    /* font-family: 'Roboto',sans-serif; */
    cursor: pointer;
    -webkit-text-decoration: none;
    text-decoration: none;
    
    text-indent: .3em;
    color:  ${colors.primary.dark1};;
    font-weight:900;
    border-bottom: 3px solid transparent
}
.navbar__link:hover {
  transform: translateY(-2px);
}
.navbar__link--active {
    color: ${colors.primary.dark};
  transition: border-bottom .5s ease-in-out;
}
button {
    background-color:${colors.primary.pink1};
    color:${colors.primary.white};
    border: none;
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    margin-left: 2rem;
    border-radius:10px;
}
            
}
}
`