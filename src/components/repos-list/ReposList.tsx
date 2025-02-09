import { FC, UIEvent } from "react";

import { RepoCard } from "@/components/repo-card";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { increasePage } from "@/store/slices";
import { getPage } from "@/store/thunks";

export const ReposList: FC = () => {
  const dispatch = useAppDispatch()
  const list = useAppSelector(({ repos }) => repos)
  const listIsFull = useAppSelector(({ list }) => list)

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
      {list && list.length > 0
        && list.map(({ id, ...repoProps }) => <RepoCard key={id} {...repoProps}></RepoCard>)}
    </div>
  )
}
