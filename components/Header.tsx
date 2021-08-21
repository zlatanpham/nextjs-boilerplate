import React from 'react'
import Link from 'next/link'
import tw from 'twin.macro'

const Header = () => {
  return (
    <header css={tw`bg-blue-900 py-10`}>
      <div css={tw`container mx-auto`}>
        <Link href="/">
          <a css={tw`text-white font-semibold text-xl`}>Next boilerplate</a>
        </Link>
      </div>
    </header>
  )
}

export default Header
