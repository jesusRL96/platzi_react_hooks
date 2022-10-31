import React, { useState, useEffect, useReducer, useMemo, useRef} from 'react';

const Search = ({search, searchInput, handleSearch}) => {
	return (
			<div className="search">
				<input type="text" name="search" id="search" ref={searchInput} onChange={handleSearch} />
			</div>
	)
}

export default Search;
