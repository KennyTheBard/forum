import React from 'react';
import { Link } from 'react-router-dom';

function SubItem(props) {
       
    return (
        <tr>
            <td>
                <Link to={`/sub/${props.data.id}/posts`}>{props.data.name}</Link>
            </td>
        </tr>
    )
}

export default SubItem