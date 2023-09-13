import { fetchInterview, fetchInterviews } from '../fetch'
import InterviewData from './interview-data'
export async function generateStaticParams() {
  const posts = await fetchInterviews()
  return posts.map((post) => ({
    timestamp: post.timestamp,
  }))
}
const Interview = async ({ params }: { params: { timestamp: string } }) => {
  const decoded = decodeURIComponent(params['timestamp'])
  console.log('Interview--')
  console.log(decoded)
  const Interviews = await fetchInterview(decoded)
  return <InterviewData props={Interviews} />
}

export default Interview
