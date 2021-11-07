import styled from 'styled-components';

export const MapContainer = styled.div<{styleMap?: boolean}>`
  display: flex;
  justify-content: center;
  ${({styleMap}) => styleMap && `
    height: 60vh;
    width: 80%;
  `}
`;
