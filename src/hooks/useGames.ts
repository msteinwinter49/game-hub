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

  useEffect ( () => {
    const controller = new AbortController ();
    apiClient.get<GamesResp>('/games?page_size=6', { signal: controller.signal })
      .then (res => setGames (res.data.results))
      .catch ((err) => {
        if (err instanceof CanceledError) return;
        setError (err.message)});
    return () => controller.abort ();
  }, [])

  return { games, error }

}

export default useGames;