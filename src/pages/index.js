import * as React from "react"
import '../app.scss';

import MyResumePDF from '../Lucas_Lois_Technical_Leader_CV.pdf'
import LuckyImage from '../images/lucky.jpeg'

// markup
const IndexPage = () => {
    return (
        <main className='main div100vh'>
            <div className='personal-info'>
                <img className='photo' src={LuckyImage} alt="Lucky Avatar"/>
                <title>Lucas Lois</title>
                <h1 className='title'>Lucas Lois</h1>
                <h2 className='subtitle'>Software Engineer & Architect</h2>
                <h3 className='job'>Technical Leader at <a target='_blank' href="https://braintly.com">Braintly</a></h3>
                <h4 className='resume'><a href={MyResumePDF} target="_blank">My Resume</a></h4>
            </div>
            <div className="buttons">
                <a target='_blank' href='https://www.linkedin.com/in/lucaslois/' className='button linkedin'>Linked
                    In</a>
                <a target='_blank' href='https://github.com/lucaslois' className='button github'>GitHub</a>
                <a target='_blank' href='https://instagram.com/lucaslois95' className='button instagram'>Instagram</a>
                <a target='_blank' href='https://twitter.com/lucaslois95' className='button twitter'>Twitter</a>
                {/* <a target='_blank' href='/books' className='button books'>Recommended Books</a> */}
                {/* <a target='_blank' className='button disabled'>Recommended Tools (Coming soon)</a> */}
                {/* <a target='_blank' className='button disabled'>My Setup (Coming soon)</a> */}
            </div>
        </main>
    )
}

export default IndexPage
