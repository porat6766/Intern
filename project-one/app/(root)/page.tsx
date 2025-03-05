import React from 'react'
import SearchForm from '../../components/SearchForm'
import StartupCard, { Post } from '../../components/StartupCard'


const page = async ({ searchParams }: { searchParams: Promise<{ query: string }> }) => {

  const posts = [
    {
      _createdAt: "Today",
      views: 120,
      author: { id: 2, name: "Alice Johnson" },
      _id: 2,
      title: "JavaScript Basics",
      description: "A new post about JavaScript!",
      category: "JavaScript",
      image: "image1.jpg"
    },
    {
      _createdAt: "Yesterday",
      views: 80,
      author: { id: 3, name: "Bob Smith" },
      _id: 3,
      title: "Mastering CSS Flexbox",
      description: "Understanding CSS Flexbox.",
      category: "CSS",
      image: "image2.jpg"
    },
    {
      _createdAt: "Two days ago",
      views: 95,
      author: { id: 4, name: "Charlie Brown" },
      _id: 4,
      title: "React vs Vue",
      description: "React vs Vue: Which one to choose?",
      category: "Frontend",
      image: "image3.jpg"
    },
    {
      _createdAt: "Today",
      views: 65,
      author: { id: 5, name: "David Wilson" },
      _id: 5,
      title: "Web Performance Optimization",
      description: "How to optimize web performance?",
      category: "Performance",
      image: "image4.jpg"
    },
    {
      _createdAt: "Yesterday",
      views: 150,
      author: { id: 6, name: "Emma Davis" },
      _id: 6,
      title: "Top Node.js Frameworks",
      description: "Best Node.js frameworks in 2024!",
      category: "Backend",
      image: "image5.jpg"
    },
    {
      _createdAt: "A week ago",
      views: 300,
      author: { id: 7, name: "Frank Miller" },
      _id: 7,
      title: "Mastering TypeScript",
      description: "Tips for mastering TypeScript",
      category: "TypeScript",
      image: "image6.jpg"
    },
    {
      _createdAt: "Today",
      views: 45,
      author: { id: 8, name: "Grace Lee" },
      _id: 8,
      title: "JavaScript Closures Explained",
      description: "Understanding closures in JavaScript.",
      category: "JavaScript",
      image: "image7.jpg"
    },
    {
      _createdAt: "Yesterday",
      views: 78,
      author: { id: 9, name: "Henry White" },
      _id: 9,
      title: "Complete Guide to REST APIs",
      description: "A complete guide to REST APIs.",
      category: "APIs",
      image: "image8.jpg"
    },
    {
      _createdAt: "Three days ago",
      views: 102,
      author: { id: 10, name: "Isabella Martin" },
      _id: 10,
      title: "Writing Clean Code",
      description: "Best practices for writing clean code.",
      category: "Best Practices",
      image: "image9.jpg"
    },
    {
      _createdAt: "Last week",
      views: 56,
      author: { id: 11, name: "Jack Thompson" },
      _id: 11,
      title: "Deploying with Docker & Kubernetes",
      description: "Deploying apps with Docker and Kubernetes.",
      category: "DevOps",
      image: "image10.jpg"
    },
    {
      _createdAt: "Today",
      views: 132,
      author: { id: 12, name: "Kelly Anderson" },
      _id: 12,
      title: "Evolution of JavaScript Frameworks",
      description: "The evolution of JavaScript frameworks.",
      category: "JavaScript",
      image: "image11.jpg"
    },
    {
      _createdAt: "Yesterday",
      views: 89,
      author: { id: 13, name: "Liam Harris" },
      _id: 13,
      title: "Introduction to GraphQL",
      description: "Introduction to GraphQL.",
      category: "APIs",
      image: "image12.jpg"
    },
    {
      _createdAt: "Two weeks ago",
      views: 120,
      author: { id: 14, name: "Mia Walker" },
      _id: 14,
      title: "Debugging JavaScript",
      description: "Debugging tips for JavaScript developers.",
      category: "JavaScript",
      image: "image13.jpg"
    },
    {
      _createdAt: "Today",
      views: 75,
      author: { id: 15, name: "Noah Hall" },
      _id: 15,
      title: "New Features in ES2024",
      description: "Exploring the new features of ES2024.",
      category: "JavaScript",
      image: "image14.jpg"
    },
    {
      _createdAt: "A month ago",
      views: 210,
      author: { id: 16, name: "Olivia Young" },
      _id: 16,
      title: "Starting with Web3",
      description: "How to start with Web3 development?",
      category: "Blockchain",
      image: "image15.jpg"
    },
    {
      _createdAt: "Yesterday",
      views: 190,
      author: { id: 17, name: "Paul King" },
      _id: 17,
      title: "CSS Grid for Responsive Layouts",
      description: "Building responsive layouts with CSS Grid.",
      category: "CSS",
      image: "image16.jpg"
    },
    {
      _createdAt: "Last month",
      views: 220,
      author: { id: 18, name: "Quinn Scott" },
      _id: 18,
      title: "Python for Web Development",
      description: "Getting started with Python for web development.",
      category: "Python",
      image: "image17.jpg"
    },
    {
      _createdAt: "Today",
      views: 95,
      author: { id: 19, name: "Rachel Wright" },
      _id: 19,
      title: "Building an AI Chatbot",
      description: "How to build a chatbot with AI?",
      category: "AI",
      image: "image18.jpg"
    },
    {
      _createdAt: "A week ago",
      views: 160,
      author: { id: 20, name: "Sam Baker" },
      _id: 20,
      title: "Understanding the JavaScript Event Loop",
      description: "Understanding the event loop in JavaScript.",
      category: "JavaScript",
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
