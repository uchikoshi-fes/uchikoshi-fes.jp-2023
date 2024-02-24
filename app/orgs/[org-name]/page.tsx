import { fetchOrganization, fetchOrganizations } from '../fetch'
import OrgData from './org-data'
export async function generateStaticParams() {
  const posts = await fetchOrganizations()

  return posts.map((post) => ({
    'org-name': post.name,
  }))
}
const Organization = async ({ params }: { params: { 'org-name': string } }) => {
  const decoded = decodeURIComponent(params['org-name'])
  const organizations = await fetchOrganization(decoded)
  return <OrgData props={organizations} />
}

export default Organization
