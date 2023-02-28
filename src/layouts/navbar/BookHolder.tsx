
import BookModel from "../../models/BookModel";
import React from "react";

export const BookHolder : React.FC<{book: BookModel}> = (props) =>

{
    return(
        <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
        <div className='text-center'>
            <img
                src = 'https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg?cs=srgb&dl=book-education-knowledge-2099691.jpg&fm=jpg'
                width='151'
                height='233'
                alt="book"
            />
            <h6 className='mt-2'>{props.book.title}</h6>
            <p>{props.book.author}</p>
            //to do
            <a className='btn main-color text-white' href='#'>Delate</a>
        </div>
    </div>
    );
}