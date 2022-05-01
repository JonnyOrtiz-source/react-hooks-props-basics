import React from 'react';

function BlogContent(props) {
   if (props.isPublished) {
      return (
         <div id="blog-content">
            <h1>{props.articleText}</h1>
            {props.minutesToRead === 1 ? (
               <p>{props.minutesToRead} minute to read </p>
            ) : (
               <p>{props.minutesToRead} minutes to read </p>
            )}
         </div>
      );
   } else {
      return null;
   }
}

export default BlogContent;
