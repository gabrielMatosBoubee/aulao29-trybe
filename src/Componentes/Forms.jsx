import React, { Component } from 'react';

class Forms extends Component { 
   


    render() {
        const { post, title, handleChange, saveClick } = this.props;
        return (
            <div>
                <h1>{title}</h1>
                <p>{post}</p>
                <label htmlFor="post">
                 Seu post
              <input type='text' name='post' id='post' onChange={handleChange} />
                </label>
                <label htmlFor="title">
                Seu titulo
              <input type='text' name='title' id="title" onChange={handleChange} />
                </label>
              <input type="checkbox" name="end" onChange={handleChange}/>
              <button type='button' onClick={saveClick}>salvar post</button>
            </div>
        );
    }
}

export default Forms;