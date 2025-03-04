import React from 'react'
import SearchForm from '../components/SearchForm'
import { SearchParams } from 'next/dist/server/request/search-params'


const page = async ({ searchParams }: { searchParams: Promise<{ query: string }> }) => {

  const query = (await searchParams).query
  return (
    <>
      <section className='pink_container'>
        <h1 className='heading'>Pitch your startup,<br />
          connect with <br /> Entrepreneurs
        </h1>

        <p className='sub-heading !max-w-3xl'>Submit Ideas, Vote on Pitches,and get Noticed in Virtual Compitions! </p>
        <SearchForm query={query} />
      </section>
    </>
  )
}

export default page
