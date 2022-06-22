import {Context} from "../index";
import {useLocation, useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";

export default function useSearch() {

    const {States} = useContext(Context)

    const location = useLocation()



    const navigate = useNavigate()

    function handlePress(e) {
        if(e.key === 'Enter') {
            States.setModalSearch(false)
            if (location.pathname === '/search/') {
                States.products_page = States.products_page_input
                States.searchValue_page = States.searchValue_page_input
                if (States.searchValue_page_input === '') {
                    States.products_page = []
                }
            } else {
                States.products_page = States.products
                States.searchValue_page = States.searchValue
                States.products_page_input = States.products
                States.searchValue_page_input = States.searchValue
            }
            navigate(`/search/?search=${e.target.value}`)
        }
    }

    useEffect(() => {
        if (location.pathname !== '/search/') {
            States.isSearchPage = false
        }
        if (location.pathname === '/search/') {
            States.isSearchPage = true
        }
    }, [location])


    return {
        States,
        navigate,
        handlePress,
        location
    }
}

