import './details.css'
function Project2Details (props) {
    return(
        <div className='projectDetails'>
            <p>Sometimes people just want to see photos of cute dogs. Zach and Triet app's mission is to solve the problem of by allowing the user to randomly generate a photo of a dog from a group of over 1000 dog photos.</p>
            <p>TECH: React.js | JavaScript | CSS | HTML | Flexbox</p>
            <div className="projects-href">
            <a href="https://breed-beauty.netlify.app/" className='href'>Live Link</a>
            <a href="https://github.com/Chrisstruong/BreedBeauty" className='href'>Github Repository</a>
            </div>
        </div>
    )
}

export default Project2Details