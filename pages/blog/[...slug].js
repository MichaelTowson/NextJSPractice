//This is an example of a "catch-all" dynamic path. Router will catch all the url values leading up to the slug value.

import { useRouter } from 'next/router';

function BlogPostsPage() {
  const router = useRouter()
  console.log(router.query) //<- This is how we can see the values being passed in from the url.

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  )
}

export default BlogPostsPage