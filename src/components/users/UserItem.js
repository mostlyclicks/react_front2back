import React, { Component } from 'react'

class UserItem  extends Component {

    // Now coming from Users props
    // state = {
    //     id: 'id',
    //     login: 'mostlyclicks',
    //     avatar_url: 'https://avatars.githubusercontent.com/u/26814?v=4',
    //     html_url: 'https://github.com/mostlyclicks'
    // }

    render() {

        const { login, avatar_url, html_url } = this.props.user
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
}

export default UserItem
