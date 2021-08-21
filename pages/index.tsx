import React from 'react'
import Link from 'next/link'
import repos from 'constants/repo'
import tw from 'twin.macro'

const App = () => {
  return (
    <div>
      <h1 css={tw`text-4xl font-bold mb-8`}>Welcome</h1>
      <p css={tw`text-lg mb-8`}>
        <b>Next Boilerplate</b> provides the basics to get a fast web app with
        NextJS. Features:
      </p>
      <ul css={tw`list-disc list-inside`}>
        {repos.map((project) => (
          <li key={project}>
            <Link as={`/${project}`} href="/[user]/[repo]">
              <a>{project}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
