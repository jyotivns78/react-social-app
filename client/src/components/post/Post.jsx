import './Post.css';
import FavouriteBorderOutlinedIcon from "@mui/icons-material/FavouriteBorderOutlinedIcon";
import FavouriteOutlinedIcon from "@mui/icons-material/FavouriteOutlinedIcon";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlinedIcon";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlinedIcon";
import MoreHorizIcon from "@mui/icons-material/MoreHorizIcon";
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';
import { useState } from 'react';
import moment from "moment";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from '../../axios';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Post = ({ post }) => {
    const [commentOpen, setCommentOpen] = useState(false);
    const [manuOpen, setMenuOpen] = useState(false);

    const { currentUser } = useContext(AuthContext);

    const { isLoading, error, data } = useQuery(["likes", post.id], () => 
    makeRequest.get("likes ? postid=" + post.id).then((res) => {
        return res.data;
    })
    );


    const queryClient = useQueryClient();

    const mutation = useMutation(
        (liked) => {
            if(liked)
            return makeRequest.delete("likes ? postid=" + post.id);
            return makeRequest.post("/likes", {postid : post.id});
        },
        {
        onSuccess: () => {
            //Invalidate and refetch
            queryClient.invalidateQueries(["likes"]);
        },
        }
    );

    const deleteMutation = useMutation(
        (postid) => {
            return makeRequest.delete("/posts/" + postid);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['posts']);
            },
        }
    );


    const handleLike = () => {
        mutation.mutate(data.includes(currentUser.id));
    };


    const handleDelete = () => {
        deleteMutation.mutate(post.id);
    }


    return (
        <div className='post'>
            <div className='container'>
                <div className='user'>
                    <div className='userInfo'>
                        <img src={"/upload/" + post.profilePic} alt="" />
                        <div className='details'>
                            <Link
                            to={`/profile/${post.userid}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <span className='name'>{post.name}</span>
                            </Link>
                            <span className='date'>{moment(post.createdAt).fromNow()}</span>
                        </div>
                    </div>
                    <MoreHorizIcon onClick={() => setMenuOpen(!manuOpen)} />
                    {menuOpen && post.userid === currentUser.id && (
                        <button onClick={handleDelete}>Delete</button>
                    )}
                </div>
                <div className='content'>
                    <p>{post.desc}</p>
                    <img src={"/upload/" + post.img} alt="" />
                </div>
                <div className='info'>
                    <div className='item'>
                        {isLoading ? (
                            "loading"
                        ) : data.includes(currentUser.id) ? (
                            <FavouriteOutlinedIcon
                            style={{ color: "red" }}
                            onClick={handleLike}
                            />
                        ) : (
                            <FavouriteBorderOutlinedIcon onClick={handleLike} />
                        )}
                        {data.length} Likes
                    </div>
                    <div className='item' onClick={() => setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon />
                        See Comments
                    </div>
                    <div className='item'>
                        <ShareOutlinedIcon />
                        Share
                    </div>
                </div>
                {commentOpen && <Comments postid={post.id} />}
            </div>
        </div>
    );
};


export default Post;
