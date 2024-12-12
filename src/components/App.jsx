import ProductListing from "./productListing";
import HomeCarousel from "./HomeCarousel";
import Header from "./header";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState('');
  return (
    <>
      <Header setSearchText={setSearchText}></Header>
      <HomeCarousel></HomeCarousel>
      <ProductListing searchText={searchText}></ProductListing>
    </>
  );
}

export default App;
