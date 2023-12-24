import ReactMarkdown from 'react-markdown';

const MarkdownTest = ()=>{
    let res={
        apiRes:"As an AI language model, I don't have personal feelings or emotions, so I don't experience days or have a concept of well-being. I'm a virtual assistant designed to provide information and assist users with their queries and requests.\n\nMay I help you with something today?"
        }
        let modRes= (res.apiRes);
        let newRes=modRes.replace('/\n', "&nbsp; \n");
        console.log(newRes);
        /*{JSON.stringify(newRes)}*/
    return(
  
  <ReactMarkdown>{newRes}</ReactMarkdown>
);
}

export default MarkdownTest;