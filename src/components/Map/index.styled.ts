import styled from 'styled-components';

export const MapContainer = styled.div<{styleMap?: boolean}>`
  display: flex;
  justify-content: center;
  ${({styleMap}) => styleMap && `
    height: 100vh;
    width: 100%;
  `}
`;
