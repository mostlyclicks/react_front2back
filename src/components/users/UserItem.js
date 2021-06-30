import React from 'react'
import PropTypes from 'prop-types'


const UserItem = ({ user: {login, avatar_url, html_url}}) => {

    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style={{width: '60px'}}/>
            <h3>{login}</h3>
            <div>
                <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
    //do this an object as above to include all
    // login: PropTypes.string.isRequired,
    // avatar_url: PropTypes.string.isRequired,
    // html_url: PropTypes.string.isRequired
}

export default UserItem
