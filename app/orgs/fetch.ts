import fs from 'fs'
const fileSystem = fs
const importOrganization = async (name: string) => {
  console.log('importOrganization')
  console.log(name)
  return await import(`public/data/orgs/${name}/index.mdx`)
}

const fetchOrganizationMeta = async (name: string) => {
  console.log('fetchOrganizationMeta')
  console.log(name)
  return (await importOrganization(name)).META
}

const fetchOrganizationLogo = async (name: string) => {
  const dirents = await fileSystem.promises
    .readdir(`public/data/orgs/${name}/`, {
      withFileTypes: true,
    })
    .catch(() => [])
  return dirents.find((dirent) => dirent.isFile() && dirent.name.startsWith('logo.'))?.name
}

const fetchOrganizationDescription = async (name: string) => {
  console.log('fetchOrganizationDescription')
  console.log(name)
  return (await importOrganization(name)).default
}

const fetchOrganization = async (name: string) => {
  console.log('fetchOrganization')
  console.log(name)
  const organization = {
    name,
    logo: '',
    description: '',
    place: '',
    area: '',
    genre: '',
    categotyId: '',
    'parent org': '',
  }
  // 団体の情報を非同期に取得
  await Promise.all([
    (async () => {
      Object.assign(organization, await fetchOrganizationMeta(name))
    })(),
    (async () => {
      organization.logo = (await fetchOrganizationLogo(name)) ?? ''
    })(),
  ])
  return organization
}

const fetchOrganizations = async () => {
  // このディレクトリにあるフォルダが全ての団体
  const organizationIds = (
    await fileSystem.promises.readdir(`public/data/orgs`, {
      withFileTypes: true,
    })
  )
    .filter((dirent) => !dirent.isFile())
    .map((dirent) => dirent.name)
  console.log('fetchOrganizations')
  console.log(organizationIds)
  // それぞれの団体の情報を非同期に取得
  const organizations = await Promise.all(organizationIds.map(fetchOrganization))
  const org = organizations.splice(45, 1)
  organizations.push(org[0])
  organizations.reverse()

  return organizations
}

export { fetchOrganizationDescription, fetchOrganization, fetchOrganizations }
