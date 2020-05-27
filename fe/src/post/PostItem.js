import React from 'react';
import { Link } from 'react-router-dom';

function SubItem(props) {
       
    return (
        <tr>
            <td>
                {!!props.data ?
                <Link to={`/sub/${props.data.id}/posts`}>
                    <b>{props.data.title}</b><br/>
                    {props.data.content.length > 50 ? props.data.content.substring(0, 50) + "..." : props.data.content}
                </Link> : ''}
            </td>
        </tr>
    )
}

export default SubItem