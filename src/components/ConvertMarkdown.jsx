import React, { useState } from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import '../styles/use.style.css';
function ConvertMarkdown(props) {
    const str = props.text;
    const [changecopytocopied, setChangecopytocopied] = useState("Copy");

    const copybtn=()=>{

        navigator.clipboard.writeText(props.text);
        setChangecopytocopied("Copied");
        
        setTimeout(()=>{
            setChangecopytocopied("Copy")
        }, 5000)

        
    }

    return (
        <>
            <div className="box">
                <div className="card" >
                    <div className="markdowntext-title">
                        <span>Markdown - Text </span>
                        <span className="copy-btn" onClick={copybtn}>{changecopytocopied}</span>
                    </div>
                    <hr />
                    <pre className="handle-pre">{str}</pre>
                </div>
                <div className="card" >
                    <h5>Markdown</h5>
                    <hr />
                    <pre >
                        
                        <ReactMarkdown remarkPlugins={[remarkGfm]}  >{str}</ReactMarkdown>
                    </pre>
                </div>

            </div>

        </>
    )
}

export default ConvertMarkdown;
