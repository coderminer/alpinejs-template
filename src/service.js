import axios from "axios";

const service = axios.create({
  baseURL:
    import.meta.env.MODE === "production"
      ? "http://aider.meizu.com/app/weather"
      : "/api",
});


export const get = (url) => service.request({ url: url, method: 'GET'})
