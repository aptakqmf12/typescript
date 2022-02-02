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
  url: string;
  img?: string;
}

interface pokeObj {
  count: number;
  next: string | null;
  previous: string | null;
  results: pokeData[];
}

export type { Todo, useIntersectionObserverOptions, pokeData, pokeObj };
