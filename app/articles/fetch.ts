import fs from 'fs'
const fileSystem = fs
const importInterview = async (timestamp: string) => {
  console.log('importInterview')
  console.log(timestamp)
  return await import(`public/data/interviews/${timestamp}/index.mdx`)
}

const fetchInterviewMeta = async (timestamp: string) => {
  console.log('fetchInterviewMeta')
  console.log(timestamp)
  return (await importInterview(timestamp)).META
}

const fetchInterviewDescription = async (timestamp: string) => {
  console.log('fetchInterviewDescription')
  console.log(timestamp)
  return (await importInterview(timestamp)).default
}

const fetchInterview = async (timestamp: string) => {
  console.log('fetchInterview')
  console.log(timestamp)
  const Interview = {
    name: '',
    post: '',
    timestamp: '',
  }
  // 団体の情報を非同期に取得
  await Promise.all([
    (async () => {
      Object.assign(Interview, await fetchInterviewMeta(timestamp))
    })(),
  ])
  return Interview
}

const fetchInterviews = async () => {
  // このディレクトリにあるフォルダが全ての団体
  const InterviewIds = (
    await fileSystem.promises.readdir(`public/data/interviews`, {
      withFileTypes: true,
    })
  )
    .filter((dirent) => !dirent.isFile())
    .map((dirent) => dirent.name)
  console.log('fetchInterviews')
  console.log(InterviewIds)
  // それぞれの団体の情報を非同期に取得
  const Interviews = await Promise.all(InterviewIds.map(fetchInterview))
  return Interviews
}

export { fetchInterviewDescription, fetchInterview, fetchInterviews }
