import axios from "axios";
import { api } from "./axios.instance"
import translate from "google-translate-api-x";

export const getProducts = async () => {
  const { data } = await api.get('/products')
  return data
}

export const translateTextFns = async (text: string, target: string) => {
    const response = await axios.post("/api/translate", {
        text,
        target,
    });
    return response.data.translatedText;
  };