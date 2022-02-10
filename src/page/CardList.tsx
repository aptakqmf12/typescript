import React, { useRef, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useIntersectionObserverOptions, pokeData, pokeObj } from "../types/types";
import axios, { AxiosResponse } from "axios";
import CardBox from "../components/CardBox";

const InfiniteContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background-color: #d60e43;
  width: 1280px;
  margin: 0 auto;
  @media ${(props) => props.theme.Device.tablet} {
    width: 100%;
  }
`;

const SkeletonCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(33% - 9px);
  height: 300px;
  margin: 5px;
  border: 2px black solid;
  background-color: #eee;
  font-weight: bold;
  text-align: center;
  @media ${(props) => props.theme.Device.tablet} {
    width: calc(49% - 9px);
  }
  @media ${(props) => props.theme.Device.mobile} {
    width: calc(100% - 9px);
  }
  .skeletonImg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 96px;
    height: 96px;
  }
`;

const CardList = () => {
  // 인피니티 스크롤 관련 state
  const [target, setTarget] = useState<HTMLDivElement | null | undefined>(null);
  const countRef = useRef<number>(0);
  //포켓몬 데이터 관련된 state
  const [isData, setIsData] = useState(false);
  const [pokeData, setPokeData] = useState<pokeData[]>([]);

  const fetchData = async (startNum: number): Promise<AxiosResponse<pokeObj>> => {
    //startNum부터 18개씩 데이터를 받아옴
    const res = await axios.get<pokeObj>(`https://pokeapi.co/api/v2/pokemon/?offset=${startNum}&limit=10`);

    return res;
  };

  // 최초 렌더링시 0~0개의 데이터를 받아옴
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData(0).then((res) => {
        setPokeData(res.data.results);
      });
      setIsData(false);
    }, 1300);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const option: useIntersectionObserverOptions = {
    root: null,
    rootMargin: "5px",
    threshold: 0.3,
  };

  const callback: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      //target에 겹쳤을때
      if (entry.isIntersecting) {
        countRef.current += 10;
        // 증가된 count를 넘겨서 다음번째 data를 받아와서 뒤에 붙임
        fetchData(countRef.current).then((res) => {
          setPokeData([...pokeData, ...res.data.results]);
        });
        alert("추가됨");
      }
    });
  };

  useEffect(() => {
    if (!target) return;
    const observer = new IntersectionObserver(callback, option);
    observer.observe(target);

    return () => observer.unobserve(target);
  });

  return (
    <>
      <InfiniteContainer>
        {pokeData?.map((data, i) => {
          return (
            <>
              <CardBox key={i} id={i} name={data.name} setTarget={setTarget} />
            </>
          );
        })}
        {!isData ? (
          <>
            {Array.from({ length: 9 }).map((e) => {
              return (
                <SkeletonCard>
                  <p>?</p>
                  <p>????</p>
                  <p className="skeletonImg">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png`}
                      alt="pokemon"
                    />
                  </p>
                </SkeletonCard>
              );
            })}
          </>
        ) : null}
      </InfiniteContainer>
    </>
  );
};

export default CardList;
