// import '@/styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    // baseURL 입력
    uri: "http://practice.codebootcamp.co.kr/graphql",
    // 데이터를 받아올 때 잠시 저장할 임시공간
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      {/* 보여지는 화면은 Component에 들어온다  */}
      {/* 01-01-qqq/index.js 페이지가 바로 실행되는것이 아니라 _app.js 페이지에 병합되서 실행된다 */}
      {/* 그래서 해당 _app.js에서 설정하는것이 모든 화면에서 적용된다 */}
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

