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
    <div className="bg-slate-50 p-3.5 m-1 ml-2 border-slate-100 border-2 text-slate-700">
      <div className="flex flex-row justify-between">
        <div className="text-2xl sm:text-3xl font-bold">{name}</div>
        <div className="bg-center bg-no-repeat bg-star ml-2">{stargazers_count}</div>
      </div>
      <div className="text-base sm:text-lg text-slate-500 my-2 ml-1">{description}</div>
      <a className="my-1 text-sm sm:text-base text-blue-600 underline" href={html_url}>{html_url}</a>
      <div className="text-sm sm:text-base">
        <span>{formatMessage({ id: 'lastUpdate' })}</span>
        <span className="font-bold">{dateFormatted}</span>
      </div>
    </div>
  )
}
