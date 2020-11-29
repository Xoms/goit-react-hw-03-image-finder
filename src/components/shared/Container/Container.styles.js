import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 290px;
    padding: 15px 15px;
    margin: 0 auto;

    @media sreen and (min-width: 450px){
        width: 450px;
    }

    @media sreen and (min-width: 768px){
        width: 768px;
    }

    @media sreen and (min-width: 1200px){
        width: 1200px;
    }
`;
