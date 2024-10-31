import React, { useState, useEffect } from 'react'
import '../styles/home.style.css'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Home() {
  const [markdownvalue, setMarkdownvalue] = useState("");

  useEffect(() => {
    const scroller = document.body
    scroller.scrollIntoView({ behavior: 'smooth' })
    scroller.scrollTo(0, 0)
  }, []);


  const clearTextarea = () => {
    setMarkdownvalue("")
  }

  const copy = () => {
    navigator.clipboard.writeText(markdownvalue)

  }


  const paste = () => {
    let prevtext = markdownvalue;
    navigator.clipboard.readText().then(markdownvalue => {
      prevtext += markdownvalue;
      setMarkdownvalue(prevtext);
    }).catch(() => {
      setMarkdownvalue("Clipboard is empty!")
    })

  }

  // @deprecate
  // let fileHandle;
  // const openmd = async () => {
  //   try {
  //     [fileHandle] = await window.showOpenFilePicker({
  //       types: [{
  //         description: 'Text documents',
  //         accept: {
  //           'text/plain': ['.txt'],
  //           'text/html': ['.md'],
  //         },
  //       }],
  //     });
  //     const file = await fileHandle.getFile();
  //     const contents = await file.text();
  //     setMarkdownvalue(contents)

  //   } catch (error) { }

  // }

  // @deprecate
  // let fileHandle;
  // const openfileOndevices = async () => {
  //   try {
  //     [fileHandle] = await window.showOpenFilePicker({
  //       types: [{
  //         description: 'Text documents',
  //         accept: {
  //           'text/plain': ['.txt'],
  //           'text/html': ['.md'],
  //         },
  //       }],
  //     });
  //     const file = await fileHandle.getFile();
  //     const reader = new FileReader();
  //     reader.addEventListener("loadend", () => {
  //       setMarkdownvalue(reader.result)
  //     }, false);

  //     if (file) {
  //       reader.readAsText(file)
  //     }
  //   } catch (error) { }

  // }

  const upgradedopenfileOndevices = () => {
    const [file] = document.querySelector("input[type=file]").files;
    const reader = new FileReader();

    reader.addEventListener(
      "loadend",
      () => {
        setMarkdownvalue(reader.result);
      },
      false,
    );

    if (file) {
      reader.readAsText(file);
    }

  }


  // @deprecate
  // const saveFile = async () => {
  //   try {
  //     const newHandle = await window.showSaveFilePicker({
  //       suggestedName: 'md.md',
  //       types: [{
  //         description: 'Text documents',
  //         accept: {
  //           'text/html': ['.md'],
  //           'text/plain': ['.txt'],
  //         },
  //       }],
  //     });

  //     const writableStream = await newHandle.createWritable();
  //     await writableStream.write(markdownvalue);
  //     await writableStream.close();
  //   } catch (error) { }


  // }

  const saveOndevices = (option) => {
    const blob = new Blob([markdownvalue], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    if (option === 0) { link.download = 'Markdown.txt'; }
    else { link.download = 'Markdown.md'; }

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  return (

    <>

      <div className='container'>
        <div className='inner-container'>
          <div className='left-container'>
            <h2 className='editing-title'>Markdown</h2>
            <div className='area'>
              <textarea autoFocus autoSave='' className='scroll ' name="" id="mark" cols="30" rows="28" value={markdownvalue}
                onChange={(e) => { setMarkdownvalue(e.target.value) }}
                placeholder='Start your Markdown here'
              >{ }</textarea>

            </div>
            <div className='functions'>
              <button className='btn pad' id='copy' onClick={copy} disabled={markdownvalue.length === 0}>Copy</button>
              <button className='btn pad' id='paste' onClick={paste}>Paste</button>
              <button className='btn pad' id='clear' onClick={clearTextarea} disabled={markdownvalue.length === 0}>Clear</button>
            </div>

          </div>
          <div className='right-container'>
            <h2 className='editing-title'>Preview</h2>
            <div className='area2'>

              <ReactMarkdown className="markdownarea " remarkPlugins={[remarkGfm]} children={markdownvalue}>
                </ReactMarkdown>


            </div>

            <div className='functions'>
              {/* <button className='btn' onClick={openfileOndevices}>Open .md</button> */}

              <input type="file" id="inputfile" onChange={upgradedopenfileOndevices} />
              <button className='btn inputfile-btn'>

                <label htmlFor="inputfile" className='pad' style={{ color: "#0bce0a" }}>Open file</label>
              </button>

              <button className='btn pad' id="save" onClick={() => { saveOndevices(0) }} disabled={markdownvalue.length === 0}>Save as <span style={{ color: "orangered", backgroundColor: "transparent", fontWeight: "bolder" }} >.txt</span></button>

              <button className='btn pad' id="save1" onClick={() => { saveOndevices(1) }} disabled={markdownvalue.length === 0}>Save as <span style={{ color: "orangered", backgroundColor: "transparent", fontWeight: "bolder" }} >.md</span></button>

            </div>
          </div>
        </div>


      </div>

    </>
  )
}
