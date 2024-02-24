import fs from 'fs'
const fileSystem = fs
const importInterview = async (timestamp: string) => {
  return await import(`public/data/interviews/${timestamp}/index.mdx`)
}

const fetchInterviewMeta = async (timestamp: string) => {
  return (await importInterview(timestamp)).META
}

const fetchInterviewDescription = async (timestamp: string) => {
  return (await importInterview(timestamp)).default
}

const fetchInterview = async (timestamp: string) => {
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
  // それぞれの団体の情報を非同期に取得
  const Interviews = await Promise.all(InterviewIds.map(fetchInterview))
  return Interviews
}

export { fetchInterviewDescription, fetchInterview, fetchInterviews }
