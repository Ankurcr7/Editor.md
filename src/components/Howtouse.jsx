import React from 'react';
import '../styles/use.style.css';
import ConvertMarkdown from './ConvertMarkdown';
import markdowngif from '../assets/markdown.gif'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Howtouse() {

  useEffect(() => {
    const scroller = document.body
    scroller.scrollIntoView({ behavior: 'smooth' })
    scroller.scrollTo(0,0)
  },[]);


  return (
    <>
      <div className='full-container'>
        <div className='narrow-container'>
          <h1>How to use Markdown</h1>
          <div className='div'>
            1. Headings:
            Use <code>#</code> for headings. More <code>#</code> symbols mean a smaller heading size.
            <ConvertMarkdown text={`# Heading 1\n## Heading 2\n### Heading 3`} />

            2. Bold and Italic Text:
            Use <code>**</code> or <code>__</code> for bold, and <code>*</code> or <code>_</code> for italic.
            <ConvertMarkdown text={`**This is bold**\n*This is italic*`} />

            3. Lists:
            For unordered lists, use <code>-</code>, <code>+</code>, or <code>*</code>.
            For ordered lists, just use numbers followed by a period.
            <ConvertMarkdown text={`- Item 1\n- Item 2\n  - Nested Item\n1. First Item\n2. Second Item`} />

            4. Links:
            Use <code>[text](URL)</code> to add links.
            <ConvertMarkdown text={`[ADcode](https://adcode14.vercel.app)`} />

            5. Images:
            Similar to links but add an exclamation mark <code>!</code> at the start.
            <ConvertMarkdown text={`![Alt text](${markdowngif})`} />

            6. Blockquotes: Use <code>{">"}</code> for quoting text.
            <ConvertMarkdown text={`> This is a blockquote.`} />

            7. Code Blocks:
            For inline code, wrap text in backticks: <code>`code`</code>
            For code blocks, use triple backticks.
            {/* <ConvertMarkdown text={'\`\`\`python\nprint("This is a Python code block.")'} /> */}
            <ConvertMarkdown text={'```python\ndef hello():\n    print("Hello World!")'} />

            8. Horizontal Line:
            Use three or more dashes <code>---</code>, asterisks <code>***</code>, or underscores <code>___</code>.
            <ConvertMarkdown text={`---`} />

            9. Tables:
            Use pipes <code>|</code> to create columns and dashes to separate the header.
            <ConvertMarkdown text={`| Column 1 | Column 2 |
| -------- | -------- |
| Row 1    | Row 1    |
| Row 2    | Row 2    |
`} />

            10. Task Lists:
            Use <code>- [ ]</code> for unchecked tasks and <code>- [x]</code> for checked tasks.
            <ConvertMarkdown text={`- [ ] Task 1\n- [x] Task 2`} />

            11. Strikethrough:
            Use <code>{"~<word>~"}</code> or <code>{"~~<word>~~"}</code> for strikethrough the word
            <ConvertMarkdown text={`~ADcode~  ~~ADcode~~`} />

          </div>

          <div className='go-to-btn-div' style={{
            backgroundColor:"transparent",
            width: "100%",
            display: "flex", justifyContent: "center", alignItems: "center", padding: "15px"
          }}>
            <button><Link to={"/"} className='link-btn'>Let's GO</Link> </button>
          </div>

        </div>

      </div>
    </>
  )
}
