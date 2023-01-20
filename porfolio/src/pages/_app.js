import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// import '@/styles/globals.css'
import "../styles/reset.css";
import "../../public/font/styles.css";

export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

