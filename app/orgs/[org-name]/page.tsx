// react

// next
// components
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { faTag, faLocationDot, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fetchOrganizations, fetchOrganization, fetchOrganizationDescription } from '../fetch'
import OrgData from './org-data'
// styles
// icons
// config

const Organization = async ({ params }: { params: { 'org-name': string } }) => {
  // const params = (await fetchOrganizations()).map((org) => ({
  //   params: { 'org-name': org.name },
  // }))
  const decoded = decodeURIComponent(params['org-name'])
  console.log('Organization--')
  console.log(decoded)
  const organizations = await fetchOrganization(decoded)
  return <OrgData props={organizations} />
}

export default Organization
