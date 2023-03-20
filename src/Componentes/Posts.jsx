import React, { Component } from 'react';

class Posts extends Component {
    constructor(){
        super()
        this.state = {
            resultado: 35,
            ok: true
        }
    }

    componentDidMount(){
        const { isLoading } = this.props
        this.setState({ok: isLoading })
    }

    render() {
        const {posts, alteraPai} = this.props
        const { resultado } = this.state
        return (
            <div>
                {posts.map(({post, title}, index) => <div key={`${index} ${post}`}>
                <h1>{title}</h1>
                <p>{post}</p>
                <button type='button' onClick={() => alteraPai(resultado)}>nome</button>
                </div>)}
            </div>
        );
    }
}

export default Posts;