import React from 'react'
import SearchForm from '../../components/SearchForm'
import StartupCard, { Post } from '../../components/StartupCard'


const page = async ({ searchParams }: { searchParams: Promise<{ query: string }> }) => {

  const posts: Post[] = [
    {
      _createdAt: "Today",
      views: 120,
      author: { id: 2 },
      _id: 2,
      description: "A new post about JavaScript!",
      image: "image1.jpg"
    },
    {
      _createdAt: "Yesterday",
      views: 80,
      author: { id: 3 },
      _id: 3,
      description: "Understanding CSS Flexbox.",
      image: "image2.jpg"
    },
    {
      _createdAt: "Two days ago",
      views: 95,
      author: { id: 4 },
      _id: 4,
      description: "React vs Vue: Which one to choose?",
      image: "image3.jpg"
    },
    {
      _createdAt: "Today",
      views: 65,
      author: { id: 5 },
      _id: 5,
      description: "How to optimize web performance?",
      image: "image4.jpg"
    },
    {
      _createdAt: "Yesterday",
      views: 150,
      author: { id: 6 },
      _id: 6,
      description: "Best Node.js frameworks in 2024!",
      image: "image5.jpg"
    },
    {
      _createdAt: "A week ago",
      views: 300,
      author: { id: 7 },
      _id: 7,
      description: "Tips for mastering TypeScript",
      image: "image6.jpg"
    },
    {
      _createdAt: "Today",
      views: 45,
      author: { id: 8 },
      _id: 8,
      description: "Understanding closures in JavaScript.",
      image: "image7.jpg"
    },
    {
      _createdAt: "Yesterday",
      views: 78,
      author: { id: 9 },
      _id: 9,
      description: "A complete guide to REST APIs.",
      image: "image8.jpg"
    },
    {
      _createdAt: "Three days ago",
      views: 102,
      author: { id: 10 },
      _id: 10,
      description: "Best practices for writing clean code.",
      image: "image9.jpg"
    },
    {
      _createdAt: "Last week",
      views: 56,
      author: { id: 11 },
      _id: 11,
      description: "Deploying apps with Docker and Kubernetes.",
      image: "image10.jpg"
    },
    {
      _createdAt: "Today",
      views: 132,
      author: { id: 12 },
      _id: 12,
      description: "The evolution of JavaScript frameworks.",
      image: "image11.jpg"
    },
    {
      _createdAt: "Yesterday",
      views: 89,
      author: { id: 13 },
      _id: 13,
      description: "Introduction to GraphQL.",
      image: "image12.jpg"
    },
    {
      _createdAt: "Two weeks ago",
      views: 120,
      author: { id: 14 },
      _id: 14,
      description: "Debugging tips for JavaScript developers.",
      image: "image13.jpg"
    },
    {
      _createdAt: "Today",
      views: 75,
      author: { id: 15 },
      _id: 15,
      description: "Exploring the new features of ES2024.",
      image: "image14.jpg"
    },
    {
      _createdAt: "A month ago",
      views: 210,
      author: { id: 16 },
      _id: 16,
      description: "How to start with Web3 development?",
      image: "image15.jpg"
    },
    {
      _createdAt: "Yesterday",
      views: 190,
      author: { id: 17 },
      _id: 17,
      description: "Building responsive layouts with CSS Grid.",
      image: "image16.jpg"
    },
    {
      _createdAt: "Last month",
      views: 220,
      author: { id: 18 },
      _id: 18,
      description: "Getting started with Python for web development.",
      image: "image17.jpg"
    },
    {
      _createdAt: "Today",
      views: 95,
      author: { id: 19 },
      _id: 19,
      description: "How to build a chatbot with AI?",
      image: "image18.jpg"
    },
    {
      _createdAt: "A week ago",
      views: 160,
      author: { id: 20 },
      _id: 20,
      description: "Understanding the event loop in JavaScript.",
      image: "image19.jpg"
    }
  ];



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
      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search results for ${query}` : "All Startups"}
        </p>

        <ul className='mt-7 card_grid'>
          {posts?.length > 0 ? (
            posts.map((post: Post) =>
              <StartupCard key={post?._id} post={post} />
            )
          ) : (
            <p>No startup found</p>
          )}
        </ul>
      </section>
    </>
  )
}

export default page
