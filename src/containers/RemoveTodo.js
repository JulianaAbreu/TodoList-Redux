import React, { Component } from 'React'
import { connect } from 'react-redux'
import { removeTodo } from './actions'

let RemoveTodo = ({ dispatch }) => {
    let buttonRemove

    render(
        <form onSubmit={(e) => { this.handleRemove }}>
            <button>Remove</button>
        </form>
    )

}