import {Context} from "../index";
import {useLocation, useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";

export default function useSearch() {

    const {States} = useContext(Context)
    const {Search} = useContext(Context)

    const navigate = useNavigate()

    function handlePress(e) {
        if(e.key === 'Enter') {
            States.setModalSearch(false)
            Search.initSearch(States.searchValue)
            navigate(`/search/?search=${e.target.value}`)
        }
    }

    function handlePressMobile(e) {
        if(e.key === 'Enter') {
            States.setModalMobile(false)
            States.setModalMobileBack(false)
            States.setModalSearch(false)
            Search.initSearch(States.searchValue)
            navigate(`/search/?search=${ e.target.value}`)
        }
    }

    return {
        States,
        navigate,
        handlePress,
        handlePressMobile
    }
}

