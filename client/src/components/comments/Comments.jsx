import { useContext, useState } from "react";
import './Comments.scss';
import { AuthContext } from "../../context/authContext";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import moment from 'moment';

const Comments = ({ postid }) => {
    const [desc, setDesc] = useState("");
    const { currentUser } = useContext(AuthContext);

    const { isLoading, error, data } = useQuery(["comments"], () => 
    makeRequest.get('/comments?postid=' + postid).then((res) => {
        return res.data;
    })
    );

    const queryClient = useQueryClient();

    const mutation = useMutation(
        (newComment) => {
            return makeRequest.post('/comments', newComment);
        },
        {
            onSuccess: () => {
                //Invalidate and refetch
                queryClient.invalidateQueries(["comments"]);
            },
        }
    );

    const handleClick = async (e) => {
        e.preventDefault();
        mutation.mutate({ desc, postid });
        setDesc("");
    };

    return (
        <div className="comments">
            <div className="write">
                <img src={"/upload/" + currentUser.profilePic} alt="" />
                <input type="text" placeholder="Write a Comment" value={desc} onChange={(e) => setDesc(e.target.value)} />
                <button onClick={handleClick}>Send</button>
            </div>
            {error
            ? "Something Went Wrong"
            : isLoading
            ? "Loading"
            : data.map((comment) => (
                <div className="comment">
                    <img src={"/upload/" + comment.profilePic} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">{moment(comment.createdAt).fromNow()}</span>
                </div>
            ))
            }
        </div>
    );
};


export default Comments;




