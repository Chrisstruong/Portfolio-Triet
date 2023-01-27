import './details.css'
function Project2Details (props) {
    return(
        <div className='projectDetails'>
            <p>TECH: React.js | JavaScript | CSS | HTML | Flexbox</p>
            <ul>
                <li>Rendered the front-end with React</li>
                <li>Utilized Flexbox, and CSS to arrange the structure as well as the design of application respectively</li>
                <li>Used JS promises and React Hooks to consume Public API data</li>
                <li>Accomplished search bar including clicking button to display photos of breed from user’s input</li>
            </ul>
            <div className="projects-href">
            <a href="https://breed-beauty.netlify.app/" className='href'>Live Link</a>
            <a href="https://github.com/Chrisstruong/BreedBeauty" className='href'>Github Repository</a>
            </div>
        </div>
    )
}

export default Project2Details