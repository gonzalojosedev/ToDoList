import React from 'react';
import styled from '@emotion/styled';

//importing components
import Form from './components/Form';

const Header = styled.h1`
    font-size: 30px;
    font-weight: 700;

`;
const Subtitle = styled.h3`
    font-size: 16px;
    font-weight:400;
`;
const Div = styled.div`
  /* border: 2px solid green; */
  height:100%;
`;


function App() {
  return (
    <Div>
      <svg width="31" height="40" viewBox="0 0 31 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.5738 29.5564L14.3598 22.143L9.38663 12.2447L5.66102 17.1835L0.0176049 35.1757C-0.0136343 35.2787 -0.00300986 35.3899 0.0471743 35.4851C0.0973585 35.5804 0.183056 35.652 0.285684 35.6844L13.4834 39.8671C13.68 39.9296 13.8829 39.9699 14.0883 39.9874H14.2017C14.5835 40.0121 14.9667 40.0005 15.3462 39.953L23.2168 39.0113C23.4759 38.9798 23.7266 38.8993 23.9557 38.7742L20.5738 29.5564Z" fill="#5C5A5E"/>
      <path d="M21.8145 22.143L19.3296 14.7192V1.10218L17.209 0.0436072C17.1612 0.0194488 17.1091 0.00499624 17.0557 0.00108373C17.0023 -0.00282877 16.9486 0.00387626 16.8978 0.0208118C16.847 0.0377474 16.8001 0.064578 16.7597 0.0997551C16.7193 0.134932 16.6863 0.177759 16.6626 0.225764L15.6624 2.22261C15.6205 2.30443 15.5512 2.36891 15.4665 2.40477L13.236 3.51145C13.1492 3.55334 13.0808 3.62545 13.0435 3.71423L9.39005 12.2446L14.3598 22.143L20.5738 29.5564L23.9557 38.7707C24.176 38.6463 24.3832 38.5001 24.5743 38.3343C24.6602 38.2655 26.2619 36.7155 26.2619 36.7155L21.8145 22.143Z" fill="#808080"/>
      <path d="M20.5738 4.81063L19.3296 1.1022V14.7193L21.8145 22.143L26.2619 36.7155L30.8501 34.4437C30.911 34.4133 30.9576 34.3604 30.9801 34.2963C31.0025 34.2321 30.9991 34.1617 30.9704 34.1L24.2994 19.665L20.5738 4.81063Z" fill="#5C5A5E"/>
      <path d="M13.1157 29.5564L14.2017 39.9737C14.5835 39.9983 14.9667 39.9868 15.3462 39.9393L23.2167 38.9976C23.4758 38.966 23.7266 38.8855 23.9557 38.7604L20.5738 29.5564L14.3598 22.143L9.39005 12.2447V22.1327L13.1157 29.5564Z" fill="#5C5A5E"/>
      <path d="M26.2619 36.7155L21.8145 22.1429L19.3296 14.7192L14.3598 22.1429L20.5738 29.5564L23.9557 38.7707C24.176 38.6463 24.3833 38.5001 24.5743 38.3342C24.6603 38.2655 26.2619 36.7155 26.2619 36.7155Z" fill="#808080"/>
      <path d="M19.3296 14.7192V1.10218L17.209 0.0436072C17.1612 0.0194488 17.1091 0.00499624 17.0557 0.00108373C17.0023 -0.00282877 16.9486 0.00387626 16.8978 0.0208118C16.847 0.0377474 16.8001 0.064578 16.7597 0.0997551C16.7193 0.134932 16.6863 0.177759 16.6626 0.225764L15.6624 2.22261C15.6205 2.30443 15.5512 2.36891 15.4665 2.40477L13.236 3.51145C13.1492 3.55334 13.0808 3.62545 13.0435 3.71423L9.39005 12.2446L14.3598 22.143L19.3296 14.7192Z" fill="#FF560B"/>
      <path d="M13.1157 29.5564L9.38663 22.1327V12.2447L5.66102 17.1835L0.0176049 35.1757C-0.0136343 35.2787 -0.00300986 35.3899 0.0471743 35.4851C0.0973585 35.5804 0.183056 35.652 0.285684 35.6844L13.4834 39.8671C13.68 39.9296 13.8829 39.9699 14.0883 39.9874H14.2017L13.1157 29.5564Z" fill="#FF560B"/>
      </svg>

      <Header>To do list</Header>
      <Subtitle>¿Qué cosas tenés que terminar hoy?</Subtitle>
      <Form />
    </Div>
  );
}

export default App;
