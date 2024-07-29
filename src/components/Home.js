import React from "react";
import SearchPlace from "./search/SearchPlace";
import ImageBaseHome from "./result/ImageBaseHome";
import { useNavigate } from "react-router-dom";




const Home = () => {

    const navigate = useNavigate();

    const pageNum = Math.floor(Math.random() * 10482);

    const clickPage = (pageNum) => {
        const LinkTo = `/ImageBaseClick/${pageNum}`;
        navigate(LinkTo);
    }

    return (
        <>
            <div className="main">
                <p className="homePage">
                    Welcome to <br></br>
                    The Art Institute Of Chicago. </p>
                <p className="homePage2">  You can search museum by artist, artwork title,
                    place of origin, 
                    medium, year...<br></br>
                    For best results use " ".
                    Or choose a random page on <span className="button"
                    onClick={() => clickPage(pageNum)}>click</span>
                </p>
            </div>
            <ImageBaseHome />
        </>
    )

}
export default Home;