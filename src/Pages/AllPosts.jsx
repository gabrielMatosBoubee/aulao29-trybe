import React, { Component } from 'react';

class AllPosts extends Component {

    constructor(){
        super()
        this.state = {
            result: 35
        }
    }

    componentDidMount(){
        const {match: {params: {id } } } = this.props
        this.setState({result: id})
    }
    render() {
        const { result} = this.state;
        return (
            <div>
                {result}
            </div>
        );
    }
}

export default AllPosts;