import React from "react";

import "./ImageSearch.css";

function ImageSearch({ handleMakeRequest }) {
  const [state, setState] = React.useState("");

  const onSearchChange = (e) => {
    setState(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleMakeRequest(state);
  };

  return (
    <div className="imageSearch">
      <form className="imageSearch__form">
        <input
          autoComplete="off"
          type="text"
          onChange={onSearchChange}
          name="search"
          placeholder="Search for images here..."
        />
        <img
          onClick={handleSubmit}
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAyMjYgMjI2IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDIyNnYtMjI2aDIyNnYyMjZ6IiBmaWxsPSJub25lIj48L3BhdGg+PHBhdGggZD0iTTExMywyMjZjLTYyLjQwODE4LDAgLTExMywtNTAuNTkxODIgLTExMywtMTEzdjBjMCwtNjIuNDA4MTggNTAuNTkxODIsLTExMyAxMTMsLTExM3YwYzYyLjQwODE4LDAgMTEzLDUwLjU5MTgyIDExMywxMTN2MGMwLDYyLjQwODE4IC01MC41OTE4MiwxMTMgLTExMywxMTN6IiBmaWxsPSIjMWFiYzljIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTEwMi4zNjc0MSw1MC4yNzQ0MWMtMjYuNzA3MzcsMCAtNDguNDA5MiwyMS43MDE4MyAtNDguNDA5Miw0OC40MDkyYzAsMjYuNzA3MzcgMjEuNzAxODMsNDguNDA5MiA0OC40MDkyLDQ4LjQwOTJjMTAuNTY3MjcsMCAyMC4zMzM2NCwtMy40MDM3NyAyOC4yOTgwMiwtOS4xNjU3MWwzNy40NjM3NCwzNy4zNzQ3NWw4LjAwODg4LC04LjAwODg3bC0zNy4wMTg4LC0zNy4xMDc3OWM3LjI3NDczLC04LjQ3NjA2IDExLjY1NzM2LC0xOS40NzcxNCAxMS42NTczNiwtMzEuNTAxNThjMCwtMjYuNzA3MzcgLTIxLjcwMTgzLC00OC40MDkyIC00OC40MDkyLC00OC40MDkyek0xMDIuMzY3NDEsNTUuOTY5NjFjMjMuNjI2MTgsMCA0Mi43MTQsMTkuMDg3ODIgNDIuNzE0LDQyLjcxNGMwLDIzLjYyNjE4IC0xOS4wODc4Miw0Mi43MTQgLTQyLjcxNCw0Mi43MTRjLTIzLjYyNjE4LDAgLTQyLjcxNCwtMTkuMDg3ODIgLTQyLjcxNCwtNDIuNzE0YzAsLTIzLjYyNjE4IDE5LjA4NzgyLC00Mi43MTQgNDIuNzE0LC00Mi43MTR6Ij48L3BhdGg+PC9nPjxwYXRoIGQ9Ik0xMTMsMjI2Yy02Mi40MDgxOCwwIC0xMTMsLTUwLjU5MTgyIC0xMTMsLTExM3YwYzAsLTYyLjQwODE4IDUwLjU5MTgyLC0xMTMgMTEzLC0xMTN2MGM2Mi40MDgxOCwwIDExMyw1MC41OTE4MiAxMTMsMTEzdjBjMCw2Mi40MDgxOCAtNTAuNTkxODIsMTEzIC0xMTMsMTEzeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxwYXRoIGQ9Ik0xMTMsMjIxLjQ4Yy01OS45MTE4NSwwIC0xMDguNDgsLTQ4LjU2ODE1IC0xMDguNDgsLTEwOC40OHYwYzAsLTU5LjkxMTg1IDQ4LjU2ODE1LC0xMDguNDggMTA4LjQ4LC0xMDguNDhoMGM1OS45MTE4NSwwIDEwOC40OCw0OC41NjgxNSAxMDguNDgsMTA4LjQ4djBjMCw1OS45MTE4NSAtNDguNTY4MTUsMTA4LjQ4IC0xMDguNDgsMTA4LjQ4eiIgZmlsbD0ibm9uZSI+PC9wYXRoPjwvZz48L3N2Zz4="
        />
      </form>
    </div>
  );
}

export default ImageSearch;
