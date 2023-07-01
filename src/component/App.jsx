import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// function noteCard(note){
//     return (
//         <Note 
//             key={note.id}
//             title={note.title}
//             content={note.content}
//         />
//     );
// }

function App() {
    return (
        <div>
            <Header />
            {notes.map((noteItem)=>{
                return(
                    <Note 
                        key={noteItem.id}
                        title={noteItem.title}
                        content={noteItem.content}
                    />
                )
            })}
            <Footer />
        </div>
    );
}

export default App;