import styled from "styled-components";

export const bg= styled.div`
    background-color: rgb(13, 15, 54);
`;

export const movie_container = styled.div`
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const movie_box = styled.div`
    width:250px;
    margin:15px;
    background-color: rgb(64, 69, 157);
    color:white;
    border-radius: 5px;
`;

export const movie_img = styled.img`
    max-width: 100%;
`;

export const movie_info = styled.div`
    display:flex;
    padding:15px;
    justify-content: space-between;
    align-items: center;
`;

export const more_info = styled.div`
    width:250px;
    display:none;
    background-color: pink;
`;