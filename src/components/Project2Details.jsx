import './details.css'
function Project2Details (props) {
    return(
        <div className='projectDetails'>
            <p>TECH: React.js | JavaScript | Tailwind | HTML5 | CSS3 | JSX</p>
            <div className="projects-href">
            {/* <a href="https://breed-beauty.netlify.app/" className='href' target="_blank">Live Link</a> */}
            <a href="https://github.com/Chrisstruong/Unsplash-Image-Search" className='href' target="_blank">Github Repository</a>
            </div>
        </div>
    )
}

export default Project2Details