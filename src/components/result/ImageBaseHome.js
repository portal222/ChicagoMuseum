import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import GlobalContext from "../GlobalContext";
import Loader from "../Loader";
import Photos from "./Photos";
import TableRow from "./TableRow";
import SearchPlace from "../search/SearchPlace";
import BackToTop from "../BackToTop";

const ImageBaseHome = () => {

    const [error, setError] = useState(null);
    const [image, setImage] = useState([]);
    const [page, setPage] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const params = useParams();
    const pageNum = params.pageNum;

    const globalCtx = useContext(GlobalContext);
    const searchStringValue = globalCtx.searchStringValue;

    const navigate = useNavigate();

    const clickPage = (pageNum) => {
        const LinkTo = `/ImageBaseClick/${pageNum}`;
        navigate(LinkTo);
    }

    const clickArtist = (artistTitle) => {
        const LinkTo = `/artist/${artistTitle}`;
        navigate(LinkTo);
    }

    useEffect(() => {
        getImage();
    }, [])

    const getImage = async () => {
        const url = `https://api.artic.edu/api/v1/artworks?page=1`;

        try {
            const response = await axios.get(url)
            const data = response.data;

            setImage(data.data);
            setPage(data.pagination);
            setIsLoading(false);

        } catch (err) {
            setError(err);
        }
    };

    if (isLoading) {
        return (
            <table className="main">
                <tbody>
                    <tr>
                        <td className="home">
                            <SearchPlace />
                        </td>
                    </tr>
                    <tr>
                        <td className="home">
                            <Loader />
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }

    return (
        <>
            <table className="main">
                <thead>
                    <tr>
                        <td className="home">
                            <SearchPlace />
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <div className="butHold">
                                <div className="butPage"
                                    onClick={() => clickPage(page.current_page - 10)}>-10</div>
                                <div className="butPage"
                                    onClick={() => clickPage(page.current_page - 1)}>Prev</div>
                                <div className="pageNum">{page.current_page}</div>
                                <div className="butPage"
                                    onClick={() => clickPage(page.current_page + 1)}>Next</div>
                                <div className="butPage"
                                    onClick={() => clickPage(page.current_page + 10)}>+10</div>
                            </div>
                        </td>
                    </tr>

                </thead>
                {image.map((museum) => (
                    <tbody key={museum.id}>
                        <tr>
                            <Photos photos={museum.image_id} />
                        </tr>
                        <tr>
                            <td className="name">
                                {museum.title + " " + museum.date_display}
                            </td>
                        </tr>
                        <tr>
                            <td className="artist"
                                onClick={() => clickArtist(museum.artist_title)}>
                                {museum.artist_display}
                            </td>
                        </tr>
                        <tr>
                            <td className="text">
                                {museum.thumbnail?.alt_text}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <TableRow details={museum} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <hr></hr>
                            </td>
                        </tr>
                    </tbody>
                ))}
                <tbody>
                    <tr>
                        <td>
                            <div className="butHold">
                                <div className="butPage"
                                    onClick={() => clickPage(page.current_page - 10)}>-10</div>
                                <div className="butPage"
                                    onClick={() => clickPage(page.current_page - 1)}>Prev</div>
                                <div className="pageNum">{page.current_page}</div>
                                <div className="butPage"
                                    onClick={() => clickPage(page.current_page + 1)}>Next</div>
                                <div className="butPage"
                                    onClick={() => clickPage(page.current_page + 10)}>+10</div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <BackToTop />
        </>
    )
}
export default ImageBaseHome;