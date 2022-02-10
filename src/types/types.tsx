interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  created: string;
}

interface useIntersectionObserverOptions {
  root?: null;
  rootMargin?: string;
  threshold?: number;
}

interface pokeData {
  name: string;
  url?: string; //열어봤더니 이미지url이 아니라 detail url이었음
}

interface pokeObj {
  count: number;
  next: string | null;
  previous: string | null;
  results: pokeData[];
}

export type { Todo, useIntersectionObserverOptions, pokeData, pokeObj };
