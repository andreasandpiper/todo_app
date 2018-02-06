import React from 'react';

export default props => {
    return (
        <li className="collection-item">
            <div className="row">
                <div className="col s9">
                    {props.title}
                </div>
                <div className="col s3 right-align">
                    <button className="btn-floating red" onClick={props.delete}>
                        <i className="material-icons">delete</i>
                    </button>
                </div>
            </div>
        </li>
    )
}