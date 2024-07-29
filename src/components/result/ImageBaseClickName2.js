import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import Loader from "../Loader";
import ImageArtworks2 from "./ImageArtworks2";
import SearchPlace2 from "../search/SearchPlace2";
import PaginationCM from "./PaginationCM";
import { Box, Pagination } from "@mui/material";
import BackToTop from "../BackToTop";
import { useParams } from "react-router-dom";


const ImageBaseClickName2 = () => {

    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [page, setPage] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [results, setResults] = useState([]);

    const params = useParams();
    const artistTitle = params.artistTitle;

    useEffect(() => {
        getImage(artistTitle);
    }, [])

    const getImage = async (artistTitle) => {
        const url = `https://api.artic.edu/api/v1/artworks/search?q=${artistTitle}&page=1&limit=100`;

        try {
            const response = await axios.get(url)
            const data = response.data;

            setData(data.data);
            setPage(data.pagination);
            setResults(data.data.length);
            setIsLoading(false);

        } catch (err) {
            setError(err);
        }
    };

    const pageSize = 7;
    const paginatedPosts = PaginationCM(data, pageSize);
    const currentPosts = paginatedPosts[currentPage - 1];

    if (isLoading) {
        return (
            <table className="main">
                <tbody>
                    <tr>
                        <td className="home">
                            <SearchPlace2 />
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
    } else if (results == 0) {
        return (
            <table className="main">
                <tbody>
                    <tr>
                        <td className="home">
                            <SearchPlace2 />
                        </td>
                    </tr>
                    <tr >
                        <td className="results">
                                Noting Found                        
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }

    return (
        <>
            <table className="main">
                <tbody>
                    <tr>
                        <td className="home">
                            <SearchPlace2 />
                        </td>
                    </tr>
                </tbody>
            </table>
            <Box>
                {paginatedPosts.length > 1 && (
                    <Box mt={2} display="flex" justifyContent="center" paddingBottom="15px">
                        <Pagination
                            count={paginatedPosts.length}
                            page={currentPage}
                            onChange={(_, newPage) => setCurrentPage(newPage)}
                        />
                    </Box>
                )}
                {currentPosts &&
                    currentPosts.map((post) => (
                        <div className="main"
                            key={post.id}>
                            <ImageArtworks2 key={post.id} imgId={post.id} />
                        </div>
                    ))}
                {paginatedPosts.length > 1 && (
                    <Box mt={2} display="flex" justifyContent="center" paddingBottom="50px">
                        <Pagination
                            count={paginatedPosts.length}
                            page={currentPage}
                            onChange={(_, newPage) => setCurrentPage(newPage)}
                        />
                    </Box>
                )}
            </Box>
            <BackToTop />
        </>
    )
}
export default ImageBaseClickName2;