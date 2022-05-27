import { darken } from "polished";
import styled from "styled-components";
import { TPokemonTypes } from "~types/TPokemonTypes";

// Evolution Container

export const EvolutionContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  padding: 1.5rem;

  max-height: 344px;

  overflow-y: auto;
`;

export const EvoColumn = styled.div<{ isSticky?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;

  padding-bottom: 1.5rem;

  ${(props) => {
    if (props.isSticky) {
      return "position: sticky; top: 0px";
    }
  }}
`;

export const ArrowColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

// Arrow + Evolution Card

export const ArrowAndCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

// Evolution Card

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  margin-bottom: 1.5rem;
`;

export const ImageContainer = styled.div<{ type: TPokemonTypes }>`
  background: ${(props) => props.theme.typeColors[props.type]};
  display: flex;
  border-radius: 50%;
`;

export const InfoContainer = styled.div<{ type: TPokemonTypes }>`
  background: ${(props) => props.theme.typeColors[props.type]};
  color: ${(props) => props.theme.colors.text};

  padding: 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-transform: capitalize;

  border-radius: 10px;
`;

export const NameContainer = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
`;
