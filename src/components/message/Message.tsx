import { FC } from "react";
import { TMessageProps } from "./Message.types";

export const Message: FC<TMessageProps> = ({ message }) =>
  <div className="h-full flex justify-center items-center">{message}</div>
