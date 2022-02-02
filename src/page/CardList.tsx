import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useIntersectionObserverOptions, pokeData, pokeObj } from "../types/types";
import axios, { AxiosResponse } from "axios";
import CardBox from "../components/CardBox";

const CardList = () => {
  // 인피니티 스크롤 관련 state
  const [count, setCount] = useState<number>(0);
  const [target, setTarget] = useState<HTMLDivElement | null | undefined>(null);
  //포켓몬 데이터 관련된 state
  const [pokeData, setPokeData] = useState<pokeData[]>([]);

  const fetchData = async (startNum: number): Promise<AxiosResponse<pokeObj>> => {
    //startNum부터 5개씩 데이터를 받아옴
    const res = await axios.get<pokeObj>(`https://pokeapi.co/api/v2/pokemon/?offset=${startNum}&limit=5`);
    return res;
  };
  // 최초 렌더링시 0~5개의 데이터를 받아옴
  useEffect(() => {
    fetchData(0).then((res) => {
      setPokeData(res.data.results);
    });
  }, []);

  const option: useIntersectionObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const callback: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      //target에 겹쳤을때
      if (entry.isIntersecting) {
        //target에 겹쳤다면 일단 관측을 중단시키고
        observer.disconnect();
        // count를 증가시킨뒤
        setCount(count + 5);
        // 증가된 count를 넘겨서 다음번째 data를 받아와서 뒤에 붙임
        fetchData(count).then((res) => {
          setPokeData([...pokeData, ...res.data.results]);
        });
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
      <div className="infinite-container">
        {pokeData?.map((data, i) => {
          return <CardBox key={i} id={i} name={data.name} setTarget={setTarget} />;
        })}
      </div>
    </>
  );
};

export default CardList;
