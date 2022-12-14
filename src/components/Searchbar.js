import '../styles/searchbar.css'
import react, { useState, useEffect} from 'react'
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
      axios.post('https://www.students.oamk.fi/~n1kymi00/Verkkopalvelu-backend/rest_search.php', { searchInput: searchInput }, {
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
        <input className="searchInput mx-2" type="text" placeholder="Haku" aria-label="Search" onChange={(e) => { setSearhInput(e.target.value) }}>
        </input>

        {searchInput !== "" &&
          <button className="searchBtns" onClick={() => setSearhInput("")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-x-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        }
        {searchInput === "" &&
          <button className="searchBtns">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        }
      </div>
      {searchInput !== "" &&
        <div className="searchResult">

          {isLoaded
            ? <>
              {productResults.length !== 0 &&
                <>
                  <h2 className='resultHeader'>Tuotteet</h2>
                  <p className="resultCounter">Haullesi l??ytyi {resultCounter} tuotetta!</p>
                  {
                    productResults.map((product) =>
                      <SearchProduct name={product.tuotenimi} image={require('../' + product.kuvaosoite)} price={product.hinta} womenLink={"../~n1kymi00"+ product.tuoteosoiteN} menLink={"../~n1kymi00"+ product.tuoteosoiteM} />
                    )
                  }
                </>
              }
              {productResults.length === 0 &&
                <>
                  <h2 className='resultHeader'>Ei tuloksia</h2>
                  <p className="resultCounter">Haullesi ei l??ytynyt valikoimastamme tuotetta</p>
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