import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import usePokemonInfo from "../../../hooks/SWR/usePokemonInfo";
import PolonTilt from "@arthurpolon/tilt.it";

import * as S from "../styles";

import { TPokeCardProps } from "../types";
import { PokeCardSkeleton, SkeletonDetails } from "./skeleton";
import { useRef } from "react";
import PokemonType from "../../PokemonType";

function PokeCard({ pkmName }: TPokeCardProps) {
  // está desestruturado, poderia ser apenas props e depois usar props.pkmName
  const { pokemonInfo } = usePokemonInfo(pkmName);

  const ref = useRef(null); // Polon tilt

  if (!pokemonInfo) {
    // Renderizar Skeletons
    return (
      <PokeCardSkeleton>
        <SkeletonDetails>
          <Skeleton width={50} height={25} borderRadius={20} />
          <Skeleton width={120} height={25} borderRadius={20} />
          <Skeleton width={200} height={200} borderRadius="50%" />
          <Skeleton width={60} height={22} borderRadius={10} />
        </SkeletonDetails>
      </PokeCardSkeleton>
    );
  }

  // function renderPokemonType () { // Renderizar os tipos
  //   return (
  //     <S.TypeContainer >
  //       {/* o '?' retorna undefined ao invés de erro ao tentar ler um objeto undefined */}
  //       {pokemonInfo?.types.map(({type}) => { // DESESTRUTUREI A PROPRIEDADE TYPE DENTRO DO OBJETO TYPES
  //         return <S.TypeBox type={type.name} key={type.name}>{type.name}</S.TypeBox>
  //       })}
  //     </S.TypeContainer>
  //   )
  // }

  const dexNumber = pokemonInfo.id.toString().padStart(3, "0"); // Formatar os IDs em Três digitos

  const poke_types = pokemonInfo.types.map(({ type }) => type.name); // DESESTRUTUREI A PROPRIEDADE TYPE DENTRO DO OBJETO TYPES

  return (
    <S.PokeCard typesArray={poke_types}>
      {/*...PolonTilt(ref, {rotationAmount: 0})} ref={ref*/}
      <S.CardDetails>
        <S.DexNumber>#{dexNumber}</S.DexNumber>

        <h1>{pokemonInfo.name}</h1>

        <S.ImageBackground>
          <Image
            className="pokemon-image"
            src={pokemonInfo.sprites.other["official-artwork"].front_default}
            width={200}
            height={200}
            alt={pokemonInfo.name}
          />
        </S.ImageBackground>

        <PokemonType types={pokemonInfo.types} />
      </S.CardDetails>
    </S.PokeCard>
  );
}

export default PokeCard;
