import React, {useEffect} from 'react'
import '../styles/about.style.css'
import { Link } from 'react-router-dom'
import { showloadbar } from './Navbar';

export default function Aboutmarkdown() {

  useEffect(() => {
    const scroller = document.body
    scroller.scrollIntoView({ behavior: 'smooth' })
    scroller.scrollTo(0,0)
  },[]);


  return (
    <>
      <div className='container1'>
        <div className='inner-container1'>

          <div>
            <h1>Whats is Markdown</h1>

            <div className='description'>
              Markdown is a lightweight markup language for creating formatted text using a plain-text editor. John Gruber created Markdown in 2004 as an easy-to-read markup language. Markdown is widely used for blogging and instant messaging, and also used elsewhere in online forums, collaborative software, documentation pages, and readme files.
              <br />

              The initial description of Markdown contained ambiguities and raised unanswered questions, causing implementations to both intentionally and accidentally diverge from the original version. This was addressed in 2014 when long-standing Markdown contributors released CommonMark, an unambiguous specification and test suite for Markdown. Visit : <Link to={"https://en.wikipedia.org/wiki/Markdown"} target='_blank' className='about-link'>Wikipedia</Link>
            </div>
          </div>
        </div>
        <div className='inner-container1'>
          <h1>
            Uses
          </h1>
          <div className='description'>
            You can use Markdown to create webpages, documents, and other text that needs to be transformed into other formats like HTML. It's widely used for blogging and instant messaging, and also used elsewhere in online forums collaborative software, documentation pages, and readme files.
            <br />
            Markdown is a lightweight markup language that's popular for formatting text. It's simple to use, easy to read, and versatile, making it widely adopted for various applications. Here are some of its main uses:-

            < h3> 1.  Documentation and ReadMe Files  </ h3>
            - Markdown is commonly used in README files for GitHub, GitLab, and other code repositories. It helps developers document their codebases, explain usage, and provide setup instructions.

            < h3> 2.  Technical Writing and Blogs </ h3>

            - Many technical writers and bloggers use Markdown for writing articles. Platforms like GitBook, Jekyll, and Hugo support Markdown, making it easy to write, organize, and publish content.

            < h3> 3.  Notes and To-Do Lists </ h3>
            - Markdown is great for quick note-taking and creating to-do lists. Applications like Obsidian, Notion, and Bear use Markdown for their formatting flexibility and clean look.

            < h3> 4.  Project Management </ h3>
            - Markdown is useful for project management tasks like creating task lists, updating project wikis, or tracking progress within tools like Jira, Trello, and GitHub Projects.

            < h3> 5.  Creating Presentation Slides </ h3>
            - Markdown can be used to create presentation slides with tools like Slidev, Marp, and Reveal.js, offering a simple way to structure and style slides.

            < h3> 6.  Website Content Management </ h3>
            - Many static site generators (like Jekyll, Hugo, and Gatsby) rely on Markdown to create and format web pages, especially for blogs and documentation sites.

            < h3> 7.  Email and Messaging </ h3>
            - Markdown is often used in emails or messaging systems (like Slack, Discord) to add simple formatting—bold, italics, code blocks—without relying on complex editors.

            < h3> 8.  Publishing Books and PDFs </ h3>
            - Markdown can be transformed into books, PDFs, and e-books with tools like Pandoc, allowing authors to write in a simple syntax before publishing in more complex formats.

            < h3> 9.  Scripting and Automation </ h3>
            - Markdown's simplicity also makes it suitable for scripting or automation, where text-heavy templates are required (e.g., automated email reports).
            <br />
            These versatile uses make Markdown a staple for content creation across many fields, especially in tech, writing, and documentation.



          </div>

          <div className='go-to-btn-div' style={{width:"100%", 
        display:"flex", justifyContent:"center", alignItems:"center" , padding:"20px"}}>
            <button><Link to={"/howtouse"} className='link-btn' onClick={showloadbar}>Go to 'How to use'</Link> </button>
          </div>
        </div>

      </div>
    </>
  )
}
