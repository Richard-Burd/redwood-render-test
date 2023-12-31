import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MyPagePage = () => {
  return (
    <>
      <MetaTags title="MyPage" description="MyPage page" />

      <h1>RedwoodJS Render Test Deployment</h1>
      <p>This is a dest deployment only</p>
      <p>
        Find me in <code>./web/src/pages/MyPagePage/MyPagePage.tsx</code>
      </p>
      <p>
        My default route is named <code>myPage</code>, link to me with `
        <Link to={routes.myPage()}>MyPage</Link>`
      </p>
    </>
  )
}

export default MyPagePage
