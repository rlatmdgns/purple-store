import styled from 'styled-components';

export const CirclesLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  width: 25px;
  height: 25px;
  background: rgba(255, 204, 51, 0.9);
  border-radius: 100%;
  animation: circles-loader 3s infinite ease-in-out;
  transform-origin: 50% 100%;

  &:before {
    background: rgba(255, 102, 0, 0.6);
    border-radius: 100%;
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    top: 18.75px;
    left: -10.82532px;
  }
  &:after {
    background: rgba(255, 51, 0, 0.4);
    border-radius: 100%;
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    top: 18.75px;
    left: 10.82532px;
  }
  @keyframes circles-loader {
    0% {
      transform: rotate(-720deg);
    }
    50% {
      transform: rotate(720deg);
    }
  }
`;
