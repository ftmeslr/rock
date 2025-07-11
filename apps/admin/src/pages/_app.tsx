import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MyButton } from 'ui';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <div>
      <h1>Admin Panel</h1>
      <MyButton />
    </div>
  );

}
