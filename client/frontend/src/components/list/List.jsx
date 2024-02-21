import React from 'react'
import ListItem from '../listItem/ListItem'
import { MdOutlineArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const List = () => {
  return (
    <div className="list">
        <span className="listTitle">
            Continue To Watch
        </span>
        <div className="wrapper">

            <div className="container">
                <MdOutlineArrowBackIos />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <MdArrowForwardIos />
            </div>
        </div>
    </div>
  )
}

export default List