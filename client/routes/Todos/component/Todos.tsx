import React from 'react';
import {useQuery} from "@apollo/client";
import shortid from "shortid";
import todosQuery from '../../../api/todos.graphql'
import {ITodo} from "../../../models/todo";

export default function Todos() {
    const { data } = useQuery<{ Todos: ITodo[] }>(todosQuery)

    return (
        <div>
            {
                (data?.Todos || []).map((todo: ITodo) => (
                    <div key={shortid()}>
                        {todo.name}
                    </div>
                ))
            }
        </div>
    )
}