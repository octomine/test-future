import { FC, UIEvent } from "react";
import { useIntl } from "react-intl";

import { RepoCard } from "@/components/repo-card";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { increasePage } from "@/store/slices";
import { getPage } from "@/store/thunks";
import { Message } from "../message";


export const ReposList: FC = () => {
  const { formatMessage } = useIntl()
  const dispatch = useAppDispatch()

  const list = useAppSelector(({ repos }) => repos.list)
  const listIsFull = useAppSelector(({ repos }) => repos.isFull)

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

  let msg = '';
  switch (true) {
    case list.length === 0:
      msg = formatMessage({ id: "empty" })
      break
    default:
  }

  return (
    <div className="h-full overflow-y-scroll" onScroll={scrollHandler}>
      {msg && <Message message={msg}></Message>}
      {list && list.length > 0
        && list.map(({ id, ...repoProps }) => <RepoCard key={id} {...repoProps}></RepoCard>)}
    </div>
  )
}
