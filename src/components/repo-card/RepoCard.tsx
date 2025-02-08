import { FC } from "react";
import { useIntl } from "react-intl";
import { format } from 'date-fns'
import { ru } from "date-fns/locale";

import { TRepoCardProps } from "./RepoCard.types";

export const RepoCard: FC<TRepoCardProps> = ({
  name,
  description,
  html_url,
  stargazers_count,
  updated_at
}) => {
  const { formatMessage } = useIntl()
  const dateFormatted = format(updated_at, 'dd MMMM uu', { locale: ru })

  return (
    <div className="bg-slate-50 p-3.5">
      <div className="flex flex-row justify-between">
        <div className="text-3xl font-bold">{name}</div>
        <div className="bg-center bg-no-repeat bg-star">{stargazers_count}</div>
      </div>
      <div>{description}</div>
      <a href={html_url}>{html_url}</a>
      <div>
        <span>{formatMessage({ id: 'lastUpdate' })}</span>
        <span>{dateFormatted}</span>
      </div>
    </div>
  )
}
