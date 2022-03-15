import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: #21325E;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeaderWrapper = styled.div`
    min-height: 60px;
    width: 100%;
    background-color: #F0F0F0;
    padding: 5px 30px;
    text-align: center;
`;

export const BodyWrapper = styled.div`
    width: 90%;
    max-width: 1000px;
    background-color: #F0F0F0;
    opacity: 70%;
    border-radius: 8px;
    padding: 5px 30px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const FooterWrapper = styled.div`
    bottom: 0px;    
    height: 60px;
    width: 100%;
    background-color: #F0F0F0;
    padding: 5px 30px;
    text-align: center;
`;

export const Text = styled.p`
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-family: monospace;
`;

export const LogoImageIcon = styled.img`
    height: 30px;
    width: 30px;
    background-color: #F0F0F0;
`;
