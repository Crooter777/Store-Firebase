import {Context} from "../index";
import {useLocation, useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";

export default function useSearch() {

    const {States} = useContext(Context)

    const location = useLocation()

    if (location.pathname === '/search/') {
        States.isSearchPage = true
    }

    const navigate = useNavigate()

    function handlePress(e) {
        if(e.key === 'Enter') {
            States.setModalSearch(false)
            navigate(`/search/?search=${ e.target.value}`)
        }
    }

    useEffect(() => {
        if (location.pathname !== '/search/') {
            States.isSearchPage = false
        }
    }, [location])


    return {
        States,
        navigate,
        handlePress,
    }
}

