import {Tasks} from "../api/tasks"

export const taskTabular =  new Tabular.Table({
    name : "TaskTabular",
    collection : Tasks,
    columns : [
        {data: "text", title : "Name"},
        {data: "owner", title : "Owner"},

    ]
});