import styled from 'styled-components'

import  { colors } from '../../../../theme/color'

export const Section = styled.section`
display:flex;
justify-content:center;
margin-top:3rem;
background-color:white;
padding-top:3rem;
padding-bottom:3rem;
@media  (max-width: 767px) {
}
@media (min-width: 768px) and (max-width: 1280px) {
  
}
@media (min-width: 1281px) {

    .flex {
           width:80rem;
        height:50rem;
        .flex-1{
            display:flex;
            justify-content:center;
            .head {
                h2 {
                    font-size:2.4rem;
                    font-weight:900;
                    line-height:1.6rem;
                }
                p {
                    font-size:2rem;
                    padding-top:1rem;
                }
            }

        }

        .flex-2 {
          display:flex;
          justify-content:center;
          .logo {
       width:80rem;
       margin-top:2rem;
       height:40rem;
        border: 1px solid red;
          }

        }

    }


}
`
