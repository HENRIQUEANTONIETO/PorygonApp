import axios from "axios";
import HttpClient from "../application/HttpClient";

export default class AxiosHttpClient implements HttpClient {
  async get(url: string): Promise<any> {
    let response;
    try {
      response = await axios.get(url);
      if (response.status === 200) {
        return response;
      }
    } catch (e: any) {
      return { status: e.response.status };
    }
  }
}
