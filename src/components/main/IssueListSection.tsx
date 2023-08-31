import { useRef, useState } from 'react'
import { styled } from 'styled-components'
import IssueCard from './IssueCard'
import AdBanner from './AdBanner'
import useInfiniteScrollIssues from './hook/useInfiniteScrollIssues'
import { IssueDataType } from '../../util/type'
import useFetchInitialData from '../../api/hook/useFetchInitialData'

const IssueListSection = () => {
  const [issueCard, setIssueCard] = useState<IssueDataType[]>([])
  const issueListRef = useRef<HTMLDivElement>(null)

  useFetchInitialData(setIssueCard)
  const lastIssueRefCallback = useInfiniteScrollIssues(setIssueCard)

  return (
    <Section>
      <Box ref={issueListRef}>
        {issueCard.flatMap((issueData, index) => {
          const isAdBanner = (index + 1) % 4 === 0
          const isLastElement = index === issueCard.length - 1

          return [
            <div
              key={issueData.id}
              ref={isLastElement && !isAdBanner ? lastIssueRefCallback : null}
            >
              <IssueCard {...issueData} userId={issueData.user.login} />
            </div>,
            isAdBanner && (
              <div key={`ad-${index}`} ref={isLastElement ? lastIssueRefCallback : null}>
                <AdBanner />
              </div>
            ),
          ]
        })}
      </Box>
    </Section>
  )
}

const Section = styled.section``
const Box = styled.div`
  height: 65rem;
  overflow-y: scroll;
`

export default IssueListSection
