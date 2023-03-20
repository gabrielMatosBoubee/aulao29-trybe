import React, { Component } from 'react';
import Forms from '../Componentes/Forms';
import Loading from '../Componentes/Loading';
import Posts from '../Componentes/Posts';

class TodoList extends Component {

    constructor(){
        super()
        this.state = {
            post: "",
            title: "",
            end: false,
            posts: [],
            isLoading: false,
            resultado: 0
        }
    }


    saveClick = () => {
        const {post, title} = this.state;
        const newObj = {post, title}
       this.setState((valuesPrevius) => {return {posts: [...valuesPrevius.posts, newObj]}}, () => this.setState({post: "", title: ""}))
    }

    handleChange = ({target}) => {
        const {name, type} = target 
        const value = type === "checkbox" ? 
        target.checked : target.value 
        this.setState({[name]: value})
     }

     alteraPai = (resultado) => {
        this.setState({resultado})
     }

    render() {
        const {post, title, posts, isLoading} = this.state
        return (
            <>  
                { isLoading ? <Loading /> :
                   <>
                    <Forms
                    title={title}
                    post={post}
                    handleChange={this.handleChange}
                    saveClick={this.saveClick} />
                
                <Posts posts={posts} isLoading={isLoading} alteraPai={this.alteraPai}/>
                 <button type='button' onClick={() => {
                    this.setState({
                        isLoading: true
                    }, () => {
                        setTimeout(() => {
                            this.setState({isLoading: false}, () => {
                                const { history } = this.props
                                history.push(`/results/${posts.length}`)
                            })
                        }, 5000);
                    })
                 }}>Veja a quatidade posts</button>   
                </>
                }
            </>
        );
    }
}

export default TodoList;