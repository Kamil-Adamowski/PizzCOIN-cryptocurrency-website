export const LinkItem = ({link}) => (
  link.map((result, id) => (
    <a
      className="text-main"
      key={id}
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

export const LinkContainer = ({link, containerName}) => (
  <div className="flex flex-col items-center">
    <h3 className="text-special text-2xl">{containerName}</h3>
    <LinkItem link={link} />
  </div>
)

const AllLinks = ({blockchainSite, homepage, officialForum, reposGit}) => (
  <div className='bg-secondary w-full lg:w-1/2 2xl:w-1/3 grid grid-cols-2 gap-4 p-4'>
  <LinkContainer
    containerName='Blockchain Site'
    link={blockchainSite}
  />
    <LinkContainer
    containerName='Homepage'
    link={homepage}
  />
    <LinkContainer
    containerName='Official Forum'
    link={officialForum}
  />
    <LinkContainer
    containerName='Repos Git'
    link={reposGit}
  />
  </div>
)

export default AllLinks
