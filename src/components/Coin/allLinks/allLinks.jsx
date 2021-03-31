
export const LinkItem = ({link}) => (
  link.map(result => (
    <a
      className="text-main"
      href={result}
      target="_blank"
      rel="noreferrer">
      {result
        .split("/")
        .filter(c => {return c.length})
        .pop()
      }
    </a>
  ))
)

const AllLinks = ({blockchainSite, homepage, officialForum, reposGit, subreddit}) => (
  <div className='w-full lg:w-1/3 bg-secondary p-4 flex flex-col'>
    <LinkItem link={blockchainSite} />
    <LinkItem link={homepage} />
    <LinkItem link={officialForum} />
    <LinkItem link={reposGit} />
    <a href={subreddit} target="_blank" rel="noreferrer"  className=" text-main">
      Reedit: {subreddit.split("/").filter(c => {return c.length}).pop()}
    </a>
  </div>
)

export default AllLinks
