import { FC } from "react";
import { useIntl } from "react-intl";
import { useAppSelector } from "@/store/store";

export const Message: FC = () => {
  const { formatMessage } = useIntl();
  const isLoading = useAppSelector(({ repos }) => repos.isLoading)

  let message;
  if (isLoading) {
    message = formatMessage({ id: 'loading' })
  }

  return message ? (
    <div className={[
      "absolute top-0",
      "flex justify-center items-center",
      "h-full w-full",
      "bg-white/75"
    ].join(' ')}>
      {message}
    </div>
  ) : null
}
