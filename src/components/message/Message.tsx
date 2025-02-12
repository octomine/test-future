import { FC } from "react";
import { useIntl } from "react-intl";
import { useAppSelector } from "@/store/store";

export const Message: FC = () => {
  const { formatMessage } = useIntl();

  const error = useAppSelector(({ repos }) => repos.error)
  const isLoading = useAppSelector(({ repos }) => repos.isLoading)

  let message;
  if (error) {
    message = error;
  } else if (isLoading) {
    message = formatMessage({ id: 'loading' })
  }

  return message ? (
    <div className={[
      "absolute top-0",
      "flex justify-center items-center",
      "h-full w-full",
      "bg-white/90",
      "text-2xl"
    ].join(' ')}>
      {message}
    </div>
  ) : null
}
