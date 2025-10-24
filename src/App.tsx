import { useQuery } from "@tanstack/react-query"

const App = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
  })

  console.log({ data, error, isLoading })
  if(isLoading) return <div> Loading .....</div>
  if(error) return <div> An error occured: {(error as Error).message} </div>
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Posts</h1>
      <ul>
        {data?.map((post: {id: number; title: string}) => {
          return <li key={post.id}>{post.title}</li>
        })}
      </ul>
    </div>
  )
}

export default App
