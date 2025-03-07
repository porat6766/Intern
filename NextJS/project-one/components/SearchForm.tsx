import Form from 'next/form'
import ResetButton from "./ResetButton"
import { Search } from "lucide-react"
export default function Page({ query }: { query?: string }) {

    return (
        <Form action="/" id="search-form" className='search-form' scroll={false}>
            <input name="query" defaultValue={query} className='search-input text-black' placeholder='Search Startup' />

            <div className="flex gap-2">
                {query && <ResetButton />}
                <button type='submit' className='search-btn text-white cursor-pointer'>
                    <Search />
                </button>
            </div>

        </Form >
    )
}