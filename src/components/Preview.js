import React from "react";

import { fetchQueryResultsFromURL } from "../api";

const Preview = (props) => {
  const {
    searchResults,
    setSearchResults,
    setFeaturedResult,
    setIsLoading,
  } = props;
  const { info, records } = searchResults;

  async function fetchPage(pageUrl) {
    setIsLoading(true);

    try {
      const results = await fetchQueryResultsFromURL(pageUrl);
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <aside id="preview">
      <header className="pagination">
        <button
          disabled={!info.prev}
          className="previous"
          onClick={() => fetchPage(info.prev)}
        >
          Previous
        </button>

        <button
          disabled={!info.next}
          className="next"
          onClick={() => fetchPage(info.next)}
        >
          Next
        </button>
      </header>
      <section className="results">
        {records.map((info, index) => (
          <div
            key={index}
            className="object-preview"
            onClick={(event) => {
              event.preventDefault();
              setFeaturedResult(info);
            }}
          >
            {info.primaryimageurl ? (
              <img src={info.primaryimageurl} alt={info.description} />
            ) : null}
            {info.title ? <h3>{info.title}</h3> : <h3>MISSING INFO</h3>}
          </div>
        ))}
      </section>
    </aside>
  );
};

export default Preview;
