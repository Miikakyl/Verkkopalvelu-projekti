import '../styles/searchbar.css'
import react, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SearchProduct from './SearchProduct'
import LoadingIcon from './LoadingIcon'


const Searchbar = () => {
  const [searchInput, setSearhInput] = useState("")
  const [resultCounter, setResultCounter] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [productResults, setProductResults] = useState([])



  useEffect(() => {
    setIsLoaded(false)
    if (searchInput !== "") {
      axios.post('http://localhost:3000/rest_search.php', { searchInput: searchInput }, {
        headers: {
          'Content-type': 'application/json'
        }
      })
        .then((response) => {
          setProductResults(response.data.products.map((product) => [].push = product))
          setResultCounter(response.data.products.length)
          setIsLoaded(true)
        }).catch(error => {
          alert(error)
        })
    }
  }, [searchInput])

  return (
    <div className="searchContainer">
      <div className="inputForm d-flex position-relative" role="search">
        <input value={searchInput} className="searchInput mx-2" type="text" placeholder="Haku" aria-label="Search" onChange={(e) => { setSearhInput(e.target.value) }}>
        </input>
        <button id="searchBtn">
          <svg id="searchIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
      {searchInput !== "" &&
        <div className="searchResult">

          {isLoaded
            ?<>
              {productResults.length !== 0 &&
                <>
                  <h2 className='resultHeader'>Tuotteet</h2>
                  <p className="resultCounter">Haullesi löytyi {resultCounter} tuotetta!</p>
                  {
                    productResults.map((product) =>
                      <SearchProduct name={product.tuotenimi} image={require('../' + product.kuvaosoite)} price={product.hinta} womenLink={product.tuoteosoiteN} menLink={product.tuoteosoiteM} />
                    )
                  }
                </>
              }
              {productResults.length === 0 &&
                <>
                  <h2 className='resultHeader'>Ei tuloksia</h2>
                  <p className="resultCounter">Haullesi ei löytynyt valikoimastamme tuotetta</p>
                </>
              }

            </>
            : <LoadingIcon />
          }

        </div>
      }
    </div>
  );
}

export default Searchbar;