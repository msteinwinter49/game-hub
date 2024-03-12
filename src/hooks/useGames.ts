import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Game } from '../services/game-service';

interface GamesResp {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState ('');
  const [isLoading, setIsLoading ] = useState(false);

  useEffect ( () => {
    const controller = new AbortController ();
    setIsLoading (true);
    apiClient.get<GamesResp>('/games?page_size=6', { signal: controller.signal })
      .then (res => {
        setIsLoading (false);
        setGames (res.data.results)
      })
      .catch ((err) => {
        setIsLoading (false);
        if (err instanceof CanceledError) return;
        setError (err.message)});
    return () => controller.abort ();
  }, [])

  return { games, error, isLoading }

}

export default useGames;