import React from "react";

const Searchable = ({
  searchTerm,
  searchValue,
  setIsLoading,
  setSearchResults,
}) => {
  return (
    <>
      <a
        href="#"
        onclick={async (event) => {
          event.preventDefault();
          setIsLoading(true);
          try {
            const data = await fetchQueryResultsFromTermAndValue(
              searchTerm + searchValue
            );
            setSearchResults(data);
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }
        }}
      >
        WHAT GOES IN HERE
      </a>
    </>
  );
};

export default Searchable;
