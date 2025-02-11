import { FC, UIEvent } from "react";
import { useIntl } from "react-intl";

import { RepoCard } from "@/components/repo-card";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { increasePage } from "@/store/slices";
import { getPage } from "@/store/thunks";

export const ReposList: FC = () => {
  const { formatMessage } = useIntl()
  const dispatch = useAppDispatch()

  const list = useAppSelector(({ repos }) => repos.list)
  const listIsFull = useAppSelector(({ repos }) => repos.isFull)
  const isLoading = useAppSelector(({ repos }) => repos.isLoading)

  const scrollHandler = ({
    currentTarget: {
      clientHeight,
      scrollHeight,
      scrollTop
    } }: UIEvent<HTMLDivElement>) => {

    if (clientHeight + scrollTop >= scrollHeight && !listIsFull) {
      dispatch(increasePage())
      dispatch(getPage())
    };
  }

  return (
    <div className="h-full overflow-y-scroll" onScroll={scrollHandler}>
      {list.length === 0 && !isLoading &&
        <div className="h-full flex justify-center items-center">
          {formatMessage({ id: "empty" })}
        </div>}
      {list && list.length > 0
        && list.map(({ id, ...repoProps }) => <RepoCard key={id} {...repoProps}></RepoCard>)}
    </div>
  )
}
